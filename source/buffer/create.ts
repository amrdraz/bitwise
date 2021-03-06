import { Bits, Byte } from '../types'
import writeByte from '../byte/write'

/**
 * Creates a new buffer and writes the given bits.
 *
 * @example
 * createBuffer([1,1,1,1, 0,0,0,1, 1,0,1,0]) => buffer with data 1111 0001 1010 0000
 *
 * @param {Array} bits an array containing the bits to insert
 * @returns {Buffer}
 */
export default (bits: Bits): Buffer => {
	const data: Byte = [0, 0, 0, 0, 0, 0, 0, 0]
	const buffer: Buffer = Buffer.alloc(Math.ceil(bits.length / 8))

	for (let i: number = 0; i < buffer.length; i++) {
		for (let j: number = 0; j < 8; j++) {
			if (bits[i * 8 + j]) data[j] = bits[i * 8 + j]
			else data[j] = 0
		}
		buffer[i] = writeByte(data)
	}

	return buffer
}
