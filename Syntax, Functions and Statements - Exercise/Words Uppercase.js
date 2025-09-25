function WordsUppercase(text){
 let words = text
        .split(/[^a-zA-Z0-9]+/)   
        .filter(w => w.length > 0) 
        .map(w => w.toUpperCase()); 

    console.log(words.join(', '));

}
WordsUppercase('Hi, how are you?')