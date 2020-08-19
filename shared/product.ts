export type Product = {
	id: number;
	name: string;
	image: string;
	price: number;
	discount: number;
	basePrice: number;
	category2Id: number;
	stock: number;
};

export type CreateProductBody = {
	name: string;
	image: string;
	price: number;
	basePrice?: number;
	discount?: number;
	createdAt?: string;
	updatedAt?: string;
	category2Id: number;
	stock: number;
};
