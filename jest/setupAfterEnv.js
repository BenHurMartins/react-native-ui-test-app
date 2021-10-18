global.console = {
  log: jest.fn(), // console.log are ignored in tests
  error: jest.fn(),

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};
