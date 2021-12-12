module.exports = {
    type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'admin',
   database: 'test',
   entities: ['src/entities/*.{js,ts}'],
  migrations: ['src/database/migrations/*.{js,ts}'],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/entities'
  }
}