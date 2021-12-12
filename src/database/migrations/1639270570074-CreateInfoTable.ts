import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInfoTable1639270570074 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'infos',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    length: '36',
                    isPrimary: true
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('infos')
    }

}
