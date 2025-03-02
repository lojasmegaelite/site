document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');
    const countdown = document.getElementById('countdown');
    const whatsappLink = 'https://chat.whatsapp.com/GdOFvStBLgH3qwibxPZkgq';
    
    let secondsLeft = 5;
    let progressWidth = 0;
    
    // Atualiza a barra de progresso a cada 50ms para um efeito mais suave
    const updateInterval = 50;
    const totalIntervals = secondsLeft * (1000 / updateInterval);
    const progressIncrement = 100 / totalIntervals;
    
    const timer = setInterval(function() {
        progressWidth += progressIncrement;
        progressBar.style.width = progressWidth + '%';
        
        if (progressWidth >= 100) {
            clearInterval(timer);
            window.location.href = whatsappLink;
        }
        
        // Atualiza o texto do contador a cada segundo
        if (progressWidth % (100 / secondsLeft) < progressIncrement) {
            secondsLeft--;
            countdown.textContent = secondsLeft + ' segundos restantes';
            
            if (secondsLeft === 1) {
                countdown.textContent = secondsLeft + ' segundo restante';
            }
            
            if (secondsLeft <= 0) {
                countdown.textContent = 'Redirecionando...';
            }
        }
    }, updateInterval);
});
