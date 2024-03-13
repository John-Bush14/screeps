var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var creepRenewal = require("creep.renewal")

module.exports.loop = function () { creepRenewal.renew();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
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