import './svgEditor.css';

console.log('svgEditor');

const SVG_NS = 'http://www.w3.org/2000/svg';
const canvas = document.getElementById('canvas');
const addFigureElem = document.querySelector('.add-figure');

let conf = [
  { Rect: ['x', 'y', 'width', 'rx', 'ry'] },
  { Circle: ['cx', 'cy', 'r'] },
  { Ellipse: ['cx', 'cy', 'rx', 'ry'] },
  { Line: ['x1', 'y1', 'x2', 'y2'] },
];

function createFigure(type) {
  
  const elem = document.createElementNS(SVG_NS, type);
  elem.setAttribute('x', 0);
  elem.setAttribute('y', 0);
  elem.setAttribute('width', 0);
  elem.setAttribute('height', 0);
  elem.setAttribute('rx', 0);
  elem.setAttribute('ry', 0);
  canvas.appendChild(elem);
}

function addEventListener() {
  addFigureElem.addEventListener('click', createFigure);
}

addEventListener();
