function dcFunction() {
    document.getElementById("locate").innerHTML = "DC";
    var dcComic = document.getElementsByClassName("comic-image");
    for (var i = 0; i < dcComic.length; i+= 1){
    dcComic[i].src = '../images/DC.jpeg';}
}