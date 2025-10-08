function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');
    const button = document.querySelector('button');
    const input = document.getElementById('input');
    const result = document.getElementById('result');
    
    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    
    const hexOption = document.createElement('option');
    hexOption.value = 'hexadecimal';
    hexOption.textContent = 'Hexadecimal';
    
    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexOption);
    
    button.addEventListener('click', () => {
        const decimalNumber = Number(input.value);
        const convertTo = selectMenuTo.value;
        
        if (convertTo === 'binary') {
            result.value = decimalNumber.toString(2);
        } else if (convertTo === 'hexadecimal') {
            result.value = decimalNumber.toString(16).toUpperCase();
        }
    });
}