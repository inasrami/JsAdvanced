class Stringer{

    constructor(str, length) {
        this.innerString  = str;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length){
        this.innerLength -= length;
        if (this.innerLength < 0) this.innerLength = 0;
    }

    toString(){
        if (this.innerLength >= this.innerString.length){
            return this.innerString;
        }
        return `${this.innerString.substring(0,this.innerLength)}...`;
    }

}