var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        databases: [
            {
                name: 'CLUSTER1',
                schema: 'schema1'
            },
            {
                name: 'CLUSTER2',
                schema: 'schema2'
            }
        ],
        columns: [
            {
                tableName: 'userTable',
                columnName: 'userId',
                format: 'VARCHAR(20) NOT NULL'
            },
            {
                tableName: 'userTable',
                columnName: 'name',
                format: 'VARCHAR(30)'
            },
            {
                tableName: 'userTable',
                columnName: 'age',
                format: 'INTEGER'
            },
            {
                tableName: 'reserveTable',
                columnName: 'reserveId',
                format: 'VARCHAR(10) NOT NULL'
            },
            {
                tableName: 'reserveTable',
                columnName: 'userId',
                format: 'VARCHAR(20)'
            }
        ]
    }
});
