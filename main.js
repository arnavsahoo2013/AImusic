song = "";
function setup()
{
    canvas = createCanvas(500,470);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,500,470);
}
function preload()
{
    song = loadSound("music.mp3");
}
function play_song()
{
    song.play();
}