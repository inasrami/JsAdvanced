function StringLength(string1, string2, string3){
    let length = string1.length + string2.length + string3.length;
    let avg = length / 3;
    console.log(length);
    console.log(Math.floor(avg))
}
StringLength('chocolate', 'ice cream', 'cake')