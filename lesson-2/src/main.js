import "./appTimer.js"
import "../src/styles/main.sass"
import chunk from 'lodash/chunk'
// import Howler from 'howler'

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

// Howler = new Howler({
//    src: "../src/notification.mp3"
// })