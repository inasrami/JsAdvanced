function listProcessor(commands) {
    let collection = [];
    
    const processor = {
        add: function(string) {
            collection.push(string);
        },
        remove: function(string) {
            collection = collection.filter(item => item !== string);
        },
        print: function() {
            console.log(collection.join(','));
        }
    };
    
    for (let command of commands) {
        const [action, value] = command.split(' ');
        processor[action](value);
    }
}