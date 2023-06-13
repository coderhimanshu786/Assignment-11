//Complexity
//Time Complexity- O(logn)
//Space Complexity - O(n)
function squareRootOf(n) {
    let i = 1;
    //run untile 4 i.e 1x1=1 2x2=4. and returns floor value
    while(i*i <= n) i++;
    return(i-1);
};
console.log(squareRootOf(4));
console.log(squareRootOf(8));