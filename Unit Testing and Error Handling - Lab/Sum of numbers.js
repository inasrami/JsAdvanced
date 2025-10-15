describe("Sum of Numbers Tests", function() {
    it("should return sum of numbers in array", function() {
        assert.equal(sum([1, 2, 3]), 6);
    });
    
    it("should return 0 for empty array", function() {
        assert.equal(sum([]), 0);
    });
    
    it("should return sum of single element", function() {
        assert.equal(sum([5]), 5);
    });
    
    it("should convert strings to numbers", function() {
        assert.equal(sum(['1', '2', '3']), 6);
    });
    
    it("should handle negative numbers", function() {
        assert.equal(sum([-1, -2, -3]), -6);
    });
    
    it("should handle mixed positive and negative", function() {
        assert.equal(sum([1, -2, 3]), 2);
    });
    
    it("should handle floating point numbers", function() {
        assert.equal(sum([1.5, 2.5]), 4);
    });
});