function calculateAverage(arr: Array<number>){
    let sum: number = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    let avg = (sum/arr.length).toFixed(2);
    console.log(`The Average of [17, 9, 4, 82, 15, 36] is ${avg}`);
    // console.log(`The Average of [9, 4, 1, 7, 2, 3, 5, 8, 10, 6] is ${avg}`);
}
calculateAverage([17, 9, 4, 82, 15, 36]);
// calculateAverage([9, 4, 1, 7, 2, 3, 5, 8, 10, 6]);

