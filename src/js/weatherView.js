'use strict';

import { Spinner } from 'spin.js';

const weatherField = document.querySelector('.app__info-field');
const appLeft = document.querySelector('.app__left-part');
const appRight = document.querySelector('.app__right-part');

const opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000000', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

export function renderLaoding() {
  weatherField.innerHTML = '';
  let spinner = new Spinner(opts).spin(weatherField);
  weatherField.appendChild(spinner.el);
}

export function clearLoading() {
  weatherField.innerHTML = '';
}

function generateElement(text, italic) {
  const newElem = document.createElement('h2');
  newElem.insertAdjacentHTML(
    'afterbegin',
    ` 
  <h2 class="app__elem">
  ${text}: <span class="thin">${italic}</span>
  </h2>`
  );
  return newElem;
}

export function renderWeather(state) {
  weatherField.innerHTML = '';
  const leftPart = document.createElement('div');
  leftPart.classList.add('app__left-part');
  weatherField.appendChild(leftPart);
  leftPart.appendChild(generateElement('City', state.cityName));
  leftPart.appendChild(generateElement('Region', state.region));
  leftPart.appendChild(generateElement('Country', state.country));
  const rightPart = document.createElement('div');
  rightPart.classList.add('app__right-part');
  weatherField.appendChild(rightPart);
  rightPart.appendChild(generateElement('Celcius', state.tempC));
  rightPart.appendChild(generateElement('Fahrenheit', state.tempF));
  rightPart.appendChild(generateElement('Humidity', state.humidity));
  rightPart.appendChild(generateElement('Last updated', state.lastUpdated));
}

export function renderError(error) {
  const errorElem = document.createElement('div');
  errorElem.classList.add('app__error');
  errorElem.innerText = 'Looks like this place do not exist :(';
  weatherField.appendChild(errorElem);
}
