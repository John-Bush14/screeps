var roleCharger = {
   run: function(creep) {

      if(creep.memory.transfering && creep.store.getFreeCapacity() == 0) {
         creep.memory.transfering = false;
	   }
	   if(!creep.memory.transfering && creep.store.getUsedCapacity() == 0) {
	      creep.memory.transfering = true;
      }

      if(!creep.memory.transfering) {            
         var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
               return (structure.structureType == STRUCTURE_EXTENSION ||
                  structure.structureType == STRUCTURE_SPAWN ||
                  structure.structureType == STRUCTURE_TOWER ||) && 
                  structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }});

         if(targets.length > 0) {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
               creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
         }}
      } return;

      var storage = creep.room.find(FIND_DEPOSITS);

      if(storage[0].transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
         creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
      }
}}
