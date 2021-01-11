var fixedrect,moverect;

function setup()
{
    createCanvas(1200,800)
    fixedrect=createSprite(600,400,50,80)
    fixedrect.shapeColor="green";
    fixedrect.debug=true;


    moverect=createSprite(400,200,80,30)
    moverect.shapeColor="green"
    moverect.debug=true
}

function draw()
{
    background(0,0,0)
    moverect.x=World.mouseX;
    moverect.y=World.mouseY;

    if(moverect.x-fixedrect.x<fixedrect.width/2+moverect.width/2 &&
    fixedrect.x-moverect.x<fixedrect.width/2+moverect.width/2 &&
    moverect.y-fixedrect.y<fixedrect.height/2+moverect.height/2 &&
    fixedrect.y-moverect.y<fixedrect.height/2+moverect.height/2 )
    {
        moverect.shapeColor="red";
        fixedrect.shapeColor="red"
    }
    else
    {
        moverect.shapeColor="green";
        fixedrect.shapeColor="green";
    }
    drawSprites()
}