const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//function addBatteries(batteryBatches) {
    //let totalBatteries = 0;

    //for(const batteries of batteryBatches) {
   //     totalBatteries += batteries;
   // };

    //return totalBatteries
//}

//console.log(addBatteries(batteryBatches))


const startingBatteries = 0;
const totalBatteries = batteryBatches.reduce((noBatteries, allBatteries) => noBatteries + allBatteries, startingBatteries);

console.log(totalBatteries)