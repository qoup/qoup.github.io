function game() {
    console.log("dawds");
    var cav = document.getElementById("canv")
    var background = new Image()
    background.src = "Unbenannt.png"
    var ctx = cav.getContext("2d")
    var img = document.getElementById("daw")
    ctx.drawImage(img, 10, 10);
    document.getElementById("canv").getContext("2d").drawImage(document.getElementById("daw"),10,10)
}
window.onload = game()