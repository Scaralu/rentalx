class ImportCategoriesUseCase {
	execute(file: Express.Multer.File): void {
		console.log(file);
	}
}

export { ImportCategoriesUseCase };