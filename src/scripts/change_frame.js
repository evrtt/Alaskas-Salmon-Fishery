import areaData from './data_parser.js';
import introToSpatial from './transitions/intro_to_spatial.js';
import {clearCharts} from './util/donut_chart.js'

export default (next, last) => {
  switch (`${last}${next}`) {
    case '01':
      return console.log('splash_to_intro');
    case '10':
      return console.log('intro_to_splash');
    case '12':
      introToSpatial('1979');
      return console.log('intro_to_spatial')
    case '21':
      clearCharts()
      return console.log('spatial_to_intro');
    case '23':
      clearCharts()
      return console.log('spatial_to_temporal');
    case '32':
      introToSpatial('2010');
      return console.log('temporal_to_spatial');
    case '34':
      return console.log('temporal_to_statewide');
    case '43':
      return console.log('statewide_to_temporal')
    default:
      return null;
  }


}