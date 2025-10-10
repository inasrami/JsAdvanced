function deleteByEmail() {
    const input = document.querySelector('[name="email"]');

    const pattern = input.value;

    const rows = Array.from(document.querySelector('tbody').children);

    let found = false;

    for(let row of rows){
        if (row.children[1].textContent == pattern){
            row.remove();
            found = true;
        }
    }

    const output = document.getElementById('result');

    if(found) {
        output.textContent = 'Deleted.';
        input.value = '';
    } else {
        output.textContent = 'Not found.';
    }

}