let fibonacci=[0,1];
let first=0,last=1,sum=0;;

for (let i =0; i<8; i++)
{
sum=first+last;
first=last;
last=sum;
fibonacci.push(sum);
}
console.log(fibonacci);