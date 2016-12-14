import util from '../src/ca11y/lib/util'
import assert from 'assert'

describe('util.js', () => {
  it('checks if a date is between min- and max dates', () => {
    const date = new Date('2016-12-14')
    const tooBig = new Date('2017-01-01')
    const tooSmall = new Date('1979-07-18')
    const min = new Date('1979-08-07')
    const max = new Date('2016-12-24')
    assert.equal(util.isDateInRange(date, min, max), true);
    assert.equal(util.isDateInRange(tooBig, min, max), false);
    assert.equal(util.isDateInRange(tooSmall, min, max), false);
  })
})