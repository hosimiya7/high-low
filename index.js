window.onload = function() {

    const highAndLow = new HighAndLow()

    document.getElementById("start").onclick = function () {
        highAndLow.startGame()
    }

    document.getElementById("high").onclick = function () {
        if (highAndLow.randomNum <= highAndLow.nextNum) {
            highAndLow.getPoint()
        } else {
            highAndLow.lostPoint()
        }
        highAndLow.playGame()
    }

    document.getElementById("low").onclick = function () {
        if (highAndLow.randomNum >= highAndLow.nextNum) {
            highAndLow.getPoint()

        } else {
            highAndLow.lostPoint()
        }
        highAndLow.playGame()
    }
    document.getElementById("reset").onclick = function () {
        highAndLow.resetGame()
    }
}


class HighAndLow {

    randomNum
    nextNum
    point

    constructor() {
        this.randomNum = this.setRandomNumber()
        this.nextNum = this.setRandomNumber()
        this.point = 1
    }

    setRandomNumber() {
        return Math.floor(Math.random() * 13) + 1
    }

    startGame() {
        this.setNumber()
        this.setPoint()
    }

    playGame() {
        this.getNextnumber()
        this.setNumber()
        this.setPoint()
    }

    resetGame() {
        this.resetPoint()
        this.clearNumber()
        this.setPoint()
    }

    setNumber() {
        document.getElementById("number").innerHTML = this.random_num
    }

    setPoint() {
        document.getElementById("point").innerHTML = this.point
    }

    getNextnumber() {
        this.randomNum = this.nextNum
        this.nextNum = this.setRandomNumber()
    }

    getPoint() {
        this.point *= 2
    }

    lostPoint() {
        this.point = 0
    }

    resetPoint() {
        this.point = 1
    }

    clearNumber() {
        document.getElementById("number").innerHTML = null
    }
}


