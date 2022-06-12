function solve(arr){
    let num = 0
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        num++;
        let command = arr[index];
        if (command == 'add'){
            newArr.push(num);
        } else if (command = 'remove'){
            newArr.pop()
        }
        
    }
    if (newArr.length == 0){
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}

solve(['add', 
'add', 
'add', 
'add']
)

console.log('------');

solve(['add', 
'add', 
'remove', 
'add', 
'add']
)

solve(['remove', 
'remove', 
'remove']
)