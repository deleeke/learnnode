var sum = 0;
for (var k = 2; k < process.argv.length; k++){
    sum += Number(process.argv[k]);
}
console.log(sum);
