export type Favorite = {
  id: number;
  userId: number;
  productId: number;
};

export type FavoriteBody = {
  userId: number;
  productId: number;
};

export type FavoriteProductId = number;
