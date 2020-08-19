import { Request, Response } from 'express';
import { Product } from '../../../shared';
import { ProductRepo } from '../repository/product-repository';
import { ProductDto } from "../dto/product-dto";
import { InvalidParamsError } from '../errors/invalid-params';

export const createProduct = async (req: Request, res: Response) => {
  const productDto = new ProductDto(req.body);

  const newProductId = await ProductRepo.create(productDto);

  // error 처리 해야함 

  const newProduct = await ProductRepo.findOne(newProductId);

  res.json(newProduct);
};

export const getAllProduct = async (req: Request, res: Response) => {
  const productList = await ProductRepo.findAll();
  res.json(productList);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await ProductRepo.findOne(Number(req.params.id));
  if (product.length === 0) {
    res.json(`id [${req.params.id}]는 존재하지 않는 상품입니다.`);
    return;
  }
  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const productDto = new ProductDto(req.body);

  const updatedRows = await ProductRepo.update(productDto);

  // error 처리 해야함 

  const updatedProduct = await ProductRepo.findOne(productDto.getId());

  res.json(updatedProduct);
}

export const getProductByCategory2Id = async (req: Request, res: Response) => {
  const id = Number(req.params.category2_id);
  if (typeof id !== 'number' || id <= 0) {
    throw new InvalidParamsError('category2_id');
  }

  const products = await ProductRepo.selectProductByCategory2Id(id);

  res.json(products);
};
