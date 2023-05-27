function calculate(){
    //alert("Button test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("result").value = fn + sn;
}