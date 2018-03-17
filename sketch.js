let img=[]
let x,y,speed
let carro=[]
let laps
let entrada,tempo,tempoVu

function preload()
{			
		for(let i = 0 ; i<3 ; i++)
		img[i] = loadImage('img/auto.png')

	/*soundFormats('mp3', 'ogg');
  	mySound = loadSound('sounds/Lemon.mp3');*/

}

function setup() {

	
  //	mySound.play();

	createCanvas(windowWidth, windowHeight)
	x=0
	y=0
	speed=0
	laps=0
	entrada=1
	tempo=0
	tempoVu=0

	for(let i = 0 ; i<img.length ; i++)//CREAMOS TODOS LOS AUTOS QUE TENDRAN LUGAR
	autos()

}

function draw() {	


	frameRate(60)
	

	background("#fff")
	fill('BLUE');
	textSize(32);
	if(laps==3){
	text("GANASTE", 0, 0,100,100);
	}
	else
	{
		text(laps, 0, 0,100,100);
	}

	if(laps==3)
	{
		noLoop()
	}

	pista()


	for(let i = 0 ; i< carro.length ; i++)
	{
		image(img[i],carro[i].x,carro[i].y,100,100)

				if(carro[i].x<width/2+500 && carro[i].y>height/2)
				carro[i].x+=Math.floor(random(1,9))

				if(carro[i].x>width/2+99)
				{
					carro[i].y-=Math.floor(random(1,9))
				}

				if(carro[i].y<height/2-200)
				{
					carro[i].x-=Math.floor(random(1,9))
				}

				if(carro[i].x<width/4+100 && carro[i].y <height/2+100)
				{
					carro[i].y+=Math.floor(random(1,9))
				}
					
			
				
	}

	tempo++

	for(let i = 0 ; i< carro.length ; i++)
	{
		if(carro[i].y<=height/2+10 && carro[i].y>=height/2-10 && carro[i].x<=width/2 && entrada!=0)
		{
			laps++
			entrada=0
			console.log(tempo)
			tempoVu=tempo
			tempo=0
		}
	}




}

function score()
{
	laps++
}

function autos()//FUNCIONES DE AUTO
{
	let carros ={
		x:0,

		y:height/2+Math.floor(random(100,150)),

		speed:Math.floor(random(1,9)),
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
