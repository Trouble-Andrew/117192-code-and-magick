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
  var h = 246,
    s = 100 * Math.random() | 0,
    l = 50;
  return 'hsl(' + h + ',' + s + '%' + ',' + l + '%' + ')';
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // var playerIndex = 0;
  // var playerName = 'Вы';

  // var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];

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
    ctx.fillText(Math.round(times[i]), CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * i, 80);
  }

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);


//   ctx.fillText(playerName, CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * playerIndex, TEXT_START_POSITION);
//   ctx.fillStyle = 'rgba(255, 0, 0, 1)';
//   ctx.fillRect(CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * playerIndex, BAR_START_POSITION, BAR_WIDTH, BAR_HEIGHT);
//
//   ctx.fillStyle = '#000';
//   var playerIndex = 1;
//   var playerName = 'Иван';
//
//   ctx.fillText(playerName, CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * playerIndex, TEXT_START_POSITION);
//   ctx.fillStyle = 'rgba(255, 0, 0, 1)';
//   ctx.fillRect(CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * playerIndex, BAR_START_POSITION, BAR_WIDTH, BAR_HEIGHT);
//
//   ctx.fillStyle = '#000';
//   var playerIndex = 2;
//   var playerName = 'Юлия';
//
//   ctx.fillText(playerName, CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * playerIndex, TEXT_START_POSITION);
//   ctx.fillStyle = 'rgba(255, 0, 0, 1)';
//   ctx.fillRect(CLOUD_X + LEFT_PADDING + (BAR_WIDTH + BAR_MARGIN_RIGHT) * playerIndex, BAR_START_POSITION, BAR_WIDTH, BAR_HEIGHT);
};


// window.renderStatistics = function(ctx) {
//   renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
//   renderCloud(ctx, 100, 50, '#fff');
//   ctx.fillStyle = '#000';
//   ctx.fillText('Вы', 110, 75);
//   ctx.fillRect(160, 60, 430, 20);
//   ctx.fillText('Иван', 110, 105);
//   ctx.fillRect(160, 90, 430, 20);
//   ctx.fillText('Юлия', 110, 135);
//   ctx.fillRect(160, 120, 430, 20);
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
//   ctx.beginPath();
//   ctx.moveTo(80, 60);
//   ctx.quadraticCurveTo(95, 0, 90, 10);
//   ctx.quadraticCurveTo(200,0,260,10);
//   ctx.quadraticCurveTo(325,0,410,10);
//   ctx.quadraticCurveTo(475,0,560,20);
//   ctx.quadraticCurveTo(600,50,590,100);
//   ctx.quadraticCurveTo(635,210,590,250);
//   ctx.quadraticCurveTo(475,310,410,230);
//   ctx.quadraticCurveTo(375,310,320,270);
//   ctx.quadraticCurveTo(260,290,220,260);
//   ctx.quadraticCurveTo(170,290,120,270);
//   ctx.quadraticCurveTo(90,290,80,260);
//   ctx.quadraticCurveTo(20,200,60,170);
//   ctx.quadraticCurveTo(20,100,80,60);
//   ctx.fill();
//   ctx.fillStyle = '#fff';
//   ctx.beginPath();
//   ctx.moveTo(70,50);
//   ctx.quadraticCurveTo(95,0,80,10);
//   ctx.quadraticCurveTo(200,0,250,10);
//   ctx.quadraticCurveTo(325,0,400,10);
//   ctx.quadraticCurveTo(475,0,550,20);
//   ctx.quadraticCurveTo(600,50,580,100);
//   ctx.quadraticCurveTo(620,190,580,240);
//   ctx.quadraticCurveTo(475,300,400,250);
//   ctx.quadraticCurveTo(350,300,310,260);
//   ctx.quadraticCurveTo(250,280,210,250);
//   ctx.quadraticCurveTo(160,280,110,260);
//   ctx.quadraticCurveTo(80,280,70,250);
//   ctx.quadraticCurveTo(20,200,50,160);
//   ctx.quadraticCurveTo(20,100,70,50);
//   ctx.fill();
// };
