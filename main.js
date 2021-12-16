noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
  canvas=createCanvas(500, 500) ;
  canvas.position(560, 100);
  poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotresult);
}
function draw(){
    background('#83ff73');
    fill(0, 102, 153);
    textSize(difference);
text('Aradhya', noseX, noseY);

}
function modelLoaded(){
    console.log('poseNet is successfully initialized')
}
function gotresult(results){
    if(results.length>0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}