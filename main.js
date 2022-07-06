var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("textbox").value
    var utter = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter)
    Webcam.attach(camera)
}
camera = document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    Image_format:"png", png_quality:90
});
