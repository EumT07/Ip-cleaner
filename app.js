import readline from "readline/promises"
import {stdin as input, stdout as output} from "process"
import util from "util"
//Import screens APP
import {
    menu_screen,
    sys_Screen,
    optionScreen,
    cleanerScreen
} from "./src/screens/screen.js"
// Import from Cleaners
import {releaseIp, renewIP, displayDNS, flushingDNS} from "./src/interface/cleaner.js"
import color from "colors"

const sleep = util.promisify(setTimeout);


//Creating interface screen
let cmdShell = readline.createInterface(input , output);

menuScreen()
async function menuScreen(){
    console.clear();
    const answer = await cmdShell.question(menu_screen);
    switch (answer.trim()) {
        case "1":
            getSysInfo();
            break;
        case "2":
            clean();
            break;
        case "3":
            console.clear()
            console.log("Thanks, Good bye..!!".bgBlue.white.bold);
            await sleep(500);
            cmdShell.close();
            break;
        default:
            console.clear();
            console.log("There was an err, try again".red.bold);
            await sleep(1000);
            menuScreen();
            break;
    }
}

//Sys_Screen
async function getSysInfo(){
    console.clear()
    console.log(optionScreen);
    console.log(sys_Screen);
    const sysData = await cmdShell.question("_> ".bold)
    switch (sysData.trim()) {
        case ":back":
            menuScreen(); 
            break;
        case ":exit":
            console.clear()
            console.log("Thanks, Good bye..!!".bgBlue.white.bold);
            await sleep(500);
            cmdShell.close();
            break;
        default:
            console.clear();
            console.log("There was an err, try again".red.bold);
            await sleep(1000);
            getSysInfo();
            break;
    }
}

//Cleaner
async function clean(){
    console.clear();
    console.log(optionScreen);
    console.log(cleanerScreen);
    const cleanData = await cmdShell.question("_> ".blue.bold)
    switch (cleanData.trim()) {
        case "1":
            releaseIp();
            await sleep(4000);
            renewIP();
            await sleep(7000);
            clean();
            break;
        case "2":
            displayDNS();
            await sleep(4000);
            flushingDNS();
            await sleep(4000);
            clean();
            break;
        case "3":
            console.clear();
            console.log("This Option is not able for the moment".bgYellow.black.bold);
            await sleep(2000);
            clean();
        //     //Cleaning IP
        //     releaseIp();
        //     renewIP();
        //     await sleep(6000);
        //     //Cleaning DNS
        //     displayDNS();
        //     flushingDNS();
        //     await sleep(2000);
        //     menuScreen()
            break;
        case ":back":
            menuScreen()
            break;
        case ":exit":
            console.clear()
            console.log("Thanks,Good bye..!!".bgBlue.white.bold);
            await sleep(500);
            cmdShell.close();
            break;
        default:
            console.clear();
            console.log("There was An error, try again".red.bold);
            await sleep(2000);
            clean();
            break;
    }
  
}
