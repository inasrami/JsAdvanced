function validate() {
    const emailInput = document.getElementById('email');
    
    emailInput.addEventListener('change', function() {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        
        if (pattern.test(this.value)) {
            this.classList.remove('error');
        } else {
            this.classList.add('error');
        }
    });
}