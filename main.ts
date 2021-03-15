irRemote.connectInfrared(DigitalPin.P16)
let Landerito_guay_que_es_un_pro = 0
basic.forever(function () {
    Landerito_guay_que_es_un_pro = irRemote.returnIrButton()
})
basic.forever(function () {
    if (Landerito_guay_que_es_un_pro == 70) {
        music.playMelody("A F E F D G E F ", 120)
        k_Bit.run(DIR.RunForward, 70)
        basic.pause(1000)
        k_Bit.run(DIR.RunBack, 70)
        basic.pause(1000)
        k_Bit.run(DIR.TurnLeft, 70)
        basic.pause(500)
        k_Bit.run(DIR.TurnRight, 70)
        basic.pause(1000)
    }
    if (Landerito_guay_que_es_un_pro == 21) {
        k_Bit.run(DIR.RunBack, 70)
        basic.pause(1000)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 79)
    }
    if (Landerito_guay_que_es_un_pro == 68) {
        k_Bit.Led(COLOR.red)
        k_Bit.run(DIR.RunBack, 70)
        basic.pause(1000)
        k_Bit.run(DIR.TurnRight, 70)
        basic.pause(1000)
    }
})
