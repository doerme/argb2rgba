var argb2rgba = require('../src/main')
test('common boundray wrap:', () => {
    expect(argb2rgba('#99FFFFFF')).toBe('rgba(255,255,255,0.6)')
})