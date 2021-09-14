import { Router, Request, Response } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications';

const specificationsRouter = Router();

specificationsRouter.post('/', (request: Request, response: Response) =>
	createSpecificationController.handle(request, response)
);

specificationsRouter.get('/', (request: Request, response: Response) =>
	listSpecificationsController.handle(request, response)
);

export { specificationsRouter };
