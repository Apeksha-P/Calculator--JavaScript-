/*function calculate(){
    //alert("Button test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("result").value = fn + sn;
}*/
function add(){
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("result").value = fn + sn;
}
function sub(){
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("result").value = fn - sn;
}
function multiple(){
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("result").value = fn * sn;
}
function divide(){
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("result").value = fn / sn;
}