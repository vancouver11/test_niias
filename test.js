
const arr = ['2', 3, '10x', ['key1', '2key', ['4']], 'cool', true]; 

function summarize(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            summ += +arr[i];
        } else {

            switch (checkType(arr[i])) {
                case 0:
                    break;
                case 1:
                    summ +=summarize(arr[i]);
                  break;
                case 2:
                  summ += ChangeStringToNumber(arr[i]);
                  break;
              }         
        }       
    }
    
    return summ;
 
}


/* 
Return
0-object
1-array
2-string 
*/
function checkType(element) { 
    if(typeof(element) == "object"){
        
        return  Number(Array.isArray(element));
    }
    
    return 2    
    
}

function ChangeStringToNumber(element){
   if(isNaN(element[0])) return 0;

   for (let i = 1; i < element.length; i++) {
        if (isNaN(element[i])) return +element.slice(0, i) 
   }
   
}


console.log(summarize(arr))



