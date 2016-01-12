var accessToken = "486edd39ff75e1ea2258702670f6e04dc78ad379";
var deviceID = "260040000247343138333038"
var url= "https://api.particle.io/v1/devices/"+deviceID+"/analog?access_token="+accessToken;
var x=0;
var y=50;

function setup() {
  createCanvas(900,700);
  background(0);                      //sets background to black
}

function draw() {
  data = loadJSON(url, drawLight);   //read the variable data from the photon and perform the function
}

function drawLight(data){
  var reading = data.result;
  reading/=4;
  console.log(reading);

  stroke(255,0,0);
  fill (reading, 0, 200,180);
  ellipse(x, y, reading, reading);   //ellipse size based on reading
  x+=reading;                        //

  if (i>width){
    x=0;
    y+=100;
  }

  if (j>height){
    x=0;
    y=50;
  }
}

function mouseClicked() {
  background(0);
}
