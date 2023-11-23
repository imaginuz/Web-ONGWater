document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(function(card) {
      card.addEventListener('mouseover', function() {
        this.style.transition = 'all 0.8s';
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = 'none';
        this.style.cursor = 'pointer';
      });
  
      card.addEventListener('mouseout', function() {
        this.style.transition = 'all 0.8s';
        this.style.transform = '';
        this.style.boxShadow = '';
        this.style.cursor = '';
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(function(card) {
      card.addEventListener('mouseover', function() {
        if (window.matchMedia("(max-width: 896px)").matches) {
          this.style.transition = 'all 0.8s';
          this.style.transform = 'none';
          this.style.boxShadow = 'none';
          this.style.cursor = 'auto';
        }
      });
    });
  });