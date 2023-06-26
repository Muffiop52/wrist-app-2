noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup()
{
          video = createCapture(VIDEO);
          video.size(550, 500);

          canvas = createCanvas(550, 550);
          canvas.position(560,150);

          poseNet = ml5.poseNet(video, modelloaded);
          poseNet.on('poses, gotPoses');
}

function draw()
{
          background('#0B31A5');
          fill('#6B91C5');
          stroke('#8AD4EB')
          sqaure(noseX , noseY , difference);
          document.getElementById(square_side).innerHTML = "width And Height Of A Square Will Be" + difference + px;
}

function modelloaded()
{
          console.log('Posenet Is Initialized');
}

function gotPoses(results)
{
          if(results.lenght > 0){
                    console.log(result);
                    noseX  = results[0].pose.nose.x;
                    noseY  = results[0].pose.nose.y;
                    console.log("Nose X =" + noseX + "Nose Y = " + noseY);

                    leftWristX = result[0].pose.leftwrist.x;
                    rightWristX = result[0].pose.rightwrist.x;
                    difference = floor(leftwristX - rightwristX);
          }
          
         
}

