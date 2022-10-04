import { Schema, model } from 'mongoose';

const Pet = new Schema({
	name: String,
	race: String,
	breed: String
});

export default model('Pet', Pet);