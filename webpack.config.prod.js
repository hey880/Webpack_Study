const path = require('path'); 

module.exports = {
    mode:"production", //배포 모드로 설정
    entry: "./source/index.js", 
    output: {
        path:path.resolve(__dirname, "public"),
        filename: 'index_bundle.js' 
    }  
}