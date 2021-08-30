var numbers = [1,2,4,11,15,21,25,120];

function swap() {
    debugger;
    for(var i = 0; i < (numbers.length)-1; i++)
    {
        for(var j = i+1; j < numbers.length; j++)
        {
            if(numbers[i] < numbers[j])
            {
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    console.log(numbers);
}