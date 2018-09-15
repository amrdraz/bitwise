/**
 * Applies a bitwise XOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.xor(buffer1, buffer2, false) => Buffer(buffer1 XOR buffer2)
 *
 * @param {Buffer} buffer1 first buffer
 * @param {Buffer} buffer2 second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} buffer1 XOR buffer2
 */
export default (
	buffer1: Buffer,
	buffer2: Buffer,
	isLooping: boolean = false
): Buffer => {
	const length: number = isLooping ? buffer2.length : buffer1.length

	const result: Buffer = Buffer.alloc(length)

	for (let i: number = 0; i < length; i++) {
		const j: number = isLooping ? i % buffer1.length : i
		result[i] = buffer1[j] ^ buffer2[i]
	}

	return result
}