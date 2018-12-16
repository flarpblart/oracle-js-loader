const conv   = require('./conversion');
const Mapper = require('./mapper');

function createMapper(schemaName) {
    const mapper = new Mapper(schemaName);
    return mapper;
}

module.exports = {
    conv,
    createMapper
};