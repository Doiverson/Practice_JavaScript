
let text = ["Plz imagine number","Multiplied by 2","Plz Add ","Divided by 2", "Subtract from the number you choose at first","Your number is"];

function ShowMsg(text){
    prompt(text);
}

function Step1(text){
    ShowMsg(text);
}

function Step2(text){
    ShowMsg(text);
}

function Step3(text){
    ShowMsg(text);
}

function Step4(text){
    ShowMsg(text);
}

function Step5(text){
    ShowMsg(text);
}


function Main(){
    Step1(text[0]);
    Step2(text[1]);
    Step3(text[2]);
    Step4(text[3]);
    Step5(text[4]);

    let randomNumber = Math.floor(Math.random() * 100) + 1;
}

Main();
