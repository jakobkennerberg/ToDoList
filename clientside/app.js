const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(link => {
    link.addEventListener('click', () => {
        const modal = document.querySelector(link.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(link => {
    link.addEventListener('click', () => {
        const modal = link.closest('.modal');
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

function openModal(modal) {
    if(modal == null) {
        return
    }
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal == null) {
        return
    }
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

console.log('hello world');