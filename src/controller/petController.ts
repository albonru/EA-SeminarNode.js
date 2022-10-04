import Pet from '../model/Pet';
import { Request, Response } from 'express';

const register = async (req: Request, res: Response) => {
    const name = req.body.name;
    const race = req.body.race;
    const breed = req.body.breed;
    const newPet = new breed({ name, race, breed });
    await newPet.save();
    res.status(200).json();
};

const getall = async (req: Request, res: Response) => {
	const users = await Pet.find();
	res.json(users);
};

const getone = async (req: Request, res: Response) => {
	const user = await Pet.findById(req.params.id);
	res.json(user);
};

export default {
    register,
    getall,
    getone
};