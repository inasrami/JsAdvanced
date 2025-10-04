function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let sum = 0;
    rows.forEach((row, index) => {
        if (index > 0) {
            const cells = row.querySelectorAll('td');
            const price = Number(cells[1].textContent);
            sum += price;
        }
    });
    document.getElementById('sum').textContent = sum.toFixed(2);
}