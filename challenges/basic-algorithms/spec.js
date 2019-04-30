const {
	reverseString,
	countVowels,
	maxRecurringChar,
	capSentence
} = require('./index');

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

describe('Test for maxRecurringChar', () => {
	test('maxRecurringChar is a function', () => {
		expect(typeof maxRecurringChar).toEqual('function');
	});
	test('outputs a string', () => {
		expect(typeof maxRecurringChar('output')).toBe('string');
	});
	test('outputs the most recurring character', () => {
		expect(maxRecurringChar('aabacada')).toEqual('a');
	});
	test('outputs for mixed cases', () => {
		expect(maxRecurringChar('aBBghB')).toEqual('b');
	});
	// neglected
	test('output works for numbers', () => {
		expect(maxRecurringChar('a4dd4fr4k')).toEqual('4');
	});
});

describe('Test for capSentence', () => {
	test('capSentence is a function', () => {
		expect(typeof capSentence).toEqual('function');
	});
	test('capSentence shoud return a string', () => {
		expect(typeof capSentence('Todd Bri')).toBe('string');
	});
	test('capSentence should return first letters in caps', () => {
		expect(capSentence('the tales of scotch!')).toEqual('The Tales Of Scotch!');
	});
});
