import read from './read'

test('read', () => {
	expect(read(0x0)).toEqual([0, 0, 0, 0])
	expect(read(0x1)).toEqual([0, 0, 0, 1])
	expect(read(0x2)).toEqual([0, 0, 1, 0])
	expect(read(0x3)).toEqual([0, 0, 1, 1])
	expect(read(0x4)).toEqual([0, 1, 0, 0])
	expect(read(0x5)).toEqual([0, 1, 0, 1])
	expect(read(0x6)).toEqual([0, 1, 1, 0])
	expect(read(0x7)).toEqual([0, 1, 1, 1])
	expect(read(0x8)).toEqual([1, 0, 0, 0])
	expect(read(0x9)).toEqual([1, 0, 0, 1])
	expect(read(0xa)).toEqual([1, 0, 1, 0])
	expect(read(0xb)).toEqual([1, 0, 1, 1])
	expect(read(0xc)).toEqual([1, 1, 0, 0])
	expect(read(0xd)).toEqual([1, 1, 0, 1])
	expect(read(0xe)).toEqual([1, 1, 1, 0])
	expect(read(0xf)).toEqual([1, 1, 1, 1])
})

test('throw when the array is invalid', () => {
	expect(() => read()).toThrow()
	expect(() => read(256)).toThrow()
	expect(() => read(-1)).toThrow()
	expect(() => read(0.01)).toThrow()
	expect(() => read([0, 1, 0, 1, 1])).toThrow()
	expect(() => read('FF')).toThrow()
})
