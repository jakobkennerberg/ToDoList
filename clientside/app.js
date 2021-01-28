//const openModalButtons = document.querySelectorAll('[data-modal-target]');
//const closeModalButtons = document.querySelectorAll('[data-close-button]');
const checkboxes = document.querySelectorAll('[data-checkbox]');
const overlay = document.getElementById('overlay');

 checkboxes.forEach(checkbox => {
     checkbox.addEventListener('click', () => {
         boxChecked = false;
         if(checkbox.classList.contains('checked')) {
             unCross(checkbox);
         } else {
            crossOut(checkbox); 
            boxChecked = true;
         }
       
        checked(checkbox.id, boxChecked); 
    })
 })
 

/* openModalButtons.forEach(link => {
    link.addEventListener('click', () => {
        const modal = document.querySelector(link.dataset.modalTarget);
        openModal(modal);
    })
}) */

/* closeModalButtons.forEach(link => {
    link.addEventListener('click', () => {
        const modal = link.closest('.modal');
        closeModal(modal);
    })
}) */

function unCross(checkbox) {
    checkbox.classList.remove('checked');
    checkbox.innerHTML = "";
    checkbox.closest('.taskContainer').classList.remove('crossed');
    elements = getTaskElements(checkbox);
    elements[0].classList.remove('crossed');
    elements[1].classList.remove('crossed');

}

function crossOut(checkbox) {
    checkbox.innerHTML = "&check;"; 
    checkbox.classList.add('checked');
    const taskItem = checkbox.closest('.taskContainer');
    taskItem.classList.add('crossed');
    elements = getTaskElements(checkbox);
    elements[0].classList.add('crossed');
    elements[1].classList.add('crossed');
    const listElement = taskItem.closest('.taskList');
    listElement.appendChild(taskItem);
}

function getTaskElements(checkbox) {
    const sibling = checkbox.previousElementSibling;
    const siblingChildren = Array.from(sibling.children);
    return siblingChildren;
    
}

function checked(id, boxChecked) {
    //Send http request of modifying checked attribute in DB
}


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