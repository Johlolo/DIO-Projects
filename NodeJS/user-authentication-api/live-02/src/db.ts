import { Pool } from 'pg';

const connectionString = 'postgres://cfdszgnv:21XtUwPlkds1w3ASiwiNHnqAS9-o5n4q@motty.db.elephantsql.com/cfdszgnv';

const db = new Pool({ connectionString });

export default db;