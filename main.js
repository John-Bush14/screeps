var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var creepCreation = require("creep.creation")
var spawn = Game.spawns["Main"]

module.exports.loop = function () { 

   if (spawn.store.getFreeCapacity() == 0) {creepCreation.create();}

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memord.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            if (creep.room.find(FIND_CONSTRUCTION_SITES).length) {
                roleBuilder.run(creep)} 
            else {
                roleHarvester.run(creep)        
            }
        }
    }
}
