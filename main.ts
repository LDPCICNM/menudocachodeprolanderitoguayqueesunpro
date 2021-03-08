k_Bit.OFFLed()
k_Bit.LED_brightness(0)
irRemote.connectInfrared(DigitalPin.P16)
let Landerito_guay_que_es_un_pro = 0
basic.forever(function () {
    Landerito_guay_que_es_un_pro = irRemote.returnIrButton()
})
basic.forever(function () {
    basic.showNumber(Landerito_guay_que_es_un_pro)
})
