$('document').ready(function(){
    setInterval(function goofy(){
        var red = document.getElementsByClassName('red').value
        var green = document.getElementsByClassName('green').value
        var blue = document.getElementsByClassName('blue').value
        const bg = document.getElementById('boody')
        const dred = 0
        const dgreen = 0
        const dblue = 0
            if (typeof red === "undefined") {
                red = 0
            } else if (typeof green == "undefined") {
                green = 0
            } else if (typeof blue == "undefined") {
                blue = 0
            }
        console.info(red)
        console.info(green)
        console.info(blue)
        bg.style.backgroundColor = "rgb(222, 222, 14)"
        },
        2)

})