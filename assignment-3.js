function sortArray(array){
    for (let i = 0; i < array.length; i++) {
        const numbers = array[i];
        
        if(numbers>0 && array[0]!=array[1]){ 
        if (array.sort((a,b)=>a-b)){
           array.reverse();
        return  array
        }
       }
      
       else if(numbers<0){
        return 'Invalid output'
       }
       else{
        return "equal"
       }
    }       
} 
const arr1 = [96, 100];
const result =sortArray(arr1)
console.log(result)
const arr2 = [9, 9];
const result2 =sortArray(arr2)
console.log(result2)
const arr3 = [-6, 65];
const result3 =sortArray(arr3)
console.log(result3)