let img,img2,img3,img4

let carro=[]
let velocidad,c1,c2,c3,c4
let pos1,pos2,pos3,pos4
function preload()
{
		img = loadImage('img/auto.png')
		img2 = loadImage('img/auto.png')
		img3 = loadImage('img/auto.png')
		img4 = loadImage('img/auto.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	c1=0
	c2=0
	c3=0
	c4=0

	pos1=200
	pos2=210
	po3=220
	pos4=230

	
}

function draw() {	

	frameRate(15)

	background("#fff")
	pista()
	carros()

	c1+=random(1,6)
	c2+=random(1,6)
	c3+=random(1,6)
	c4+=random(1,6)

	
	
	

	console.log(c1+","+c2+","+c3+","+c4)



}

function carros()
{	

		
	
	image(img,c1, pos1,100,100)
	image(img2,c2,pos2,100,100)
	image(img3,c3,pos3,100,100)
	image(img4,c4,pos4,100,100)
		
}




function pista()
{
	fill('#fff')
	ellipseMode(CENTER)

	ellipse(width/2,height/2,width,height)

	fill('GREEN')
	ellipse(width/2,height/2,450,200)
}
