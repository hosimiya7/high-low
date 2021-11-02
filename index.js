

let point = 1
document.getElementById("point").innerHTML = point

document.getElementById("start").onclick = function () {

    let random_num = Math.floor(Math.random() * 13) + 1;
    document.getElementById("number").innerHTML = random_num

    let next_num = Math.floor(Math.random() * 13) + 1;


    document.getElementById("high").onclick = function () {
        if (random_num <= next_num) {
            document.getElementById("next_number").innerHTML = next_num
            point *= 2
            document.getElementById("point").innerHTML = point
            random_num = next_num
            document.getElementById("number").innerHTML = random_num
            next_num = Math.floor(Math.random() * 13) + 1;
            document.getElementById("next_number").innerHTML = null
        } else {
            document.getElementById("next_number").innerHTML = next_num
            point = 0
            document.getElementById("point").innerHTML = point
            random_num = next_num
            document.getElementById("number").innerHTML = random_num
            next_num = Math.floor(Math.random() * 13) + 1;
            document.getElementById("next_number").innerHTML = null
        }
    }

    document.getElementById("low").onclick = function () {
        if (random_num >= next_num) {
            document.getElementById("next_number").innerHTML = next_num
            point *= 2
            document.getElementById("point").innerHTML = point
            random_num = next_num
            document.getElementById("number").innerHTML = random_num
            next_num = Math.floor(Math.random() * 13) + 1;
            document.getElementById("next_number").innerHTML = null

        } else {
            document.getElementById("next_number").innerHTML = next_num
            point = 0
            document.getElementById("point").innerHTML = point
            random_num = next_num
            document.getElementById("number").innerHTML = random_num
            next_num = Math.floor(Math.random() * 13) + 1;
            document.getElementById("next_number").innerHTML = null
        }
    }
}

document.getElementById("reset").onclick = function () {
    point = 1
    document.getElementById("point").innerHTML = point
    document.getElementById("number").innerHTML = null
}

function setRandomNumber() {
    return Math.floor(Math.random() * 13) + 1;
}

