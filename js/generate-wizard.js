'use strict';

(function () {
  var wizardsData = {
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var similarListElement = document.querySelector('.setup-similar-list');

  var wizard = {
    eyeClickHandler: function () {},
    coatClickHandler: function () {}
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.util.random(wizardsData.coatColor);
    wizardCoatElement.style.fill = newColor;
    wizard.coatClickHandler(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.util.random(wizardsData.eyesColor);
    wizardEyesElement.style.fill = newColor;
    wizard.eyeClickHandler(newColor);
  });

  var renderWizard = function (wiz) {
    if (wiz.family) {
      wizardElement.querySelector('.setup-similar-label').textContent = wiz.name + ' ' + wiz.family;
    } else {
      wizardElement.querySelector('.setup-similar-label').textContent = wiz.name;
    }
    wizardElement.querySelector('.wizard-coat').style.fill = wiz.colorCoat;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  similarListElement.appendChild(fragment);

  var similarSetup = document.querySelector('.setup-similar');
  similarSetup.classList.remove('hidden');

  window.generateWizard = {
    render: renderWizard,
    wizard: wizard
  };
})();
