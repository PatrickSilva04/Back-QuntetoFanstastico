import { Router } from 'express'
import { Request, Response } from 'express'
const router = Router()

export const registerUser = async (req: Request, res: Response) => {
    // Implement registration logic here
};

export const loginUser = async (req: Request, res: Response) => {
    // Implement login logic here
};

router.post('/usuarios', registerUser);
router.post('/login', loginUser);

export default router;
