let cx, cy;
let radius;
let secHnadLength;
let minHandLength;
let hourHandLength;


function setup() {
  let canvas = createCanvas(windowWidth/3.5, windowWidth/3.5);
  canvas.parent('canvas');
  angleMode(DEGREES);
  textSize(30);
  textAlign(CENTER);
  cx = width/2;
  cy = height/2;
  radius = cx-30
  secHnadLength = radius-30;
  minHandLength = radius-50;
  hourHandLength = radius-70;
}

function draw() {
  background(255);
  drawCircle();
  drawIndex();
  drawCenter();
  darwSecHand();
  drawMinHand();
  drawHourHand();
}

function drawCircle() {
  fill(255);
  ellipse(cx, cy, radius*2);
}

function drawIndex() {
  fill(0);
  let cnt = 0;
  for(let angle = 0-60; angle <= 360-90; angle += 30){
    const x = cx + cos(angle) * (radius - 20);
    const y = cy + sin(angle) * (radius - 20) + 10;
    cnt++;
    text(cnt, x, y);
    
  }
}
function drawCenter() {
  fill(0);
  ellipse(cx, cy, 10);
}

function darwSecHand() {
  let secAngle = map(second(), 0, 60, 0, 360) - 90;//休範囲0-60 新範囲0-360
  strokeWeight(1);
  line(cx, cy, cx+cos(secAngle)*secHnadLength, cy+sin(secAngle)*secHnadLength);
}

function drawMinHand() {
  const normalizeValue = norm(second(), 0, 60);
  const minutePlus = minute() + normalizeValue;
  let minAngle = map(minutePlus, 0, 60, 0, 360) - 90;
  strokeWeight(2);
  line(cx, cy, cx+cos(minAngle)*minHandLength, cy+sin(minAngle)*minHandLength);
}

function drawHourHand(){
  const hourAngle = map(hour()+norm(minute(), 0, 60), 0, 12*2, 0, 360*2)-90;
  strokeWeight(1);
  line(cx, cy, cx+cos(hourAngle)*hourHandLength, cy+sin(hourAngle)*hourHandLength);

}
