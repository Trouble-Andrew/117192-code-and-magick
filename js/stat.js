'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 275;
var CLOUD_X = 100;
var CLOUD_Y = 5;
var GAP = 10;
var TEXT_START_POSITION = 265;
var LEFT_PADDING = 40;
var BAR_MARGIN_RIGHT = 50;
var BAR_START_POSITION = 240;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function getRndBlue() {
  var h = 246;
  var s = 100 * Math.random() | 0;
  var l = 50;
  return 'hsl(' + h + ',' + s + '%' + ',' + l + '%' + ')';
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * i, TEXT_START_POSITION);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRndBlue();
    }

    ctx.fillRect(CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * i, BAR_START_POSITION, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * i, (BAR_HEIGHT * times[i]) / maxTime + 230);
  }

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);
};
