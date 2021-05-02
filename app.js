function music_play(url) {
    new Audio(url).play();
}


document.addEventListener("keypress", function(event) {
    if (event.keyCode == 99) {
        new Audio('sounds/crash.mp3').play();
        document.getElementById("demo").innerHTML = event.key + " pressed";
        document.getElementById("char").innerHTML = event.charCode
    } else if (event.keyCode == 107) {
        new Audio('sounds/kick-bass.mp3').play();
        document.getElementById("demo").innerHTML = event.key + " pressed";
        document.getElementById("char").innerHTML = event.charCode
    } else if (event.keyCode == 115) {
        new Audio('sounds/snare.mp3').play();
        document.getElementById("demo").innerHTML = event.key + " pressed";
        document.getElementById("char").innerHTML = event.charCode
    } else if (event.keyCode == 113) {
        new Audio('sounds/tom-1.mp3').play();
        document.getElementById("demo").innerHTML = event.key + " pressed";
        document.getElementById("char").innerHTML = event.charCode
    } else if (event.keyCode == 119) {
        new Audio('sounds/tom-2.mp3').play();
        document.getElementById("demo").innerHTML = event.key + " pressed";
        document.getElementById("char").innerHTML = event.charCode
    } else if (event.keyCode == 101) {
        new Audio('sounds/tom-3.mp3').play();
        document.getElementById("demo").innerHTML = event.key + " pressed";
        document.getElementById("char").innerHTML = event.charCode
    } else if (event.keyCode == 117) {
        new Audio('sounds/tom-4.mp3').play();
        document.getElementById("demo").innerHTML = event.key + " pressed";
        document.getElementById("char").innerHTML = event.charCode
    } else {
        console.log(event)
        document.getElementById("demo").innerHTML = event.key + " pressed";
        document.getElementById("char").innerHTML = event.charCode
    }
})