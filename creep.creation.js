/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.renewal');
 * mod.thing == 'a thing'; // true
 */

module.exports = { create() {
    var minimums = [3, 1, 1];
    var roles = ["harvester", "upgrader", "builder"];
    var fulfilled = 0;
    
    for(var i in [0, 1, 2]) {
        roleAmount = _.filter(Game.creeps, (creep) => creep.memory.role == roles[i]).length;
        if (roleAmount < minimums[i]) {
            Game.spawns["Main"].spawnCreep([WORK, MOVE, CARRY], role[i]+(roleAmount+1).toString(), {memory: {"role": roles[i]}})
        } else {fulfilled += 1}
    } if (fulfilled == 3) {
        Game.spawns["Main"].spawnCreep(
            [WORK, MOVE, CARRY], "H"+_.filter(Game.creeps, (creep) => creep.memory.role == roles[i]).length.toString(), {memory: {"role": "builder"}})
    }
}};
