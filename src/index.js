import './style.css';

initializeMenu();

function initializeMenu() {
  document.addEventListener('click', (e) => {
    const isDropDown = e.target.matches('[data-option]');

    if (!isDropDown && e.target.closest('.option-container') != null) {
      // Here we click in the drop down container so we want to keep it open
      return;
    }

    let currentDropDown;

    if (isDropDown) {
      currentDropDown = document.querySelector(e.target.dataset.option);
      currentDropDown.classList.toggle('active');
    }

    removeActive();

    function removeActive() {
      const dropDown = document.querySelectorAll('.drop-down-container');
      dropDown.forEach((list) => {
        if (list === currentDropDown) {
          return;
        }
        list.classList.remove('active');
      });
    }
  });
}
