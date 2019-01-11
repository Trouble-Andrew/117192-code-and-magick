'use strict';

(function () {
  var wizardsData = {
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var renderWizard = function (wiz) {
    if (wiz.family) {
      wizardElement.querySelector('.setup-similar-label').textContent = wiz.name + ' ' + wiz.family;
    } else {
      wizardElement.querySelector('.setup-similar-label').textContent = wiz.name;
    }
    wizardElement.querySelector('.wizard-coat').style.fill = wiz.colorCoat;

    return wizardElement;
  };

  window.generateWizard = {
    render: renderWizard,
    wizard: wizardsData
  };
})();
