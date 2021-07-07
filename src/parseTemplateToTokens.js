import Scanner from './Scanner.js';
import nestTokens from './nestTokens.js';

// 将模板字符串变为tokens数组
export default function parseTemplateToTokens(templateStr){
    var tokens=[];
    // 创建扫描器
    var scanner = new Scanner(templateStr);
    var words;
    // 扫描器循环工作
    while(!scanner.eos()){
        words=scanner.scanUtil('{{');
        if(words!=''){
            // 判断是标签里的空格还是外部的空格
            let isInJJH=false;
            var _words='';
            for(let i=0;i<words.length;i++){
                if(words[i]=='<'){
                    isInJJH = true
                }else if (words[i]=='>'){
                    isInJJH=false
                }
                if(!/\s/.test(words[i])){
                    _words+=words[i]
                }else{
                    if(isInJJH){
                        _words+=' '
                    }
                }
            }
            tokens.push(['text',_words])
        }
        scanner.scan('{{');
        words=scanner.scanUtil('}}')
        if(words!=''){
            if(words[0]=='#'){
                tokens.push(['#',words.substring(1)])
            }else if (words[0]=='/'){
                tokens.push(['/',words.substring(1)])
            }else {
                tokens.push(['name',words])
            }
        }
        scanner.scan('}}')
    }
    return nestTokens(tokens)
}
