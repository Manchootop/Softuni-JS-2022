function solve(array){
    const result = {}
    for (let index = 0; index < array.length; index += 2) {
        result[array[index]] = +array[index + 1]
        
    }
    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])