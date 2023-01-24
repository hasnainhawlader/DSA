const arr1 = [1 , 5 , 4, 8 , 3 , 9] ; 
const arr2 = [7 , 9 , 4 , 8 , 0 , -1] ; 
const coh = [1 , 7 , 5 , 9 , 3 , 0 , 9 , -1]
function bubble(arr) {
  for (const i = 0 ; i < arr.length ; i ++){
    for (const j = 0 ; j < arr.length - i ; j++){
      if (arr[j] > arr[j +1]){
        let temp = arr[j] ; 
        arr[j] = arr[j + 1] ; 
        arr[j +1] = temp ; 
      }
    }
  }
  console.log(arr);
} 
bubble(coh) ; 
