function animate ( demo, target ) {
    if ( demo.timeId ) {
        clearInterval ( demo.timeId )   //  如果有定时的话，一定要先清除定时器
    }
    demo.timeId = setInterval ( function () {
        var leader = demo.offsetLeft
        var step = 1
        step = leader < target ? step : - step
        if ( Math.abs ( leader - target ) >Math.abs ( step ) ) {
            leader += step
            console.log ( leader )
            demo.style.left = leader + "px"
        } else {
            demo.style.left =  "0px"
            // clearInterval (  demo.timeId )
        }
    }, 50 )
}