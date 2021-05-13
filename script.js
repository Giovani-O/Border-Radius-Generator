function ChangeTopLeft() {
    value = document.getElementById('top-left').value;
    document.getElementById('box').style.borderTopLeftRadius = value + "px";
    for(let i = 0; i < 4; i++){
        document.getElementsByClassName('tl')[i].innerHTML = value + "px";
    }
}

function ChangeTopRight() {
    value = document.getElementById('top-right').value;
    document.getElementById('box').style.borderTopRightRadius  = value + "px";
    for(let i = 0; i < 4; i++){
        document.getElementsByClassName('tr')[i].innerHTML = value + "px";
    }
}

function ChangeBottomLeft() {
    value = document.getElementById('bottom-left').value;
    document.getElementById('box').style.borderBottomLeftRadius  = value + "px";
    for(let i = 0; i < 4; i++){
        document.getElementsByClassName('bl')[i].innerHTML = value + "px";
    }
}

function ChangeBottomRight() {
    value = document.getElementById('bottom-right').value;
    document.getElementById('box').style.borderBottomRightRadius  = value + "px";
    for(let i = 0; i < 4; i++){
        document.getElementsByClassName('br')[i].innerHTML = value + "px";
    }
}
