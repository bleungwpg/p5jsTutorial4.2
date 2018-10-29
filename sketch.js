// declare bgm variable
var bgm;
var sfx1;
var buttonStart;

function preload()
{
	// load sound file into variable bgm
	bgm = loadSound("https://bleungwpg.github.io/p5jsTutorial4.2/sounds/bensound-creativeminds.mp3");
	sfx1 = loadSound("https://bleungwpg.github.io/p5jsTutorial4.2/sounds/zapsplat_multimedia_game_sound_positive_action_tone_032_25091.mp3");
	buttonStart = loadImage("https://bleungwpg.github.io/p5jsTutorial4.2/images/button_press-for-sfx.png");

}

function setup()
{
	createCanvas(800,600);

	// play music during setup so that it doesn't loop infinitely
	bgm.play();
}

function draw()
{
	textSize(12);

	background(125,125,125)

	text("Credit for bgm goes to Benjamin TISSOT from www.bensound.com",10,40);
	text("Credit for sound effect goes to zapSplat from www.zapsplat.com",10,80);


	image(buttonStart,200,100);

	if (mouseX > 200 && mouseX < 200 + 168 && mouseY > 100 && mouseY < 100 + 40 && mouseIsPressed)
	{
		if (!sfx1.isPlaying())
		{
			sfx1.play();
		}
	}



}

