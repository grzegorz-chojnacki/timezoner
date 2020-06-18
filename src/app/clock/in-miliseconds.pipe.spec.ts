import { InMilisecondsPipe } from './in-miliseconds.pipe';

describe('InMilisecondsPipe', () => {
    let pipe: InMilisecondsPipe;

    beforeEach(() => {
        pipe = new InMilisecondsPipe();
    });

    it('should multiply unixtime (number) by 1000', () => {
        expect(pipe.transform(1)).toBe(1000);
    });
});
