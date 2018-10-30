function FizzBuzzFactory(){

    function listOfNumbers(){
        let num = [1,2,3,4,5,6,7,8,9,10]

        return num

    }

    function Fizztest(size){
        // let num = [1,2,3,4,5,6,7,8,9,10]
        let fizz = [];
        for (let i = 1; i <= size; i++) {
            const element = i;
             if(element % 3 === 0 &&  element % 5 === 0 ){
                fizz.push('fizzbuzz')
            }

           else if (  element % 3  === 0) {
                fizz.push('fizz')
            }
           else if (element % 5 === 0) {
                fizz.push('buzz')
            }
           
            else {
                fizz.push(i)
            }
        }
        console.log(fizz)
        return fizz

   
    }
   

    return{
        listOfNumbers,
        Fizztest
    }


}