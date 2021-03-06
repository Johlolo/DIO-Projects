import mongoose from 'mongoose';
import { config } from '../config/Constants';

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            mongoose.connect(config.MONGO_CONNECTION);
            console.log('Database connected');
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}