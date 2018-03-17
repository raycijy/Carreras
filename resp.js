let img=[]
let x,y,speed
let carro=[]
let laps
var entrada

function preload()
{			
		for(let i = 0 ; i<1 ; i++)
		img[i] = loadImage('img/auto.png')

}

function setup() {
	createCanvas(windowWidth, windowHeight)
	
	x=0
	y=0
	speed=0
	laps=0
	entrada=0
	for(let i = 0 ; i<img.length ; i++)//CREAMOS TODOS LOS AUTOS QUE TENDRAN LUGAR
	autos()
}

function draw() {	


	frameRate(60)
	
	background("#fff")
	fill('BLUE');
	textSize(32);
	text(laps, 0, 0,100,100);

	pista()


	for(let i = 0 ; i< img.length ; i++)
	{
		image(img[i],carro[i].x,carro[i].y,100,100)

				if(carro[i].x<width/2+500 && carro[i].y>height/2)
				carro[i].x+=random(1,9)

				if(carro[i].x>width/2+99)
				{
					carro[i].y-=random(1,9)
				}

				if(carro[i].y<height/2-200)
				{
					carro[i].x-=random(1,9)
				}

				if(carro[i].x<width/4+100 && carro[i].y <height/2+100)
				{
					carro[i].y+=random(1,9)

				}
					console.log(entrada)



	}
	entrada=0
	
	

}

function score()
{
	laps++
}

function autos()//FUNCIONES DE AUTO
{
	let carros ={
		x:0,

		y:height/2+random(100,150),

		speed:random(1,9),
	}
	carro.push(carros)

}


function pista()//CREAMOS LA PISTA
{
	fill('#fff')
	ellipseMode(CENTER)

	ellipse(width/2,height/2,width,height)

	fill('GREEN')
	ellipse(width/2,height/2,width/2-200,height/2-100)

	//LINEA
	line(0,height/2,width/2,height/2)
}
