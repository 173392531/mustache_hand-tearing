export default class Scanner{
    constructor(templateStr){
        this.templateStr=templateStr;
        // 指针
        this.pos=0;
        this.tail=templateStr;
    }
    scan(tag){
        if(this.tail.indexOf(tag)==0){
            this.pos+=tag.length;
            this.tail=this.templateStr.substring(this.pos);
        }
    }
    scanUtil(stopTag){
        const pos_backup=this.pos;
        while(!this.eos() && this.tail.indexOf(stopTag)!=0){
            this.pos++;
            this.tail=this.templateStr.substring(this.pos)
        }
        return this.templateStr.substring(pos_backup,this.pos)
    }
    // 指针是否已经到头，返回布尔值。end of string
    eos(){
        return this.pos>=this.templateStr.length
    }
}