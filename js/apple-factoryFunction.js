function createApplePriceCalculator(boxCost, boxApples, packetSize, desiredProfit) {
    // Calculate cost price per apple 
    var costPricePerApple = boxCost / boxApples;
  
    // Calculate cost price per packet
    var costPricePerPacket = costPricePerApple * packetSize;
  
    // Calculate the number of apples that can be made from the number of apples in a box
    var numApplesPerBox = boxApples * packetSize;
  
    // Calculate the selling price per packet with desired profit
    var sellingPricePerPacket = costPricePerPacket * (1 + desiredProfit);
  
    // Return an object with the calculated values
    return {
      costPricePerApple: costPricePerApple,
      costPricePerPacket: costPricePerPacket,
      numApplesPerBox: numApplesPerBox,
      sellingPricePerPacket: sellingPricePerPacket
    };
  }