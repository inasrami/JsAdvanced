function focused() {
    const inputs = document.querySelectorAll('input[type="text"]');
    
    for (let input of inputs) {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    }
}