// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// seleziono gli elementi dal DOM

const modalBtn = document.querySelector('.modal-btn');

const modalOverlay = document.querySelector('.modal-overlay');

const closeBtn = document.querySelector('.close-btn');

// aggancio un ascoltatore di eventi al pulsante della modale

modalBtn.addEventListener('click', () => {
    // controllo il bottone per aprire la modale
    modalOverlay.classList.add('open-modal');
});