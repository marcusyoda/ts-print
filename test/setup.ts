afterAll(() => {
  if (global.gc) {
    global.gc()
  }
})
