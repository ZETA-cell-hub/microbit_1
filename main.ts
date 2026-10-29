input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 7.967456985769885e+30; index++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
	
})
