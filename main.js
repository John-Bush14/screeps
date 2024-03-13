var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleCharger = require("role.charger");
var creepCreation = require("creep.creation");
var spawn = Game.spawns["Main"];
var roles = {
   harvester: roleHarvester,
   upgrader: roleUpgrader,
   builder: ruleBuilder,
   charger: roleCharger
};

module.exports.loop = function () { 

   if (spawn.store.getFreeCapacity() == 0) {creepCreation.create();}

      for(var name in Game.creeps) {
         var creep = Game.creeps[name];

         roles[creep.memory.role].run();
      }
}
