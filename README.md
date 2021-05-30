# query
複数のクラスタに複数のカラムを追加するDDLとロールバックDDLをポンと作る。
- https://kagasan.github.io/query/
## usage
[2クラスタに3カラム追加するケース](https://kagasan.github.io/query/?databases=%5B%7B%22name%22:%22%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0%E7%92%B0%E5%A2%83%22,%22schema%22:%22STG%22%7D,%7B%22name%22:%22%E6%9C%AC%E7%95%AA%E7%92%B0%E5%A2%83%22,%22schema%22:%22PROD%22%7D%5D&columns=%5B%7B%22tableName%22:%22USER_TABLE%22,%22columnName%22:%22AGE%22,%22format%22:%22INTEGER%22%7D,%7B%22tableName%22:%22USER_TABLE%22,%22columnName%22:%22NAME%22,%22format%22:%22VARCHAR(30)%22%7D,%7B%22tableName%22:%22USER_TABLE%22,%22columnName%22:%22GENDER%22,%22format%22:%22VARCHAR(1)%22%7D%5D)

