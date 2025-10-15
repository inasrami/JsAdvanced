describe("RGB to Hex Tests", function() {
    it("should convert valid RGB to hex", function() {
        assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA');
    });
    
    it("should convert black to hex", function() {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });
    
    it("should convert white to hex", function() {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });
    
    it("should return undefined for red < 0", function() {
        assert.isUndefined(rgbToHexColor(-1, 0, 0));
    });
    
    it("should return undefined for red > 255", function() {
        assert.isUndefined(rgbToHexColor(256, 0, 0));
    });
    
    it("should return undefined for green < 0", function() {
        assert.isUndefined(rgbToHexColor(0, -1, 0));
    });
    
    it("should return undefined for green > 255", function() {
        assert.isUndefined(rgbToHexColor(0, 256, 0));
    });
    
    it("should return undefined for blue < 0", function() {
        assert.isUndefined(rgbToHexColor(0, 0, -1));
    });
    
    it("should return undefined for blue > 255", function() {
        assert.isUndefined(rgbToHexColor(0, 0, 256));
    });
    
    it("should return undefined for non-integer red", function() {
        assert.isUndefined(rgbToHexColor(1.5, 0, 0));
    });
    
    it("should return undefined for string input", function() {
        assert.isUndefined(rgbToHexColor('255', 0, 0));
    });
});