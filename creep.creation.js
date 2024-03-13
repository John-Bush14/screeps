module.exports = { create() {
   var minimums = [3, 1, 1];
   var roles = [
      {role: "harvester", prefix: "H", ratio: [0, 1]},
      {role: "charger", prefix: "C", ratio: [1, 0]},
      {role: "upgrader", prefix: "U", ratio: [1, 0]},
      {role: "builder", prefix: "B", ratio: [1, 0]},
   ];
  var surplus = 2;

    
   for(var i in [0, 1, 2]) {
      roleAmount = _.filter(Game.creeps, (creep) => creep.memory.role == roles[i]["role"]).length;
      if (roleAmount < minimums[i]) {
         Game.spawns["Main"].spawnCreep(
            [WORK, MOVE, CARRY], roles[i]["prefix"]+(roleAmount+1).toString(), {memory: {"role": roles[i]["role"]}});
         return;
      }
   }
   Game.spawns["Main"].spawnCreep( 
      [WORK, MOVE, CARRY], 
      roles[surplus]["prefix"] + _.filter(Game.creeps, (creep) => creep.memory.role == roles[surplus]["role"]).length.toString(),
      {memory: {"role": roles[surplus]["role"]}})
}};
