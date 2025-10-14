function solve() {
    const [nameInput, hallInput, priceInput] = document.querySelectorAll('#add-new input');
    const onScreenButton = document.querySelector('#add-new button');
    const moviesUl = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');

    onScreenButton.addEventListener('click', onScreen);
    clearButton.addEventListener('click', clearArchive);

    function onScreen(event) {
        event.preventDefault();
        
        const name = nameInput.value;
        const hall = hallInput.value;
        const price = priceInput.value;

        if (!name || !hall || !price || isNaN(price)) {
            return;
        }

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = name;
        
        const strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        
        const div = document.createElement('div');
        
        const priceStrong = document.createElement('strong');
        priceStrong.textContent = Number(price).toFixed(2);
        
        const ticketsInput = document.createElement('input');
        ticketsInput.placeholder = 'Tickets Sold';
        
        const archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        archiveBtn.addEventListener('click', archive);
        
        div.appendChild(priceStrong);
        div.appendChild(ticketsInput);
        div.appendChild(archiveBtn);
        
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        
        moviesUl.appendChild(li);
        
        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';
    }

    function archive(event) {
        const archiveBtn = event.target;
        const div = archiveBtn.parentElement;
        const ticketsInput = div.querySelector('input');
        const ticketsSold = ticketsInput.value;
        
        if (!ticketsSold || isNaN(ticketsSold)) {
            return;
        }
        
        const li = div.parentElement;
        const movieName = li.querySelector('span').textContent;
        const priceStrong = div.querySelector('strong');
        const ticketPrice = Number(priceStrong.textContent);
        
        const totalProfit = ticketPrice * Number(ticketsSold);
        
        const archiveLi = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = movieName;
        
        const strong = document.createElement('strong');
        strong.textContent = `Total amount: ${totalProfit.toFixed(2)}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteMovie);
        
        archiveLi.appendChild(span);
        archiveLi.appendChild(strong);
        archiveLi.appendChild(deleteBtn);
        
        archiveUl.appendChild(archiveLi);
        
        li.remove();
    }

    function deleteMovie(event) {
        const deleteBtn = event.target;
        const li = deleteBtn.parentElement;
        li.remove();
    }

    function clearArchive(event) {
        event.preventDefault();
        archiveUl.innerHTML = '';
    }
}