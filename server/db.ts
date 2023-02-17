import { createPool, Pool } from 'pg';
import { DATA_SOURCES } from '../config/vars.config';
const dataSource = DATA_SOURCES.pgDataSource;

let pool: Pool;

export const init = () => {
    try {
        pool = createPool({
            connectionLimit: dataSource.DB_CONNECTION_LIMIT,
            host: dataSource.DB_HOST,
            user: dataSource.DB_USER,
            password: dataSource.DB_PASSWORD,
            database: dataSource.DB_DATABASE,
        });

        console.debug('postgreSQL Adapter Pool generated successfully');
    } catch (error) {
        console.error('[pg.connector][init][Error]: ', error);
        throw new Error('failed to initialize pool');
    }
};

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try {
        if (!pool) throw new Error('Pool was not created.');

        return new Promise<T>((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error) reject(error);
                else resolve(results);
            });
        });
    } catch (error) {
        console.error('[pg.connector][execute][Error]: ', error);
        throw new Error('failed to execute query');
    }
}




/*     const pool = new Pool({
        user: 'webdev',
        password: 'Cl@yt0n42!',
        database: 'webdev',
        table: 'leave-form',
        port: 5433,
        host: 'doitwebdev01.claytoncountyga.gov'
    });

    pool.connect();

const everything = (req, res) => {
    pool.query('SELECT * FROM leave-form ORDER BY id ASC', (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })

}

module.exports = { pool }; */