const fs=require("fs");
const path=require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){
    //1. <===============to check if srcPath is present=============>
    if(srcPath==undefined){
        /*The process.cwd() method returns the current working directory of the Node.js process.*/
        srcPath=process.cwd(); 
    }
    //2. <=======to create a path where we will make the organized_files folder======>
    let organizedFilesPath=path.join(srcPath,"organized_files");
    //internally path.join() is same as srcPath+"\"+"organized_files";
    //3.<===========to check if the path where we want to create our folder already exists or not====>
    if(!fs.existsSync(organizedFilesPath)){
        fs.mkdirSync(organizedFilesPath);
        console.log("directory sucessfully created");
    }else{
        console.log("directory already exists");
        // return;
    }
    
    //4.<=====to scan the entire srcPath and store all the available files in an array=====>
    //fs.readdirSync(directoryPath) reads the content of a directory and returns an array of all the files that are present inside the directory
    let allFiles=fs.readdirSync(srcPath);
    console.log(allFiles);

    //5.<=======to traverse through allFiles and classify them on the basis of their extension======>
    for(let i=0;i<allFiles.length;i++){
        // let extension=allFiles[i].substring(allFiles[i].indexOf('.')+1);
        let extension=path.extname(allFiles[i]);
        console.log(extension);
    }
}
let srcPath="C:\\Users\\HP\\Desktop\\fjp dev\\js\\file_organizer\\downloads"
organize(srcPath);