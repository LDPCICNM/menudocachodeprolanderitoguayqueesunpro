irRemote.connectInfrared(DigitalPin.P16)
let Landerito_guay_que_es_un_pro = 0
basic.forever(function () {
    Landerito_guay_que_es_un_pro = irRemote.returnIrButton()
})
basic.forever(function () {
    if (Landerito_guay_que_es_un_pro == 70) {
        k_Bit.run(DIR.RunForward, 70)
    }
    if (Landerito_guay_que_es_un_pro == 21) {
        k_Bit.run(DIR.RunBack, 70)
    }
    if (Landerito_guay_que_es_un_pro == 68) {
        k_Bit.run(DIR.TurnLeft, 70)
        basic.pause(2000)
        k_Bit.carStop()
    }
    if (Landerito_guay_que_es_un_pro == 67) {
        k_Bit.run(DIR.TurnRight, 70)
        basic.pause(2000)
        k_Bit.carStop()
    }
    if (Landerito_guay_que_es_un_pro == 64) {
        k_Bit.carStop()
    }
    if (Landerito_guay_que_es_un_pro == 22) {
        k_Bit.LED_brightness(113)
        k_Bit.Led(COLOR.green)
    }
    if (Landerito_guay_que_es_un_pro == 25) {
        k_Bit.LED_brightness(113)
        k_Bit.Led(COLOR.blue)
    }
    if (Landerito_guay_que_es_un_pro == 13) {
        k_Bit.LED_brightness(113)
        k_Bit.Led(COLOR.black)
    }
    if (Landerito_guay_que_es_un_pro == 12) {
        k_Bit.LED_brightness(113)
        k_Bit.Led(COLOR.white)
    }
    if (Landerito_guay_que_es_un_pro == 24) {
        k_Bit.LED_brightness(113)
        k_Bit.Led(COLOR.red)
    }
})
