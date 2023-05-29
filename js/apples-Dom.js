var boxCostInput = document.querySelector("#boxCost");
var boxApplesInput = document.querySelector("#boxApples");
var packetSizeInput = document.querySelector("#packetSize");
var profitPercentageInput = document.querySelector("#profitPercentage");
var numPacketsOutput = document.querySelector("#numPackets");
var costPricePerAppleOutput = document.querySelector("#costPricePerApple");
var costPricePerPacketOutput = document.querySelector("#costPricePerPacket");
var recommendedPacketPriceOutput = document.querySelector("#recommendedPacketPrice");

// Function to calculate apple price
function calculateApplePrice() {
  // Get input values
  var boxCost = parseFloat(boxCostInput.value);
  var boxApples = parseInt(boxApplesInput.value);
  var packetSize = parseInt(packetSizeInput.value);
  var profitPercentage = parseFloat(profitPercentageInput.value);

  // Calculate cost price per apple
  var costPricePerApple = boxCost / boxApples;

  // Calculate cost price per packet
  var costPricePerPacket = costPricePerApple * packetSize;

  // Calculate the number of apples that can be made from the number of apples in a box
  var numPackets = Math.floor(boxApples / packetSize);

  // Calculate the recommended packet price
  var recommendedPacketPrice = costPricePerPacket * (1 + profitPercentage / 100);

  // Update the result fields in the HTML
  numPacketsOutput.value = numPackets;
  costPricePerAppleOutput.value = costPricePerApple.toFixed(2);
  costPricePerPacketOutput.value = costPricePerPacket.toFixed(2);
  recommendedPacketPriceOutput.value = recommendedPacketPrice.toFixed(2);
}

// Add event listener to the "Calculate" button
var calculateButton = document.querySelector(".calcBtn");
calculateButton.addEventListener("click", calculateApplePrice);