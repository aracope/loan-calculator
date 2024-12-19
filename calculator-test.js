
it('should calculate the monthly rate correctly', function () {
  const values = { amount: 200000, years: 20, rate: 10};
  expect(calculateMonthlyPayment(values)).toEqual('1930.04');
});


it("should return a result with 2 decimal places", function() {
  const values = { amount: 100003, years: 10, rate: 10.6};
  expect(calculateMonthlyPayment(values)).toEqual('1355.00');
});

/// etc
