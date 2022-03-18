const fs = require("fs");
const path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png', 'jpg', 'jpeg']
}

function organize(srcPath) {
    //1. <===============to check if srcPath is present=============>
    if (srcPath == undefined) {
        /*The process.cwd() method returns the current working directory of the Node.js process.*/
        srcPath = process.cwd();
    }
    //2. <=======to create a path where we will make the organized_files folder======>
    let organizedFilesPath = path.join(srcPath, "organized_files");
    //internally path.join() is same as srcPath+"\"+"organized_files";
    //3.<===========to check if the path where we want to create our folder already exists or not====>
    if (!fs.existsSync(organizedFilesPath)) {
        fs.mkdirSync(organizedFilesPath);
        console.log("directory sucessfully created");
    } else {
        console.log("directory already exists");
        // return;
    }

    //4.<=====to scan the entire srcPath and store all the available files in an array=====>
    //fs.readdirSync(directoryPath) reads the content of a directory and returns an array of all the files that are present inside the directory
    let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);

    //5.<=======to traverse through allFiles and classify them on the basis of their extension======>
    for (let i = 0; i < allFiles.length; i++) {
        //1. to check if it is a file or folder. we will proceed forward only if it is a file.

        let fullPathOfFile = path.join(srcPath, allFiles[i]);
        let isFile = fs.lstatSync(fullPathOfFile).isFile(); //fs.lstatSync() gives information about the link provided which refers to a file or a directory. lstatSync() has a function isFile()/isDirectory() which tells us if the link provided corresponds to a file or a directory. true --> agar file hain false --> agar folder hain.
        if (isFile) {
            //2. to get the extension of the file
            let extension=allFiles[i].split(".")[1];
            //3. to get the designated folder name where the file belongs
            let folderName=getFolderName(extension); //archives
            // console.log(allFiles[i] +" belongs in "+folderName);
            //4. copy the file from the source folder(srcPath) to the destination folder(folder_name eg:- images,songs etc.).
            //          copy from    copy what    paste where
            copyFileToDest(srcPath,fullPathOfFile,folderName);
        }

    }
}

function getFolderName(extension){

    //code
    if(types.media.indexOf(extension)!=-1){
        return "media";
    }else if(types.archives.indexOf(extension)!=-1){
        return "archives";
    }else if(types.documents.indexOf(extension)!=-1){
        return "documents";
    }else if(types.app.indexOf(extension)!=-1){
        return "app"
    }else if(types.images.indexOf(extension)!=-1){
        return "images";
    }else{
        return "miscellenous";
    }
}
function copyFileToDest(srcPath,fullPathOfFile,folderName){

    //code
    let destFolderPath=path.join(srcPath,"organized_files",folderName);//...../organized_files/images
    //check if folder already exists. if does not then make folder.
    if(!fs.existsSync(destFolderPath)){
        fs.mkdirSync(destFolderPath);
    }
    let fileName=path.basename(fullPathOfFile);
    let destFileName=path.join(destFolderPath,fileName);
    //              source path     destination path
    fs.copyFileSync(fullPathOfFile,destFileName);
}

let srcPath = "C:\\Users\\HP\\Desktop\\fjp dev\\js\\file_organizer\\downloads"
// organize(srcPath);
module.exports={
    organize:organize
}