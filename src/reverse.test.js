const reverse = require('./reverse.js');

test('reverse from string', () => {
  const result = reverse("common")
  expect(result).toBe("nommoc");
});