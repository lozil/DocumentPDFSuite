const test = require('node:test');
const assert = require('node:assert/strict');

const { estimatePageFill } = require('../js/rich-text-pdf.js');

test('estimatePageFill returns 0% for empty input', () => {
    assert.equal(estimatePageFill('', 12), 0);
    assert.equal(estimatePageFill('   ', 16), 0);
});

test('estimatePageFill hits 100% around charsPerPage', () => {
    // For fontSize=12:
    // charsPerPage = floor(2500 * (12 / 12)) = 2500
    assert.equal(estimatePageFill('a'.repeat(2500), 12), 100);
    assert.equal(estimatePageFill('a'.repeat(2501), 12), 100);
});

test('estimatePageFill scales roughly linearly', () => {
    // For fontSize=12: 1250 / 2500 => 50%
    assert.equal(estimatePageFill('a'.repeat(1250), 12), 50);
});

test('estimatePageFill clamps to 100%', () => {
    assert.equal(estimatePageFill('a'.repeat(999999), 12), 100);
});

