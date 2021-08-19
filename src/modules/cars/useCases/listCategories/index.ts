import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './LIstCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
	listCategoriesUseCase
);

export { listCategoriesController };
