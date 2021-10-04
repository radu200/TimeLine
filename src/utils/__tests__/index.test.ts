import * as utils from '../';

describe('Test Date', () => {
  it('should output right time', () => {
    const date = new Date('2021-09-17T16:25:00');
    const result = '16:25';
    expect(utils.getTime(date)).toEqual(result);
  });
});
