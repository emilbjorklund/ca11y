import assert from 'assert'
import Ca11y from '../src/ca11y'

describe('Ca11y', () => {

  // Configuration

  describe('configuration', () => {
    let input

    beforeEach(() => {
      document.body.innerHTML = window.__html__['test/index.html']
      input = document.getElementById('date-input')
    })

    afterEach(() => {
      input = null
      document.body.innerHTML = ''
    })

    it('throws if options.formatter is declared but not a function', () => {
      const init = () => new Ca11y(input, { formatter: 'notafunction' })
      assert.throws(init, TypeError)
    })

    it('throws if options.parser is declared but not a function', () => {
      const init = () => new Ca11y(input, { parser: 'notafunction' })
      assert.throws(init, TypeError)
    })

    it('throws if options.getMinDate is declared but not a function', () => {
      const init = () => new Ca11y(input, { getMinDate: 'notafunction' })
      assert.throws(init, TypeError)
    })

    it('throws if options.getMaxDate is declared but not a function', () => {
      const init = () => new Ca11y(input, { getMinDate: 'notafunction' })
      assert.throws(init, TypeError)
    })
  })

  // Rendering

  describe('when rendered into the document', () => {
    let instance

    beforeEach(() => {
      document.body.innerHTML = window.__html__['test/index.html']
      const input = document.getElementById('date-input')
      instance = new Ca11y(input)
    })

    afterEach(() => {
      instance.destroy()
      instance = null
      document.body.innerHTML = ''
    })

    it('renders the toggle button into the document', () => {
      const buttonNode = document.querySelectorAll('.ca11y__toggle')
      assert.equal(buttonNode.length, 1)
    })

    it('renders the calendar into the document', () => {
      const ca11yNode = document.querySelectorAll('.ca11y__picker')
      assert.equal(ca11yNode.length, 1)
    })
  })

  describe('when using min- and max-attributes and rendered into the document', () => {
    let instance

    beforeEach(() => {
      document.body.innerHTML = window.__html__['test/index.html']
      const input = document.getElementById('date-input-minmax')
      instance = new Ca11y(input, {
        format: ['yyyy', 'mm', 'dd'],
        delimiter: '-'
      })
    })

    afterEach(() => {
      instance.destroy()
      instance = null
      document.body.innerHTML = ''
    })

    it('has 11 empty days in january', () => {
      const outofrange = document.querySelectorAll('.ca11y__cell.-empty')
      assert.equal(outofrange.length, 11)
    })

    it('has seven disabled days in january', () => {
      const disabled = document.querySelectorAll('.ca11y__cell button[disabled]')
      const outofrange = document.querySelectorAll('.ca11y__cell.-outofrange')
      assert.equal(disabled.length, 6)
      assert.equal(outofrange.length, 6)
    })
  })
})
