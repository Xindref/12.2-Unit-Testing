describe('payments test', function () {
    beforeEach(function () {
        billAmtInput.value = 40;
        tipAmtInput.value = 20;
        testCurrPayment = {
            billAmt: '40',
            tipAmt: '20',
            tipPercent: 50
        }
    })
    it('should add a curPayment to allPayments', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments)).toEqual(['payment1']);
    })
    it('should return a currPayment object if values are present', function () {
        expect(createCurPayment()).toEqual(testCurrPayment);
    })
    it('should return undefined currPayment if invalid values are given', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
        billAmtInput.value = -40;
        tipAmtInput.value = -20;
        expect(createCurPayment()).toEqual(undefined);
    })
    it('should add to paymentTbody on appendPaymentTable()', function () {
        appendPaymentTable(testCurrPayment);
        expect(paymentTbody.innerHTML.includes('payment')).toEqual(true);
    })
    it('should update the Shift summary to reflect total Bills, Tips, and Tip% avg', function () {
        submitPaymentInfo();
        expect(summaryTds[0].innerText).toEqual('$40');
        expect(summaryTds[1].innerText).toEqual('$20');
        expect(summaryTds[2].innerText).toEqual('50%');
    })
    afterEach(function () {
        allPayments = {};
        paymentTbody.innerHTML = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        updateSummary();
    })
})