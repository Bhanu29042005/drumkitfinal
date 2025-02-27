

var numberofsoundobjects = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofsoundobjects; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttoninnerhtml = this.innerHTML;

    makesound(buttoninnerhtml);

    });
}
document.addEventListener("keydown", function (event) {
    makesound(event.key);
})

function makesound(key){
    switch (key) {
        case "w":
            var drumaudio = new Audio("sounds/crash.mp3");
            drumaudio.play();
            break;

        case "a":
            var drumaudi = new Audio("sounds/tom-1.mp3");
            drumaudi.play();
            break;

        case "s":
            var drumaud = new Audio("sounds/tom-2.mp3");
            drumaud.play();
            break;

        case "d":
            var drumau = new Audio("sounds/tom-3.mp3");
            drumau.play();
            break;

        case "j":
            var druma = new Audio("sounds/tom-4.mp3");
            druma.play();
            break;
        case "k":
            var dru = new Audio("sounds/kick-bass.mp3");
            dru.play();
            break;
        case "l":
            var dr = new Audio("sounds/snare.mp3");
            dr.play();
            break;

        default: console.log(innerHTML)
    }

}