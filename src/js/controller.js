'use strict';

import '../sass/main.scss';
import * as model from './model';
import {
  renderLaoding,
  clearLoading,
  renderWeather,
  renderError,
} from './weatherView';

const searchBtn = document.querySelector('.app__search');
const searchInput = document.querySelector('.app__input');

searchBtn.addEventListener('click', async function (e) {
  const searchCity = searchInput.value;
  renderLaoding();
  const weatherState = await model.seachWeater(searchCity);
  if (!weatherState) {
    clearLoading();
    renderError();
    return;
  }
  clearLoading();
  renderWeather(weatherState);
  // await model.seachWeater(searchCity);
});
