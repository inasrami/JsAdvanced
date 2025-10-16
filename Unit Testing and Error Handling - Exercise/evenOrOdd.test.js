import { assert, expect } from "chai";
import { isOddOrEven } from "./evenOrOdd.js";

describe("main test", () => {
    it("test with non string value", () => {
        assert.equal(isOddOrEven(1223432423), undefined, "result must be undefined");
        assert.equal(isOddOrEven(["Pesho", "Gosho"]), undefined, "result must be undefined");
        expect(isOddOrEven(1223432423)).to.be.equal(undefined);
    });

    it("test with correct value and odd length", () => {
        assert.equal(isOddOrEven("abc"), "odd", "result must be odd");
    });

    it("test with correct value and even length", () => {
        assert.equal(isOddOrEven("abcd"), "even", "result must be even");
    });
});