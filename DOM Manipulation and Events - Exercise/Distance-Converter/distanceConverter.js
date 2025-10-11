function attachEventsListeners() {
    const convertBtn = document.getElementById('convert');
    const inputDistance = document.getElementById('inputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputDistance = document.getElementById('outputDistance');
    const outputUnits = document.getElementById('outputUnits');

    const conversionRates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertBtn.addEventListener('click', convert);

    function convert() {
        const inputValue = Number(inputDistance.value);
        const fromUnit = inputUnits.value;
        const toUnit = outputUnits.value;

        const valueInMeters = inputValue * conversionRates[fromUnit];

        const result = valueInMeters / conversionRates[toUnit];

        outputDistance.value = result;
    }
}