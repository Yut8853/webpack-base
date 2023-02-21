export default class Canvas {
  constructor(element) {
    this.element = element
    this.context = element.getContext('2d');
  }
  
  drawLine(x0, y0, x1, y1) {
    const context = this.context
    // パスをリセット
    context.beginPath();

    // 線を引くスタート地点に移動
    context.moveTo(0, 0);

    // スタート地点から(200,200)まで線を引く
    context.lineTo(200, 200);

    // 線の色
    context.strokeStyle = 'red';

    // 線の太さ
    context.lineWidth = 10;

    // 線を描画する
    context.stroke();
  }
}