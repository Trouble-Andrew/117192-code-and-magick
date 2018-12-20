'use strict';

(function () {
  var dialogHandler = document.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.setup.style.top = (window.setup.setup.offsetTop - shift.y) + 'px';
      window.setup.setup.style.left = (window.setup.setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (draggedEvt) {
          draggedEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var artifactsShop = window.setup.setup.querySelector('.setup-artifacts-shop');
  var artifactCell = artifactsShop.querySelector('.setup-artifacts-cell');
  var artifact = artifactCell.children[0];
  var dragged;

  artifact.addEventListener('dragstart', function (evt) {
    dragged = evt.target;
    evt.target.style.opacity = 0.5;
  }, false);

  artifact.addEventListener('dragend', function (evt) {
    evt.target.style.opacity = '';
  }, false);

  window.setup.setup.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  }, false);

  window.setup.setup.addEventListener('dragenter', function (evt) {
    if (evt.target.className === 'setup-artifacts-cell') {
      evt.target.style.background = 'rgba(0, 0, 0, 0.2)';
    }
  }, false);

  window.setup.setup.addEventListener('dragleave', function (evt) {
    if (evt.target.className === 'setup-artifacts-cell') {
      evt.target.style.background = '';
    }
  }, false);

  window.setup.setup.addEventListener('drop', function (evt) {
    evt.preventDefault();
    if (evt.target.className === 'setup-artifacts-cell') {
      evt.target.style.background = '';
      dragged.parentNode.removeChild(dragged);
      evt.target.appendChild(dragged);
    }
  }, false);

})();
