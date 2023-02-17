export const DATA_SOURCES = {
    pgDataSource: {
        DB_HOST: process.env.PG_SQL_DB_HOST,
        DB_USER: process.env.PG_SQL_DB_USER,
        DB_PASSWORD: process.env.PG_SQL_DB_PASSWORD,
        DB_DATABASE: process.env.PG_SQL_DB_DATABASE,
        DB_CONNECTION_LIMIT: process.env.PG_SQL_DB_CONNECTION_LIMIT 
        ? parseInt(process.env.PG_SQL_DB_CONNECTION_LIMIT)
        : 4,
    },
};