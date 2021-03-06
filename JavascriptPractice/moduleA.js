
import * as Circle from './modules/circle.js';
import * as Canvas from './modules/canvas.js';
import * as ModB from './moduleB.js';

export function drawPinkCanvas(id, parent, width, height){
    let myCanvas = Canvas.create(id, parent, width, height);
    let circle1 = Circle.draw(myCanvas.ctx, 175, 200, 300, 'pink');

    ModB.alertMe('Look I drew pink!');
}