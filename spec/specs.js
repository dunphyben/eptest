describe('leapYear', function() {
  it('is false for a year is not divisible by 4', function () {
    leapYear(1999).should.equal(false);
  });
});
