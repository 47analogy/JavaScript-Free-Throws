const { reverseString, countVowels } = require('./index');

describe('Tests for reverseString', () => {
	test('reverseString is a function', () => {
		expect(typeof reverseString).toEqual('function');
	});

	test('reverses a string of text', () => {
		expect(reverseString('aeiou')).toEqual('uoiea');
	});

	test('reverses a string containing numbers', () => {
		expect(reverseString('123456789')).toEqual('987654321');
	});

	test('reverses a string containing mixed case characters', () => {
		expect(reverseString('AsDfGhJkL')).toEqual('LkJhGfDsA');
	});
});

describe('Test for countVowel', () => {
	test('countVowel is a fumction', () => {
		expect(typeof countVowels).toEqual('function');
	});
	test('outputs a number', () => {
		expect(typeof countVowels('test string')).toBe('number');
	});
	test('counts the correct number of vowels', () => {
		expect(countVowels('veritas')).toEqual(3);
	});
	test('counts vowels for mixed cases', () => {
		expect(countVowels('Anything')).toEqual(2);
	});
	// neglected
	test('returns the number of vowels found when string is capitalized', () => {
		expect(countVowels('AEIOU')).toEqual(5);
	});
});
