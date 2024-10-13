import SqlRules from '..';

const pgRules: SqlRules = {
    create: fields => `INSERT INTO ${fields.tableName} (${fields.valuesFields.join(', ')}) VALUES (${fields.valuesFields.map(() => '?').join(', ')})`,
    read: fields => `SELECT ${fields.whereFields.join(', ')} FROM ${fields.tableName}`,
    update: fields => `UPDATE ${fields.tableName} SET ${fields.setFields.map(field => `${field} = ?`).join(', ')} WHERE ${fields.whereFields.map(field => `${field} = ?`).join(' AND ')}`,
    delete: fields => `DELETE FROM ${fields.tableName} WHERE ${fields.whereFields.map(field => `${field} = ?`).join(' AND ')}`,
}

console.log([
    pgRules.create({
        tableName: 'users',
        valuesFields: ['username', 'password', 'age'],
    }),
    pgRules.read({
        tableName: 'users',
        whereFields: ['username', 'id'],
    }),
    pgRules.update({
        tableName: 'users',
        setFields: ['username', 'age'],
        whereFields: ['username', 'id'],
    }),
    pgRules.delete({
        tableName: 'users',
        whereFields: ['username', 'password'],
    }),
])