$('document').ready(function(){
    setInterval(function goofy(){
        var red = document.getElementsByClassName('red').value
        var green = document.getElementsByClassName('green').value
        var blue = document.getElementsByClassName('blue').value
        const bg = document.getElementById('boody')
        const dred = 0
        const dgreen = 0
        const dblue = 0
            if (red == "") {
                red = 0
            } else if (green == "") {
                green = 0
            } else if (blue == "") {
                blue = 0
            }
            bg.style.backgroundColor = "rgb(222, 222, 14)"
        },
        2)

})