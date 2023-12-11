
let operaors=document.querySelector('.interact')
let display=document.getElementById("jp");
let operand1="";
let operand2="";
let show="";
let operator="";
let opc=false;
let ps;
function plus(p){
    switch(p){
        case 1:
            operator="+";
            opc=true
            break;
        case 2:
            operator="-";
            opc=true
            break;
        case 3:
            operator="X";
            opc=true
            break;
        case 4:
            operator="/";
            opc=true;
            break;

    }
    ps=p;
}
function n(num){
    if(!opc){
       operand1=operand1+num;
    }else if(opc){
        operand2=operand2+num;
       
    }
    
    display.textContent=operand1+operator+operand2;

}
function result(){
    let result;opc=false;
    switch(ps){
        case 1:
            result=Number(operand1)+Number(operand2);
            break;
        case 2:
            result=Number(operand1)-Number(operand2);
            break;
        case 3:
            result=Number(operand1)*Number(operand2);
            break;
        case 4:
            result=Number(operand1)/Number(operand2);
            break;
    }
    operand1="";
    operand2="";
    operator="";
    
    console.log(result)
    display.textContent=result;
}
