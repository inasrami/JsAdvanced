function calculator() {
    let selector1;
    let selector2;
    let resultSelector;

    return {
        init: function(sel1, sel2, resultSel) {
            selector1 = sel1;
            selector2 = sel2;
            resultSelector = resultSel;
        },
        add: function() {
            const num1 = Number(document.querySelector(selector1).value);
            const num2 = Number(document.querySelector(selector2).value);
            const result = num1 + num2;
            document.querySelector(resultSelector).value = result;
        },
        subtract: function() {
            const num1 = Number(document.querySelector(selector1).value);
            const num2 = Number(document.querySelector(selector2).value);
            const result = num1 - num2;
            document.querySelector(resultSelector).value = result;
        }
    };
}