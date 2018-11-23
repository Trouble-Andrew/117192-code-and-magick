'use strict';

var WIZARDS_QUANTITY = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var randomizeWizard = function (wizardsArr) {
  var newWizardsData = [];
  shuffle(wizardsArr.name);
  shuffle(wizardsArr.family);
  shuffle(wizardsArr.coatColor);
  shuffle(wizardsArr.eyesColor);
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
