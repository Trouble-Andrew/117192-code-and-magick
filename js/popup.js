'use strict';

(function () {
  var openedPopup;

  var open = function (popup) {
    openedPopup = popup;
    popup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var close = function () {
    openedPopup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    window.util.pressEsc(evt, close);
  };

  window.popup = {
    open: open,
    close: close
  };

})();
