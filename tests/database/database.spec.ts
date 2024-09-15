import { test, expect } from '@playwright/test';
import { DataSource } from "typeorm";

test('Test database', async({ request }) => {
    // Call API , create data

    // Read data from database
    const AppDatasource = new DataSource({
        type: "mysql",
        host: "playwrightvn.com",
        port: 3306,
        username: "username",
        password: "password",
        database: "database",
        synchronize: false,
        logging: false,
        entities: ['src/entity/**/*.ts']
    });

    const appDataSource = await AppDatasource.initialize();
    const queryRunner = await appDataSource.createQueryRunner();
    var result = await queryRunner.manager.query(
        `SELECT * FROM product LIMIT 100`
    );

    console.log(result);

    const firstItem = result[0];
    
    expect(firstItem.name).toEqual("223 Mì Tôm Hảo Hảo Tôm Chua Cay");
})