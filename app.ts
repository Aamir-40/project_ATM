#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance=20000; // Pak Rupees
let myPin=9791;
let pinAnswer =await inquirer.prompt([
    {
    name:"pin",
    type:"number",
    message:" Please Enter your 4 digit pin code:",
}
]);
console.log(pinAnswer.pin)
if (pinAnswer.pin===myPin){
    console.log("correct pin code !!!")
    let operationAns=await inquirer.prompt([
        {
        name:"operation",
        type:"list",
        message:"Please select any one option:",
        choices:["withdraw","check balance","Fast cash"],
    }
    ]);
  
    if(operationAns.operation==="withdraw"){
        let amountanswer=await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Please Enter your amount please::",
                    type:"number",
                 },
                
            ] )
             if(myBalance > amountanswer.amount){
                myBalance -= amountanswer.amount
                console.log(`your current Balance is: ${myBalance}`);
             }
             else{
             console.log("Your Current Balance is Insufficient !!");
             }
        }

         else if(operationAns.operation === "check balance"){
            console.log(`Your current balance is ${myBalance}`)
         } 
         else if(operationAns.operation==="Fast cash"){
            let amounttAnswer=await inquirer.prompt(
                [
                    {
                        name:"Amount",
                        message:"Enter your amount please:",
                        type:"list",
                        choices:["500","1000","2000","5000","10000"],
                     },
                    
                ] ) 
                
                myBalance -= amounttAnswer.Amount
                console.log(`your current Balance is: ${myBalance}`);
            }
        }
    
else{
    console.log("invalid pin number!!!");
}


