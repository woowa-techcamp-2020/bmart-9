import { Request, Response } from 'express';
import { Product } from "../repository/product-repository";
import { ProductDto } from "../dto/product-dto";

declare global {
  namespace Express {
    interface Request {}
  }
}

export const createProduct = async (req: Request, res: Response) => {
  const productDto = new ProductDto(req.body);

  const [newProductId,_] = await Product.create(productDto);

  // error 처리 해야함 

  const newProduct = await Product.findOne(newProductId);

  res.json(newProduct);
};

export const getAllProduct = async (req: Request, res: Response) => {
  const productList = await Product.findAll();
  res.json(productList);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findOne(Number(req.params.id));
  if(product.length === 0){
    res.json(`id [${req.params.id}]는 존재하지 않는 상품입니다.`);
    return;  
  }
  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const productDto = new ProductDto(req.body);

  const [updatedRows, updateError] = await Product.update(productDto);

  // error 처리 해야함 

	const updatedProduct = await Product.findOne(productDto.getId());

	res.json(updatedProduct);
}
