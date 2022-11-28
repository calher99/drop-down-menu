import './style.css';

const topOptions = document.querySelectorAll('.drop-down');
const dropDown = document.querySelectorAll('.drop-down-container');
const topOptionArray = Array.from(topOptions);
const dropDownArray = Array.from(dropDown);

topOptionArray.forEach((option) => {
  option.addEventListener('click', addActive);
});
topOptionArray.forEach((option) => {
  option.addEventListener('mouseover', addActive);
});

function addActive(eventObj) {
  const idTarget = eventObj.target.dataset.option;
  const div = document.querySelector(idTarget);
  div.classList.add('active');
}

function removeActive() {}
