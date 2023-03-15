describe('helpers test', function () {
    beforeEach(function () {
        billAmtInput.value = 40;
        tipAmtInput.value = 20;
        testCurrPayment = {
            billAmt: '40',
            tipAmt: '20',
            tipPercent: 50
        }
    })
    it('should return a sum of all payments inside allPayments', function () {
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(40);
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    })
    it('should return NaN if sumPaymentTotal gets an invalid input', function () {
        submitPaymentInfo();
        expect(sumPaymentTotal('asdfasdf')).toEqual(NaN);
        expect(sumPaymentTotal(123123.4123123)).toEqual(NaN);
    })
    it('should return the tip percentage based off the bill and tip amount', function () {
        submitPaymentInfo();
        expect(calculateTipPercent(testCurrPayment.billAmt, testCurrPayment.tipAmt)).toEqual(50);
    })
    it('should append a tr to a td with the value and td passed to the function', function () {
        appendTd(paymentTbody, 40);
        expect(paymentTbody.firstChild.innerText).toEqual('40');
    })
    afterEach(function () {
        allPayments = {};
        paymentTbody.innerHTML = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
        updateSummary();
    })
})