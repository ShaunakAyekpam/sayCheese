function setup()
{
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,65, 70, 400, 355);

    fill("yellow");
    rect(26,45,40,400);
    rect(430,45,40,400);
    rect(60,30,400,40);
    rect(60,425,400,40);
    fill("yellow");
    circle(45,45,80);
    circle(450,45,80);
    circle(45,450,80);
    circle(450,450,80);
    
}

function takeSnapshot()
{
    save('smile.png');
}