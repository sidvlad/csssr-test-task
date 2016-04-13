import svg4everybody from 'svg4everybody';
import $ from 'jquery';

var slider = require('../blocks/slider/slider.js');

$(() => {
  svg4everybody();
  slider.init();

});
