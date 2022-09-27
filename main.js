Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_qualites:90
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/z4pMHx9Fa/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");

}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_one="1st prediction is "+ prediction_1;
    speak_data_two="2nd prediction is "+ prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_one+speak_data_two);
    synth.speak(utterthis);
}