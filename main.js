console.log("hi")

Webcam.set({

    width:400, height:100, image_format:'png', png_Quality:5, constraints:{facingMode:"enviorment"}
    
});
camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){

    Webcam.snap(function (data_uri){
    
    document.getElementById("resoolt").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    })};

    console.log('ml5 version: ', ml5.version);

classifier= ml5.imageClassifier('MobileNet'+'MicrosoftAzure', modelLoaded);



function modelLoaded(){

    console.log('model loaded');
}
    
function check() {
    img= document.getElementById('capture_image');
classifier.classify(img, gotresult);
classifier.classify(img, gotresult);
}

function gotresult(error, results) {

    if (error) {
        console.error(error);



    }
 
    else {
        console.log(results);

        document.getElementById("Mobilenet_answer").innerHTML= results[0].label; 
        document.getElementById("MicrosoftAzure_answer").innerHTML= results[0].label; 
      

    }


}