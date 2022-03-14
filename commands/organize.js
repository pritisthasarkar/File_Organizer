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
    if(srcPath==undefined){
        /*The process.cwd() method returns the current working directory of the Node.js process.*/
        srcPath=process.cwd(); 
        // console.log(srcPath);
    }
    let organizedFilesPath=path.join(srcPath,"organized_files");
    if(!fs.existsSync(organizedFilesPath)){
        fs.mkdirSync(organizedFilesPath);
        console.log("directory sucessfully created");
    }else{
        console.log("directory already exists");
    }
    
}
organize();