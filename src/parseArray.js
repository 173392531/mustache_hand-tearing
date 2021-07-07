import lookup from './lookup.js'
import renderTemplate from './renderTemplate.js'

// 处理数组，结合rendertemplate实现递归
export default function parseArray(token,data) {
    var v=lookup(data,token[1]);
    console.log(v)
    console.log(token)

    var resultStr='';
    for(let i=0;i<v.length;i++){
        console.log({
            ...v[i],
            '.':v[i]
        })
        resultStr+=renderTemplate(token[2],{
            // 现在的数据是v[i]的展开
            ...v[i],
            // 把当前项替换进.中
            '.':v[i]
        })
    }
    return resultStr
}