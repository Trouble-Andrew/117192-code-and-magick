'use strict';

(function () {
  var DEFAULT_Y = '80px';
  var DEFAULT_X = '50%';

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    window.setup.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.setup.setup.style.top = DEFAULT_Y;
    window.setup.setup.style.left = DEFAULT_X;
  };

  window.setup.setupOpen.addEventListener('click', function () {
    openPopup();
  });

  window.setup.setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  window.setup.setupClose.addEventListener('click', function () {
    closePopup();
  });

  window.setup.setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

})();
