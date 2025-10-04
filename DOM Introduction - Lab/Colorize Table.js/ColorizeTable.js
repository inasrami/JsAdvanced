function ColorizeTable() {
    const rows = document.querySelectorAll('table tr');
    rows.forEach((row, index) => {
        if (index % 2 !== 0) {
            row.style.backgroundColor = 'Teal';
        }
    });
}