window.onload = function() {

    const highAndLow = new HighAndLow()

    document.getElementById("start").onclick = function () {
        highAndLow.startGame()
    }

    document.getElementById("high").onclick = function () {
        highAndLow.playGame()
        if (highAndLow.random_num <= highAndLow.next_num) {
            highAndLow.getPoint()
        } else {
            highAndLow.lostPoint()
        }
    }

    document.getElementById("low").onclick = function () {
        highAndLow.playGame()
        if (highAndLow.random_num >= highAndLow.next_num) {
            highAndLow.getPoint()

        } else {
            highAndLow.lostPoint()
        }
    }
    document.getElementById("reset").onclick = function () {
        highAndLow.resetGame()
    }
}


class HighAndLow {

    random_num
    next_num
    point

    constructor() {
        this.random_num = this.setRandomNumber()
        this.next_num = this.setRandomNumber()
        this.point = 1
    }

    setRandomNumber() {
        return Math.floor(Math.random() * 13) + 1;
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
        this.random_num = this.next_num
        this.next_num = this.setRandomNumber()
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


