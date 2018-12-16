const fs = require('fs');

function getDefinitionFromFile(schemaName, schemaPath = './schemas') {
    const definitionJSON = fs.readFileSync(`${schemaPath}/${schemaName}.json`, { encoding: 'utf-8' });
    const definition = JSON.parse(definitionJSON);
    return definition;
}

class mapper {
    constructor(schemaName) {
        this.schemaName = schemaName;
        this.definition = getDefinitionFromFile(schemaName);
    }

    getSchemaName() {
        return this.schemaName;
    }

    getFieldIndex(fieldName) {
        const [fieldDefinition] = this.definition.fieldDefinitions.filter(def => def.name === fieldName);
        return fieldDefinition.column;
    }

    getFieldName(fieldIndex) {
        const [fieldDefinition] = this.definition.fieldDefinitions.filter(def => def.column === fieldIndex);
        return fieldDefinition.name;
    }
}

module.exports = mapper;