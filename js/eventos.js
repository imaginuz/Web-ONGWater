document.addEventListener('DOMContentLoaded', function() {
    const eventDateElement = document.querySelector('.featured-event-date');
    const eventDate = new Date(eventDateElement.getAttribute('data-event-date'));
    
    function updateCountdown() {
        const now = new Date();
        const difference = eventDate - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        document.getElementById('days').innerText = days;
    }

    updateCountdown();
    setInterval(updateCountdown, 86400000); // cada 24 horas
});