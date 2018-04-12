import Snap from 'snapsvg';

const s = Snap('#svg');

const bigCircle = s.circle(150, 150, 100);

bigCircle.attr({
  fill: '#bada55',
  stroke: '#000',
  strokeWidth: 5,
});
