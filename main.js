function setup(){
  canvas = createCanvas(250,250)
  canvas.center()
  video=createCapture(VIDEO)
  video.hide()
  classifier = ml5.imageClassifier('MobileNet',modelLoaded)
}
function modelLoaded(){
    console.log("modelisloded")
}
function draw(){
image(video,0,0,250,250)
classifier.classify(video,gotresult)
}
var previousresult = ''
function gotresult(error,results){
if (eroor) {
    console.log(error)
} else {
    if (results[0].confidence>0) {
        
    }
    console.log(results)
}
}