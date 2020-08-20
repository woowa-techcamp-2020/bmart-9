export type Cart = {
	id: number;
	userId: number;
	quantity: number;
	checked: number;
	createdAt: string;
	updatedAt: string;
	productId: number;
	name: string;
	image: string;
	basePrice: number;
	discount: number;
	price: number;
	stock: number;
};