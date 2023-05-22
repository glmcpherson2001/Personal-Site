const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express');
const path = require('path');


//Functions
function getDirFileNames(dirPath){
    dirPath = path.join(__dirname, dirPath);
    var fileArray = [];

    fs.readdir(dirPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
                fileArray.push(file);
        });
        console.log(fileArray);
        return fileArray;
    });
    
}

console.log(getDirFileNames('Personal'));

//------------------------------------


