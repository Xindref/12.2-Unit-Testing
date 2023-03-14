
it('should calculate the monthly rate correctly', function () {
  values = {
    amount: 10000,
    years: 5,
    rate: 2.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('177.47');
});


it("should return a result with 2 decimal places", function () {
  values = {
    amount: 1000000,
    years: 5,
    rate: 2.5
  }
  expect(calculateMonthlyPayment(values).split('.').length).toEqual(2);
});

/// etc
