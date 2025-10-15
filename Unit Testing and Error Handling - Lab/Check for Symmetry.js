describe("Check for Symmetry Tests", function() {
    it("should return true for symmetric array", function() {
        assert.isTrue(isSymmetric([1, 2, 1]));
    });
    
    it("should return true for single element", function() {
        assert.isTrue(isSymmetric([1]));
    });
    
    it("should return true for empty array", function() {
        assert.isTrue(isSymmetric([]));
    });
    
    it("should return false for non-symmetric array", function() {
        assert.isFalse(isSymmetric([1, 2, 3]));
    });
    
    it("should return false for non-array input - string", function() {
        assert.isFalse(isSymmetric('string'));
    });
    
    it("should return false for non-array input - number", function() {
        assert.isFalse(isSymmetric(123));
    });
    
    it("should return false for non-array input - object", function() {
        assert.isFalse(isSymmetric({}));
    });
    
    it("should handle array with different types", function() {
        assert.isFalse(isSymmetric([1, '1']));
    });
    
    it("should handle symmetric array with strings", function() {
        assert.isTrue(isSymmetric(['a', 'b', 'a']));
    });
});