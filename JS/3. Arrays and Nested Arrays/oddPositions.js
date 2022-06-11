function solve(nums){
    console.log(   nums.filter((x, i) => i % 2)
    .map(x => x * 2)
    .reverse()
    .join(' ')
    )

 
}

solve([10, 15, 20, 25])