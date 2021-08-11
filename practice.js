//Check odd values in a array using Recursive Helper function 
function collectOddValues(arr)
{
    var newArray=[];
    function Helper(arr)
    {
        if(arr.length===0)
            return;
        if(arr[0]%2!==0)
            newArray.push(arr[0]);
        Helper(arr.slice(1));
    }
    Helper(arr);
    return newArray;
}
console.log(collectOddValues([1,2,3,4,5]));