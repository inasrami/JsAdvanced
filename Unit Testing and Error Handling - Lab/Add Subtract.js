describe("createCalculator()", () => {
  let calculator;

  beforeEach(() => {
    calculator = createCalculator();
  });

  it("should return an object", () => {
    expect(calculator).to.be.an("object");
  });

  it("should have add, subtract, and get methods", () => {
    expect(calculator).to.have.property("add").that.is.a("function");
    expect(calculator).to.have.property("subtract").that.is.a("function");
    expect(calculator).to.have.property("get").that.is.a("function");
  });

  it("should start with internal value 0", () => {
    expect(calculator.get()).to.equal(0);
  });

  it("should add numbers correctly", () => {
    calculator.add(5);
    calculator.add(10);
    expect(calculator.get()).to.equal(15);
  });

  it("should subtract numbers correctly", () => {
    calculator.subtract(3);
    calculator.subtract(2);
    expect(calculator.get()).to.equal(-5);
  });

  it("should handle mixed add and subtract correctly", () => {
    calculator.add(10);
    calculator.subtract(4);
    expect(calculator.get()).to.equal(6);
  });

  it("should work with numeric strings", () => {
    calculator.add("7");
    calculator.subtract("2");
    expect(calculator.get()).to.equal(5);
  });

  it("should return NaN when non-numeric input is used", () => {
    calculator.add("abc");
    expect(calculator.get()).to.be.NaN;
  });

  it("should not allow direct modification of internal value", () => {
    expect(calculator.value).to.be.undefined;
    expect(calculator._value).to.be.undefined;
  });

  it("should keep value independent between instances", () => {
    const calc1 = createCalculator();
    const calc2 = createCalculator();

    calc1.add(5);
    calc2.subtract(3);

    expect(calc1.get()).to.equal(5);
    expect(calc2.get()).to.equal(-3);
  });
});
