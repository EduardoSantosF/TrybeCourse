const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase())
  }, 2000);;
}

test('To upper case', done => {
  const callback = (str) => {
    expect(str).toBe("WORKS!");
    done();
  }
  uppercase("works!", callback);
});
