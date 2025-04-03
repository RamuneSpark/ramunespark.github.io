const omakeBox = document.getElementById("omakeBox");
omakeBox.style.display = "block";

const omakeBox2 = document.getElementById("omakeBox2");
omakeBox2.style.display = "block";

const ramuneBlue = "#1959A8";
const ramuneBlue2 = "#5D98B5";
const ramuneYellow = "#F2EE6C";
const ramuneYellow2 = "#9C9949";
const ramunePink = "#DA88B6";

function createManual(e){

    const p = document.createElement("p");
    omakeBox2.appendChild(p)
    p.innerHTML = e;

}

function createDiv(e){

    const div = document.createElement("div");
    div.id = e;
    return div;

}

function change_0or1(e){

    let a;
    if(e){
        a = 1;
    }else{
        a = 0;
    }

    return a;

}