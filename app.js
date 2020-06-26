function getValue(number){
    result = document.getElementById("result");
    result.value += number;
}
function clearNumber(){
    result = document.getElementById("result");
    result.value = "";
}
function sum(){
    result = document.getElementById("result");
    result.value = eval(result.value);
}