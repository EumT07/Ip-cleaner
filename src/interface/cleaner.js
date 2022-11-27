import chillp from "node:child_process"
import util from "node:util"
import iconv from "iconv-lite"
import color from "colors"



const cmdAsync = util.promisify(chillp.exec) 


//Clean IP 
async function releaseIp(){
    const {stdout, stderr } = await cmdAsync("ipconfig /release", {"encoding":"buffer"});
    const encodeDataOut = iconv.decode(stdout, "Cp852");
    const encodeDataErr = iconv.decode(stderr, "Cp852");
    console.log(encodeDataOut.blue.bold);
    console.log(encodeDataErr.red);
    console.log("Ip was Cleaned".bgGreen.white.bold);
 }
 async function renewIP(){
    const {stdout, stderr } = await cmdAsync("ipconfig /renew", {"encoding":"buffer"});
    const encodeDataOut = iconv.decode(stdout, "Cp852");
    const encodeDataErr = iconv.decode(stderr, "Cp852");
    console.log(encodeDataOut.blue.bold);
    console.log(encodeDataErr.red);
    console.log("Ip was renwed".bgGreen.white.bold);
 }

 //Clean DNS 
 async function displayDNS(){
    const {stdout, stderr } = await cmdAsync("ipconfig /displaydns", {"encoding":"buffer"});
    const encodeDataOut = iconv.decode(stdout, "Cp852");
    const encodeDataErr = iconv.decode(stderr, "Cp852");
    console.log("All DNS".yellow.bold);
    console.log(encodeDataOut);
    console.log(encodeDataErr.red);
    console.log("Those were all DNS".bgGreen.white.bold);
 }

 async function flushingDNS(){
    const {stdout, stderr } = await cmdAsync("ipconfig /flushdns", {"encoding":"buffer"});
    const encodeDataOut = iconv.decode(stdout, "Cp852");
    const encodeDataErr = iconv.decode(stderr, "Cp852");
    console.log("Cleaning".yellow.bold);
    console.log(encodeDataOut.blue.bold);
    console.log(encodeDataErr.red);
    console.log("DNS was Cleaned".bgGreen.white.bold);
 }
export {
    releaseIp,
    renewIP,
    displayDNS,
    flushingDNS
}