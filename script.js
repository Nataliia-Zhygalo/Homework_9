arr = [];
size = parseInt(prompt('How many countries have you been to?'));
for( i=0; i<size; i++) 
{
arr[i] = prompt(`What is your ${i+1} country you visited?`);
}
console.log(arr.length);
arr.sort();
console.log(arr);
alert(`The contries you have visited are ${arr.sort()}`);
remove = arr.splice(1,3);
console.log(arr);

