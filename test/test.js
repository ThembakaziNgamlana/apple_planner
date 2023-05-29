describe('createApplePriceCalculator', function() {
    it('should calculate the apple prices correctly', function() {
      const boxCost = 10;
      const boxApples = 20;
      const packetSize = 4;
      const desiredProfit = 0.2;

      const result = createApplePriceCalculator(boxCost, boxApples, packetSize, desiredProfit);
  
      assert.strictEqual(result.costPricePerApple, 0.5);
      assert.strictEqual(result.costPricePerPacket, 2);
      assert.strictEqual(result.numApplesPerBox, 80);
      assert.strictEqual(result.sellingPricePerPacket, 2.4);
    });
  
  it('should handle large input values', function() {
        const boxCost = 1000;
        const boxApples = 5000;
        const packetSize = 10;
        const desiredProfit = 0.05;

        const result = createApplePriceCalculator(boxCost, boxApples, packetSize, desiredProfit);
      
        assert.strictEqual(result.costPricePerApple, 0.2);
        assert.strictEqual(result.costPricePerPacket, 2);
        assert.strictEqual(result.numApplesPerBox, 50000);
        assert.strictEqual(result.sellingPricePerPacket, 2.1);
      });


      it('should handle positive numbers', function() {
        const boxCost = 10;
        const boxApples = 20;
        const packetSize = 5;
        const desiredProfit = 0.2;
        const result = createApplePriceCalculator(boxCost, boxApples, packetSize, desiredProfit);

        assert.strictEqual(result.costPricePerApple, 0.5);
        assert.strictEqual(result.costPricePerPacket, 2.5);
        assert.strictEqual(result.numApplesPerBox, 100);
        assert.strictEqual(result.sellingPricePerPacket, 3);
      });
    
      it('should handle negative numbers', function() {
    
        const boxCost = -15;
        const boxApples = 30;
        const packetSize = -4;
        const desiredProfit = 0.15;

        const result = createApplePriceCalculator(boxCost, boxApples, packetSize, desiredProfit);

        assert.strictEqual(result.costPricePerApple, -0.5);
        assert.strictEqual(result.costPricePerPacket, 2);
        assert.strictEqual(result.numApplesPerBox, -120);
        assert.strictEqual(result.sellingPricePerPacket, 2.3);
      });
    
      it('should handle decimal numbers', function() {
    
        const boxCost = 12.5;
        const boxApples = 15;
        const packetSize = 3;
        const desiredProfit = 0.25;
    
        const result = createApplePriceCalculator(boxCost, boxApples, packetSize, desiredProfit);
    
        assert.strictEqual(result.costPricePerApple, 0.8333333333333334);
        assert.strictEqual(result.costPricePerPacket, 2.5);
        assert.strictEqual(result.numApplesPerBox, 45);
        assert.strictEqual(result.sellingPricePerPacket, 3.125);
      });

});