import { Router, Request, Response } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRouter = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRouter.post('/', (request: Request, response: Response) => {
	const { name, description } = request.body;

	const createSpecificationService = new CreateSpecificationService(
		specificationsRepository
	);

	createSpecificationService.execute({ name, description });

	return response.status(201).send();
});

// specificationsRouter.get('/', (request: Request, response: Response) =>
// 	listSpecificationsController.handle(request, response)
// );

export { specificationsRouter };
