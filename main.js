//entry point of my command line
let organizeFunct=require("./commands/organize");
let helpFunc=require("./commands/help");
let treeFunc=require("./commands/tree");

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let folderPath=inputArr[1];
// let folderPath="";
switch(command){
    case "tree":
        //call tree function
        treeFunc.tree(folderPath);
        break;
    case "organize":
        //call organize function
        organizeFunct.organize(folderPath);
        break;
    case "help":
        helpFunc.help();
        //call help function
        break;
    default:
        console.log("Invalid Command");
}

