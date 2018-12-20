'use strict';

(function () {
  var WIZARDS_QUANTITY = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizardsData = {
    name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    family: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var randomizeWizard = function (wizardsArr) {
    var newWizardsData = [];
    window.util.shuffle(wizardsArr.name);
    window.util.shuffle(wizardsArr.family);
    window.util.shuffle(wizardsArr.coatColor);
    window.util.shuffle(wizardsArr.eyesColor);
    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      newWizardsData[i] = {};
      newWizardsData[i].name = wizardsArr.name[i];
      newWizardsData[i].family = wizardsArr.family[i];
      newWizardsData[i].coatColor = wizardsArr.coatColor[i];
      newWizardsData[i].eyesColor = wizardsArr.eyesColor[i];
    }
    return newWizardsData;
  };

  var wizards = randomizeWizard(wizardsData);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.family;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  wizards.forEach(function (i) {
    fragment.appendChild(renderWizard(i));
  });

  similarListElement.appendChild(fragment);

  var similarSetup = document.querySelector('.setup-similar');
  similarSetup.classList.remove('hidden');


  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var coatInput = document.querySelector('input[name=coat-color]');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var eyesInput = document.querySelector('input[name=eyes-color]');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = document.querySelector('input[name=fireball-color]');
  var coatColorsArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColorsArray = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballsArray = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var сoatClickHandler = function () {
    window.util.shuffle(coatColorsArray);
    wizardCoat.style.fill = coatColorsArray[0];
    coatInput.value = coatColorsArray[0];
  };

  var eyesClickHandler = function () {
    window.util.shuffle(eyesColorsArray);
    wizardEyes.style.fill = eyesColorsArray[0];
    eyesInput.value = eyesColorsArray[0];
  };

  var fireballsClickHandler = function () {
    window.util.shuffle(fireballsArray);
    wizardFireball.style.background = fireballsArray[0];
    fireballInput.value = fireballsArray[0];
  };


  wizardCoat.addEventListener('click', сoatClickHandler);
  wizardEyes.addEventListener('click', eyesClickHandler);
  wizardFireball.addEventListener('click', fireballsClickHandler);

  window.setup = {
    setup: setup,
    setupOpen: setupOpen,
    setupClose: setupClose
  };
})();
