import { Router, Request, Response  } from 'express'

const routes = Router()
export const createRecharge = async (req: Request, res: Response) => {
	
};

routes.post('/recargas', createRecharge);

export default routes;