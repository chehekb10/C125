nx=0;
ny=0;
lwx=0;
lwy=0;
rwx=0;
rwy=0;
diff=0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    
  }
  nx=results[0].pose.nose.x;
  ny=results[0].pose.nose.y;
  console.log("nose x and nose y values are"+ nx +","+ny);
  lwx=results[0].pose.leftWrist.x;
  lwy=results[0].pose.leftWrist.y;
  console.log("leftWrist x and leftWrist y values are"+ lwx +","+lwy);
  rwx=results[0].pose.rightWrist.x;
  rwy=results[0].pose.rightWrist.y;
  console.log("rightWrist x and rightWrist y values are"+ rwx +","+rwy);

  diff=Math.floor(lwx -rwx);
  document.getElementById('square_side').innerHTML = "width and height of the square is :"+diff + "px";

}

function draw() {
background('#969A97');
fill('pink');
stroke('pink');
square(nx,ny,diff);
  
}
