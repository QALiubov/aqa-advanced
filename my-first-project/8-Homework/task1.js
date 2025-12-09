const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
let positiveCount = 0;
let negativeCount  = 0;
let zeroCount = 0;
for(i=0; i<numbers.length; i++)
{
    const num = numbers[i];
if (num>0)
{
    positiveCount++;
}
else if (num<0)
    {
        negativeCount++;
    }
    else if (num==0)
    {
        zeroCount++;
    }
}
console.log('positive', positiveCount);
console.log('negative', negativeCount);
console.log('zero', zeroCount);
