function generateReport() {
    const output = document.getElementById('output');
    const checkboxes = document.querySelectorAll('thead input[type="checkbox"]');
    const rows = document.querySelectorAll('tbody tr');
    
    const checkedColumns = [];
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            checkedColumns.push({
                index: index,
                name: checkbox.getAttribute('name')
            });
        }
    });
    
    const report = [];
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = {};
        
        checkedColumns.forEach(col => {
            rowData[col.name] = cells[col.index].textContent;
        });
        
        report.push(rowData);
    });
    
    output.value = JSON.stringify(report, null, 2);
}