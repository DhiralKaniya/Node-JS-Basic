var arr = []
arr.push(20);
arr.push(10);
arr.push(15);
arr.push(9);
arr.push(17);
var value = 1;
arr.forEach(function(item) {
    if(item==value)
        console.log('Your value has been founded' + item);
});
