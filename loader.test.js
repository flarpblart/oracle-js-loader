const loader = require('./loader');

test('creates mapper from schema file', () => {
    const compareFieldColumn = 5;
    const compareFieldName   = 'activity_date';
    const applicationMapper  = loader.createMapper('radius-contacts-schema');
    expect(applicationMapper.getSchemaName()).toBe('radius-contacts-schema');
    expect(applicationMapper.getFieldIndex(compareFieldName)).toBe(compareFieldColumn);
    expect(applicationMapper.getFieldName(compareFieldColumn)).toBe(compareFieldName);
});

test('converts radius date', () => {
    const targetDateJSON  = '2018-11-09T18:40:11.000Z';
    const compareDate     = loader.conv.date.fromRadiusDate('2018-11-09 13:40:11.0');
    const compareDateJSON = compareDate.toJSON();
    expect(compareDateJSON).toBe(targetDateJSON);
});