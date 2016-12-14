export default function validate(options) {
  if (!!options.parser && typeof options.parser !== 'function') {
    throw new TypeError(`Ca11y: "options.parser" must be a function.`)
  }

  if (!!options.formatter && typeof options.formatter !== 'function') {
    throw new TypeError(`Ca11y: "options.formatter" must be a function.`)
  }

  if (!!options.getMinDate && typeof options.getMinDate !== 'function') {
    throw new TypeError(`Ca11y: "options.getMinDate" must be a function.`)
  }

  if (!!options.getMaxDate && typeof options.getMaxDate !== 'function') {
    throw new TypeError(`Ca11y: "options.getMinDate" must be a function.`)
  }
}
