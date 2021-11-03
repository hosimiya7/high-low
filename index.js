; window.onload = function () {

    const highAndLow = new HighAndLow()

    document.getElementById("start").onclick = function () {
        highAndLow.startGame()
    }


    document.getElementById("high").onclick = function () {
        if (highAndLow.start === 1) {
            if (highAndLow.randomNum <= highAndLow.nextNum) {
                highAndLow.getPoint()
            } else {
                highAndLow.lostPoint()
            }
            highAndLow.playGame()
        }
    }

    document.getElementById("low").onclick = function () {
        if (highAndLow.start === 1) {
            if (highAndLow.randomNum >= highAndLow.nextNum) {
                highAndLow.getPoint()
            } else {
                highAndLow.lostPoint()
            }
            highAndLow.playGame()
        }
    }


    document.getElementById("reset").onclick = function () {
        highAndLow.resetGame()
    }

}

class HighAndLow {

    randomNum
    nextNum
    point
    start
    startButton

    constructor() {
        this.randomNum = this.setRandomNumber()
        this.nextNum = this.setRandomNumber()
        this.point = 1
        this.start = 0
        this.startButton = document.getElementById("start-button")
    }

    setRandomNumber() {
        return Math.floor(Math.random() * 13) + 1
    }

    startGame() {
        this.start = 1
        this.setNumber()
        this.setPoint()
        this.addClassActive()
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
        this.removeClassActive()
    }

    setNumber() {
        document.getElementById("number").innerHTML = this.randomNum
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
        this.point = 'コインが0になりました'
    }

    resetPoint() {
        this.point = 1
    }

    clearNumber() {
        document.getElementById("number").innerHTML = 'ここに数値が出ます'
    }

    addClassActive() {

        start.classList.add("active")
    }

    removeClassActive() {
        this.start = 0
        start.classList.remove("active")
    }
}


