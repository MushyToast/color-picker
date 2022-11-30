$('document').ready(function(){
    setInterval(function(){
    var red = document.getElementsByClassName('red').value
    var green = document.getElementsByClassName('green').value
    var blue = document.getElementsByClassName('blue').value
    const bg = document.getElementById('boody')
    const dred = 0
    const dgreen = 0
    const dblue = 0
        if (red == 0) {
            red = 0
        } else if (green == 0) {
            green = 0
        } else if (blue == 0) {
            blue = 0
        }
        bg.style.backgroundColor = 'rgb(' + red + " " + green + " " + blue + ")"
    },
    2)

})