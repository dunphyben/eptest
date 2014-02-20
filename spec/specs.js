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
