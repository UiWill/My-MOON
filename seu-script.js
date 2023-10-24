document.getElementById("naoPerdoarButton").addEventListener("click", function() {
    document.getElementById("mensagem").innerHTML = "Pense de novo. 😢";
    document.getElementById("coracao").style.display = "none";
});

document.getElementById("perdoarButton").addEventListener("click", function() {
    document.getElementById("mensagem").innerHTML = "Eu ADORO VC MY MOON ❤️";
    document.getElementById("coracao").style.display = "block";
});
