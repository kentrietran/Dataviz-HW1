let triangles = [];

function setup() {
    createCanvas(800,600);
}

function draw() {

    if (frameCount % 60 === 0) {
        printMinuteChange(min);
    }

    let hr = hour();
    let min = minute();
    let sec = second();

    background(204,229,255);
    
    const circleColor = color(255, 204, 0);
    fill(circleColor);

    circle(600, 100, second(), second());

    let currentMinute = minute();

    let triangleBase = width / 60;
    let triangleHeight = 20;

    for (let i = 0; i < 60; i++) {

        let x = i * triangleBase + triangleBase / 2;
        if (i === currentMinute) {
            fill(255,102,178);
        } else {
            fill(23,210,23);
        }

        let x1 = x - triangleBase / 2;
        let y1 = height;
        let x2 = x + triangleBase / 2;
        let y2 = height;
        let x3 = x;
        let y3 = height - triangleHeight;
        triangle(x1, y1, x2, y2, x3, y3);
    }

    let rectColor = color(139, 69, 19);
    let rectCount = hour();
    let rectHeight = height / 24;
    fill(rectColor);
    for (let i = 0; i < rectCount; i++) {
        rect(0, i * rectHeight, 20, rectHeight);
    }

}

