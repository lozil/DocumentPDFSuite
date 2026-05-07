const test = require('node:test');
const assert = require('node:assert/strict');

const { extractPlaceholders, linkify } = require('../js/script.js');

test('extractPlaceholders returns unique placeholders in order', () => {
    const input = 'Dear {customer_name}, your order #{order_id} is ready!';
    const result = extractPlaceholders(input);
    assert.deepEqual(result, ['customer_name', 'order_id']);
});

test('extractPlaceholders de-duplicates repeated placeholders', () => {
    const input = 'Hello {name} {name} {other} {name}!';
    const result = extractPlaceholders(input);
    assert.deepEqual(result, ['name', 'other']);
});

test('extractPlaceholders returns empty array when no placeholders exist', () => {
    const input = 'No braces here.';
    const result = extractPlaceholders(input);
    assert.deepEqual(result, []);
});

test('linkify converts http(s) URLs into anchors', () => {
    const input = 'Visit https://example.com and http://test.com';
    const result = linkify(input);

    const expected =
        'Visit ' +
        '<a href="https://example.com" target="_blank" rel="noopener">https://example.com</a>' +
        ' and ' +
        '<a href="http://test.com" target="_blank" rel="noopener">http://test.com</a>';

    assert.equal(result, expected);
});

test('linkify leaves non-URL text untouched', () => {
    const input = 'Just text and {braces}, no links.';
    const result = linkify(input);
    assert.equal(result, input);
});

