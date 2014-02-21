describe('factorial', function() {
  
  it('returns a 1 when you enter 0', function () {
    factorial(0).should.equal(1);
  });

  it('returns a 1 when you enter 1', function () {
    factorial(1).should.equal(1);
  });

  it('multiplies a number by all of the positive integers less than that number', function () {
    factorial(5).should.equal(120);
  });
});
describe('fibonacci', function() {
  it('returns a 0 when you enter 1', function () {
    fibonacci(1).should.equal(0);
  });
  it('returns a 1 when you enter 2', function () {
    fibonacci(2).should.equal(1);
  });
  it('returns a 2 when you enter 3', function () {
    fibonacci(3).should.equal(1);
  });

  it('should sum the first two numbers of the array', function () {
    fibonacci(12).should.equal(89);
  });  
});
