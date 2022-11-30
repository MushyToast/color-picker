$('document').ready(function(){
    console.log('Document loaded')
    var header = document.getElementById('header')
    var img = document.getElementById('logo')
    const htext = 'בוחר הצבעים'
    const etext = 'Color Picker'
    setInterval(function setHText() {
        if (header.innerHTML == htext) {
            header.innerHTML = etext
            img.src = 'assets/img/DrPicLogo.png'
            header.id = 'header'
        } else if (header.innerHTML == etext) {
            header.innerHTML = htext
            img.src = 'assets/img/hebrewlogo.png'
            header.id = 'header2'

        }
    }, 2000);


})
