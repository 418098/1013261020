function 燈數 (num: number) {
    if (num < 6) {
        y = 0
        x = num - 1
    } else if (num < 9 && num >= 6) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 15) {
        y = 4
        x = 14 - num
    } else {
        x = 0
        y = 18 - num
    }
    led.plot(x, y)
}
let x = 0
let y = 0
let a = 0
basic.forever(function () {
    a += 1
    燈數(a)
    basic.pause(100)
})
