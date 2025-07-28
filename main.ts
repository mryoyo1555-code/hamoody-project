input.onButtonPressed(Button.A, function () {
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
})
input.onButtonPressed(Button.AB, function () {
    TPBot.stopCar()
})
input.onButtonPressed(Button.B, function () {
    TPBot.setTravelSpeed(TPBot.DriveDirection.Backward, 50)
})
