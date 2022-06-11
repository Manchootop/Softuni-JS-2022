const matrix = [
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]];

for (let row of matrix){
    for (let col of row){
        console.log(col);
    }
}

for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
   const row = matrix[rowIndex] 
    for (let colIndex = 0; colIndex < row.length, colIndex++;){
        console.log(row[colIndex]);

    }
}