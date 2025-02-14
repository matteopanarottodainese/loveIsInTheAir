document.getElementById('bacioBtn').addEventListener('click', function() {
  const maschio = document.querySelector('.maschio');
  const femmina = document.querySelector('.femmina');
  const messaggio = document.getElementById('messaggio');

  // Muovi i personaggi verso il centro
  maschio.style.transform = 'translateX(200px)';
  femmina.style.transform = 'translateX(-200px)';

  // Mostra il messaggio dopo 2 secondi
  setTimeout(() => {
      messaggio.classList.remove('hidden');
  }, 2000);

  // Aggiungi cuori animati (opzionale)
  for (let i = 0; i < 10; i++) {
      const cuore = document.createElement('div');
      cuore.classList.add('cuore');
      cuore.style.left = `${Math.random() * 100}%`;
      cuore.style.top = `${Math.random() * 50}%`;
      document.body.appendChild(cuore);

      // Rimuovi i cuori dopo l'animazione
      setTimeout(() => {
          cuore.remove();
      }, 1000);
  }
});