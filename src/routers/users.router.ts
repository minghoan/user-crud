import express, { Request, Response } from 'express';

const userRouter = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
	res.send('Hello, World!');
});

userRouter.post('/', (req, res) => {
	res.send('Hello, World!');
});

userRouter.put('/', (req, res) => {
	res.send('Hello, World!');
});

userRouter.delete('/', (req, res) => {
	res.send('Hello, World!');
});

export default userRouter;
