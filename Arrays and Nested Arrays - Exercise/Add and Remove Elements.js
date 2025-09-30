function AddAndRemoveElements(commands){
    let currentNum = 1;
    let result = [];
    commands.forEach(e =>{
        if(e === 'add'){
            result.push(currentNum)
        } else {
            result.pop()
        }
        currentNum++
    }

    )
    result.length === 0 ? console.log("Empty") : console.log(result.join('\n'));
}
AddAndRemoveElements(['add',

'add',

'add',

'add'])