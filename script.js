function compute()
{
    var amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interesse = amount * (rate / 10);
    var anoFuturo = parseInt(years) + 2021;

    if(amount <= 0 || amount == "" || amount == null){
        alert("Enter a positive number for Amount")
        document.getElementById("principal").focus();
        return;
    }

    document.getElementById("resultado").innerHTML = `If you deposit <mark>${amount}</mark>. <br> at an interest rate of <mark>${rate}</mark>.<br> You will receive an amount of <mark>${interesse}</mark>,<br> in the year <mark>${anoFuturo}</mark>`;


}
        
var slider = document.getElementById("rate");
var output = document.getElementById("teste");
   slider.oninput = function() {
   output.innerHTML = this.value + "%";
}