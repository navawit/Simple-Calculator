function append(value){
    document.getElementById("display").value+=value;
}
function clearDisplay(){
    document.getElementById("display").value="";
}
function calculate(){
    let val=document.getElementById("display").value;
    try{
        let result=eval(val);
        document.getElementById("display").value=result;
     }catch(error){
        document.getElementById("display").value="error";
     }

}