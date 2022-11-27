"user strict"
import pkg  from "colors";
import sysos from "../interface/sysos.js";
const {color} = pkg;

const text_Color = {
    clipApp: " Cleaner App ".magenta.bgYellow.bold,
    yourDevice: " Your Device ".magenta.bgYellow.bold,
    choose: "Choose an Option:".blue.bold,
    features: "1) Device Features".green.bold,
    cleaner: "2) Clean IP/DNS".green.bold,
    exit1: "3) Exit".red.bold,
    exit2: ":exit".red.bold,
    cleanIP: "1 Clean IP".green.bold,
    cleanDns: "2 Clean DNS".green.bold,
    cleanBoth: "3 Clean Both".gray.strikethrough.bold,
    back: ":back".blue.bold,
    user: "User".yellow.bold,
    version: "Version".yellow.bold,
    bits: "Bits".yellow.bold,
    type: "Type".yellow.bold,
    platform: "Platform".yellow.bold,
    cpu: "CPU".yellow.bold,
    network: "Network Conection".yellow.bold,
    adress: "Adress / IP".yellow.bold,
    mask: "Mask".yellow.bold,
    family: "FAmily".yellow.bold,
    mac: "Mac".yellow.bold
}
//Menu screen 
const menu_screen = `
        ==========================
               ${text_Color.clipApp}
        ==========================
        ${text_Color.choose}
            ${text_Color.features}
            ${text_Color.cleaner}
            ${text_Color.exit1}
        ==========================\n>_: `;
//System Screen
const sys_Screen = `
        ====================
            ${text_Color.yourDevice}
        ====================\n
        ${text_Color.user}: ${sysos.user.green.bold}
        ${text_Color.version}: ${sysos.version.green}
        ${text_Color.bits}: ${sysos.bits.green} 
        ${text_Color.type}: ${sysos.type.green}
        ${text_Color.platform}: ${sysos.platform.green}
        ${text_Color.cpu}: ${sysos.cpu.bgBlue.white.bold}
        ${text_Color.network}: ${sysos.network.green}
        \t ${text_Color.adress}: ${sysos.address.green}
        \t ${text_Color.mask}: ${sysos.netmask.green}
        \t ${text_Color.family}: ${sysos.family.green}
        \t ${text_Color.mac}: ${sysos.mac.toUpperCase().bgBlue.white.bold}
`;
//Options screen
const optionScreen = `
===============CMD================= 
          ${text_Color.back} | ${text_Color.exit2}
===================================`;

//Cleaner screen
const cleanerScreen = `
        ====================
            ${text_Color.clipApp}
        ====================
        ${text_Color.choose}
            ${text_Color.cleanIP}
            ${text_Color.cleanDns}
            ${text_Color.cleanBoth}
        ====================\n
`;

//Exports
export {
    menu_screen,
    sys_Screen,
    optionScreen,
    cleanerScreen
}