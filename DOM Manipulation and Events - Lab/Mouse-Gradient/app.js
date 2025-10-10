
function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', function(event) {
        const width = this.clientWidth;
        const offset = event.offsetX;
        const percent = (offset / width) * 100;
        result.textContent = Math.floor(percent) + '%';
    });

    gradient.addEventListener('mouseout', function() {
        result.textContent = '';
    });
}