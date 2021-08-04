function carregar()
{
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var data = new Date();
    var hora = data.getHours();

    var hora = 19

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <= 12) {
        img.src = 'dia.jpg';
        document.body.style.background = '#fffffa'
    } else if (hora > 12 && hora <= 18) {
        img.src = 'tarde.jpg';
        document.body.style.background = '#DEB887';
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = "#000";
    }
    
}