function rotate(arr, rotations){
   for (let index = 0; index < rotations; index++) {
       arr.unshift(arr.pop())
      
   } 
   console.log(arr.join(' '));
}
rotate([1, 2, 3, 4], 2)