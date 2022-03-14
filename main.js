//entry point of my command line

const commands=require("./commands");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let folderPath=inputArr[1];
switch(command){
    case "tree":
        //call tree function
        break;
    case "organize":
        //call organize function
        break;
    case "help":
        commands.help();
        //call help function
        break;
    default:
        console.log("Invalid Command");
}

