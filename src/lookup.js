// 识别出a.b.c这样形式的数据
export default function lookup(dataObj,keyName) {
    if(keyName.indexOf('.')!=-1 && keyName !='.'){
        var keys =keyName.split('.');
        var temp =dataObj;
        for(let i=0;i<keys.length;i++){
            temp=temp[keys[i]]
        }
        return temp
    }
    return dataObj[keyName]
}
// export default function lookup(dataObj,keyName) {
//     // .存在但是首项不为.
//     if(keyName.indexOf('.')!=-1 && keyName!='.'){
//         var keys=keyName.split('.')
//         var temp=dataObj;
//         for(let i=0;i<keys.length;i++){
//             temp=temp[keys[i]]
//         }
//         return temp
//     }
//     return dataObj[keyName]
// }