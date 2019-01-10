'use strict';

(function () {
  var WIZARDS_QUANTITY = 4;
  var userDialog = document.querySelector('.setup');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    if (wizard.family) {
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.family;
    } else {
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    }
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var similarSetup = document.querySelector('.setup-similar');
  similarSetup.classList.remove('hidden');

  function renderAllWizards(data) {
    var previousWizards = document.querySelectorAll('.setup-similar-item');
    previousWizards.forEach(function (item) {
      item.remove();
    });
    data.slice(0, WIZARDS_QUANTITY).forEach(function (wizard) {
      fragment.appendChild(renderWizard(wizard));
    });
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }


  window.renderWizard = {
    render: renderAllWizards
  };
})();
