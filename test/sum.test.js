const sum = require('../sum');

QUnit.module('sum');

QUnit.test('sum two numbers should succeed', (assert) => {
    assert.equal(sum(1, 2), 3);
});
