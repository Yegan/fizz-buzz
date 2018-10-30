describe("The function should print 1-100 numbers", function(){
    it("The function should check if the 1-100 is being printed", function(){
     
        var Factory = FizzBuzzFactory()
        
        var listOfNumbers = [1,2,3,4,5,6,7,8,9,10]
      
  
      assert.deepEqual(Factory.listOfNumbers(), listOfNumbers);
    });
  });

  describe("The function should print Fizz for multiples of three", function(){
    it("The function should check if the numbers are multiples of three", function(){
     
        var Factory = FizzBuzzFactory()
        
        var fizzTest = [1, 2, 'fizz', 4, 'buzz', 'fizz',7,8, 'fizz', 'buzz']

      assert.deepEqual(Factory.Fizztest(10), fizzTest);
    });
    it("The function should check if the numbers are multiples of three", function(){
     
        var Factory = FizzBuzzFactory()
        
        var fizzTest = [1, 2, 'fizz', 4, 'buzz', 'fizz',7,8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']

      assert.deepEqual(Factory.Fizztest(15), fizzTest);
    });
  });