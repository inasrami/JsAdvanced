function CommandProcessor() {
    let str = '';
    
    return {
        append: function(string) {
            str += string;
        },
        removeStart: function(n) {
            str = str.substring(n);
        },
        removeEnd: function(n) {
            str = str.substring(0, str.length - n);
        },
        print: function() {
            console.log(str);
        }
    };
}