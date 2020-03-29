const generateUniqueId = require('../../utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('Should generete an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});