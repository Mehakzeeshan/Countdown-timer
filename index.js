#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Enter time in seconds to start countdown Timer",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number";
        }
        else if (input > 60) {
            return "seconds must be within 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput; // . is used to call any value or variable you have made
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val); // new Date() method gives us seconds in milliseconds or tells the time in milliseconds 
    const intervalTime = new Date(intTime); // we can convert milliseconds into seconds by dividing it by 1000
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600); //  minutes show krwana hai
        const sec = Math.floor(timeDiff % 60); // for current second we use .setSeconds()
        console.log(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
// for current second we use .setSeconds()
