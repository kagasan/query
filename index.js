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
        ],
        url: '',
        urlText: ''
    },
    methods: {
        makeUrl: function(){
            this.url = location.href.split('?')[0];
            this.url += '?databases=' + encodeURI(JSON.stringify(this.databases));
            this.url += '&columns=' + encodeURI(JSON.stringify(this.columns));
            const date = new Date();
            let tmpText = '情報付きurl(最終更新';
            if(date.getHours() < 10)tmpText += '0';
            tmpText += date.getHours() + ':';
            if(date.getMinutes() < 10)tmpText += '0';
            tmpText += date.getMinutes() + ':';
            if(date.getSeconds() < 10)tmpText += '0';
            tmpText += date.getSeconds() + ')';
            this.urlText = tmpText;
        }
    },
    created: function() {
        const params = (location.href + '?').split('?')[1].split('&');
        params.forEach(param => {
            const key = param.split('=')[0];
            const value = (param + '=').split('=')[1];
            if(key === 'databases') {
                this.databases = JSON.parse(decodeURI(value));
            }
            if(key === 'columns') {
                this.columns = JSON.parse(decodeURI(value));
            }
        });
        this.makeUrl();
    }
});
