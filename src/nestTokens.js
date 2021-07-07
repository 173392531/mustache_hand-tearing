// 折叠tokens，将#和/之间的tokens能够整合起来，作为他的下标为3的项
export default function nestTokens(tokens) {
    // 结果数组
    var nestedTokens=[];
    var sections=[];
    // 收集器，天生指向nestedTokens数组
    var collector=nestedTokens;
    for(let i=0;i<tokens.length;i++){
        let token=tokens[i]
        switch(token[0]){
            // 针对不同情况分别处理
            case '#':
                collector.push(token)
                // 压栈（入栈）
                sections.push(token);
                // 收集器换人，改变的是指向
                collector=token[2]=[]
            break;
            case '/':
                sections.pop();
                // 栈中无东西则指向原数组
                collector=sections.length>0?sections[sections.length-1][2]:nestedTokens
            break;
            default :
                collector.push(token) 
        }
    }
    return nestedTokens;
}