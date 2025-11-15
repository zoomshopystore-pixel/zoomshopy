import { formatCurrency } from '../money.js';




describe('test suite: formatcurrency', () => {
    it('convert cent to dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
     });

     it('work with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
     });

     it('round up to nerest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
     });
}); 