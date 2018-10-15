

function inputName(){
    const text = document.getElementById('test').value;
    console.log(text);
    localStorage.setItem("Name", text);
    console.log("What you input is " + text);
}


function outputName(){
    const stragedName = localStorage.getItem("Name");
    console.log("Output is " + stragedName);
    document.getElementById('test').value = stragedName;
}

function changeColor(){
    let a = document.getElementById('colorChange');
    let b = document.getElementById('test');
    b.style.color = "blue";
}

let c = document.getElementsByTagName('h1');
console.log(c);

c.style.color = "blue";