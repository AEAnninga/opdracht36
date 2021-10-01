function sum(...numbers) {
    return numbers.reduce((prevNum, currNum) => {
        return prevNum + currNum;
    })
}

let nums = [1,2,3,4,5];

  
console.log(...nums);   // spread ... takes away [] and spreads the array objects > 1 2 3 4 5
console.log(nums);      // without spread, keeps the [] with commas > [1, 2, 3, 4, 5]
// Below: takes array, ...nums spreads nums into 1 2 3 4 5 as parameters for function sum()
// in function sum ...numbers takes all single parameters and puts them back into array
console.log(sum(...nums)); // 15
// Of zelf argumenten meegeven:
console.log(sum(5, 10, 15)); // 30

// Of course you get the same of course as when function just takes array:

function sum2(numbers) {
    return numbers.reduce((prevNum, currNum) => {
        return prevNum + currNum;
    })
}
console.log(sum2(nums)); // 15