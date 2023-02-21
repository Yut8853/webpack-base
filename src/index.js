import Canvas from "./modules/Canvas";


const element = document.getElementById('canvas')
const canvas = new Canvas(element);

canvas.drawLine(0, 0, 100, 100)