/* 1-th */

/* return - otal number of days or -1  */
  function getDays(date1, date2){

      let isDates = (date1 instanceof Date && date2 instanceof Date)
      return isDates ? Math.floor(Math.abs(date2 - date1)/(1000*60*60*24)) : -1

  }


  /* 2-th task */
 

 function indexOfCaps(str) {

    let arrIndexs = [];
    
    if( typeof str === 'string' ){
        let currentLSymbol;
        let isCap;
        
        for (let i = 0; i < str.length; i++) {
            currentLSymbol = str.charCodeAt(i);
            isCap = (currentLSymbol > 64 && currentLSymbol < 91) || (currentLSymbol > 1040 && currentLSymbol < 1072);
            if(isCap) arrIndexs.push(i);     
        }
        
    }
  
    return arrIndexs
    
 }


/*  Tests */

class Test {

    static correct = "Correct";
    static incorrect = "Incorrect";

    static assertsEquals(res, exp){   
      console.log( res === exp ? this.correct: this.incorrect)   
    }

    static assertSimilar (res, exp){
      console.log(JSON.stringify(res) === JSON.stringify(exp)? this.correct: this.incorrect) 
    }
  
}


Test.assertsEquals(getDays(new Date('June 14, 2019'), new Date('June 20, 2019')), 6)
Test.assertsEquals(getDays(new Date('December 29, 2018'), new Date('January 1, 2019')), 3)
Test.assertsEquals(getDays(new Date('July 20, 2019'), new Date('July 30, 2019')), 10)

Test.assertSimilar(indexOfCaps("eQuINoX"), [1, 3, 4, 6])
Test.assertSimilar(indexOfCaps("determine"), [])
Test.assertSimilar(indexOfCaps("STRIKE"), [0, 1, 2, 3, 4, 5])
Test.assertSimilar(indexOfCaps("sUn"), [1])
Test.assertSimilar(indexOfCaps("SpiDer"), [0, 3])
Test.assertSimilar(indexOfCaps("accOmpAnY"), [3, 6, 8])
Test.assertSimilar(indexOfCaps("@xCE#8S#i*$en"), [2, 3, 6])
Test.assertSimilar(indexOfCaps("1854036297"), [])
Test.assertSimilar(indexOfCaps("Fo?.arg~{86tUx=|OqZ!"), [0, 12, 16, 18])







 
