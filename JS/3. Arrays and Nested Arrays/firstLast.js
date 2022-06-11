function firstLast(numsAsStrings){
    let first = [...numsAsStrings].shift();
    let last = [...numsAsStrings].pop();

    
    const result = Number(first) + Number(last);
    console.log(result);
}

firstLast(['20', '30', '40']);

firstLast(['10']);
