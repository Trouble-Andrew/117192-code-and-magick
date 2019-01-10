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
    window.util.pressEnter(evt, function () {
      window.popup.open(setup);
    });
  });

  setupClose.addEventListener('click', function () {
    window.popup.close(setup);
    setup.style.top = DEFAULT_Y;
    setup.style.left = DEFAULT_X;
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.pressEnter(evt, function () {
      window.popup.close(setup);
    });
  });


  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = document.querySelector('input[name=fireball-color]');
  var fireballsArray = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var fireballsClickHandler = function () {
    window.util.shuffle(fireballsArray);
    wizardFireball.style.background = fireballsArray[0];
    fireballInput.value = fireballsArray[0];
  };

  wizardFireball.addEventListener('click', fireballsClickHandler);

  var userDialog = document.querySelector('.setup');

  var form = document.querySelector('.setup-wizard-form');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
