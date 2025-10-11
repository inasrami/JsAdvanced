function filterEmployees(data, criteria) {
    const employees = JSON.parse(data);
    
    if (criteria === 'all') {
        employees.forEach((employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
    } else {
        const [criteriaKey, criteriaValue] = criteria.split('-');
        
        const filtered = employees.filter(employee => employee[criteriaKey] === criteriaValue);
        
        filtered.forEach((employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
    }
}