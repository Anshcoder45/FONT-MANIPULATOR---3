noseX=0;
noseY=0;
difference=0;
rightWristX = 0;
leftWristX = 0;

function preload(){
}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
if (results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY = " + noseY);

    leftWristX = results[0].pose.leftWristX.x;
    rightWristX = results[0].pose.leftWristX.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftwristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
}
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function draw(){
background("darksalmon");

    document.getElementById("sqaure_side").innerHTML = "Width And Height of a sqaure will be = " + difference + "px";
    fill('#F90093')
    stroke('#F90093')
    sqaure(noseX, noseY , difference);
}