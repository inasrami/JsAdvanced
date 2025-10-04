function CollectListItems(){
    const items = document.querySelectorAll('ul li');
    const result = Array.from(items).map(li => li.textContent).join(', ');
    document.getElementById('result').textContent = result;
}