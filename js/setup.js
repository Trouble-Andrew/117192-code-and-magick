'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var DEFAULT_Y = '80px';
  var DEFAULT_X = '50%';

  setupOpen.addEventListener('click', function () {
    window.popup.open(setup);
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, function () {
      window.popup.open(setup);
    });
  });

  setupClose.addEventListener('click', function () {
    window.popup.close(setup);
    setup.style.top = DEFAULT_Y;
    setup.style.left = DEFAULT_X;
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, function () {
      window.popup.close(setup);
    });
  });

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
})();
