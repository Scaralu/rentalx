import { Request, Response, Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/categories', (request: Request, response: Response) => {
	const { name, description } = request.body;

	categoriesRepository.create({ name, description });

	return response.status(201).send();
});

categoriesRoutes.get('/categories', (request: Request, response: Response) => {
	const all = categoriesRepository.list();

	return response.status(200).json(all);
});

export { categoriesRoutes };
