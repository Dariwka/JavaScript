

function insert(num) {
    let textview = document.getElementById(`input`)
    textview.innerText = textview.innerText + num
}

function clean() {
    let textview = document.getElementById(`input`)
    textview.innerText = "";
}

function equal() {
    var exp = document.getElementById(`input`).innerText;
    if (exp) {
        document.getElementById(`input`).innerText = eval(exp);
    }
}