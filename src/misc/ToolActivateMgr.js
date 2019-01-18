import angular from 'angular';
import googAsserts from 'goog/asserts.js';


/**
 * An entry for a tool in a `ngeo.misc.ToolActivateMgr` group.
 * @typedef {{
 *    tool: (ngeo.misc.ToolActivate),
 *    defaultTool: boolean,
 *    unlisten: (function(): void)
 * }} miscToolActivateMgrEntry
 */


/**
 * Provides a service to manage the activation of `ngeo.misc.ToolActivate` objects.
 *
 * Example:
 *
 * Each tool must be registered before using it.
 *
 *     let tool = new ngeo.misc.ToolActivate(interaction, 'active');
 *     ngeoToolActivateMgr.registerTool('mapTools', tool);
 *
 * A tool will be registered in a group identified by a group name.
 * Once registered a tool can be activated and deactivated. When activating a
 * tool, all others tools in the same group will be deactivated.
 *
 *     ngeoToolActivateMgr.activateTool(tool);
 *     ngeoToolActivateMgr.deactivateTool(tool);
 *
 * See our live examples:
 * [../examples/mapquery.html](../examples/mapquery.html)
 * [../examples/toolActivate.html](../examples/toolActivate.html)
 *
 * @param {angular.IScope} $rootScope The rootScope provider.
 * @constructor
 * @ngdoc service
 * @ngname ngeoToolActivateMgr
 * @ngInject
 */
function ToolActivateMgr($rootScope) {

  /**
   * @type {!Object.<string, Array.<miscToolActivateMgrEntry>>}
   * @private
   */
  this.groups_ = {};

  /**
   * The scope.
   * @type {angular.IScope}
   * @private
   */
  this.scope_ = $rootScope;
}


/**
 * Register a tool.
 * @param {string} groupName Name of the group of this tool.
 * @param {import("ngeo/misc/ToolActivate.js").default} tool Tool to register.
 * @param {boolean=} opt_defaultActivate If true, this tool will be activated
 *     when all other tools in the group are deactivated.
 * @export
 */
ToolActivateMgr.prototype.registerTool = function(groupName, tool,
  opt_defaultActivate) {
  let entries = this.groups_[groupName];
  if (!entries) {
    entries = this.groups_[groupName] = [];
  }

  const unlisten = this.scope_.$watch(
    tool.getActive,
    (newVal, oldVal) => {
      if (newVal === oldVal) {
        return;
      }
      if (newVal) {
        this.deactivateTools_(groupName, tool);
      } else {
        this.activateDefault_(groupName);
      }
    });

  entries.push({
    tool: tool,
    defaultTool: opt_defaultActivate || false,
    unlisten: unlisten
  });

  if (googAsserts.ENABLE_ASSERTS) {
    // check that only one default tool per group exists
    let defaultTools = 0;
    entries.forEach((entry) => {
      if (entry.defaultTool) {
        defaultTools++;
      }
    });
    googAsserts.assert(
      defaultTools <= 1, `more than one default tool in group ${groupName}`);
  }
};


/**
 * Unregister a tool from a group.
 * @param {string} groupName Name of the group of this tool.
 * @param {import("ngeo/misc/ToolActivate.js").default} tool Tool to unregister.
 * @export
 */
ToolActivateMgr.prototype.unregisterTool = function(groupName, tool) {
  const entries = this.groups_[groupName];
  if (entries) {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].tool == tool) {
        entries[i].unlisten();
        entries.splice(i, 1);
        break;
      }
    }
  }
};


/**
 * Unregister each tool from a group.
 * @param {string} groupName Name of the group of tools to unregister.
 * @export
 */
ToolActivateMgr.prototype.unregisterGroup = function(groupName) {
  const entries = this.groups_[groupName];
  if (entries) {
    for (let i = 0; i < entries.length; i++) {
      entries[i].unlisten();
    }
    delete this.groups_[groupName];
  }
};


/**
 * Activate a tool.
 * @param {import("ngeo/misc/ToolActivate.js").default} tool Tool to activate.
 * @export
 */
ToolActivateMgr.prototype.activateTool = function(tool) {
  tool.setActive(true);
};


/**
 * Deactivate a tool.
 * @param {import("ngeo/misc/ToolActivate.js").default} tool Tool to deactivate.
 * @export
 */
ToolActivateMgr.prototype.deactivateTool = function(tool) {
  tool.setActive(false);
};


/**
 * Deactivate all tools except the given one.
 *
 * @param {string} groupName Name of the group.
 * @param {import("ngeo/misc/ToolActivate.js").default} tool Tool to activate.
 * @private
 */
ToolActivateMgr.prototype.deactivateTools_ = function(groupName, tool) {
  const entries = this.groups_[groupName];
  for (let i = 0; i < entries.length; i++) {
    if (tool != entries[i].tool) {
      entries[i].tool.setActive(false);
    }
  }
};


/**
 * Activate the default tool in the given group if no other tool is active.
 *
 * @param {string} groupName Name of the group.
 * @private
 */
ToolActivateMgr.prototype.activateDefault_ = function(groupName) {
  const entries = this.groups_[groupName];
  let defaultTool = null;
  let hasActiveTool = false;

  for (let i = 0; i < entries.length; i++) {
    hasActiveTool = hasActiveTool || entries[i].tool.getActive();

    if (entries[i].defaultTool) {
      defaultTool = entries[i].tool;
    }
  }

  if (!hasActiveTool && defaultTool !== null) {
    defaultTool.setActive(true);
  }
};


const module = angular.module('ngeoToolActivateMgr', []);
module.service('ngeoToolActivateMgr', ToolActivateMgr);


export default module;
