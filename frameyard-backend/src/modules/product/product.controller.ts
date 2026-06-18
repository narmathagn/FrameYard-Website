import { Request, Response } from "express";
import { createProduct, createVariant, deleteVariant, getAllProducts, getProductById, updateProduct, updateVariant } from "./product.service";

interface ProductParams {
  productId: string;
}
interface ProductIdParams {
  id: string;
}

interface VariantParams {
  variantId: string;
}

export const fetchProducts = async (
  req: Request,
  res: Response
) => {

  const result =
    await getAllProducts();

  return res.status(200).json(result);
};

export const fetchProductById = async (
  req: Request<ProductIdParams>,
  res: Response
) => {

  const result =
    await getProductById(req.params.id);

  return res.status(200).json(result);
};

export const editProduct = async (
  req: Request,
  res: Response
) => {
const productId = String(req.params.id);
  const result =
    await updateProduct(
    productId,
      req.body
    );

  return res.status(200).json(result);
};

export const editVariant = async (
  req: Request,
  res: Response
) => {

  const variantId = String(req.params.variantId);
  const result =
    await updateVariant(
      variantId,
      req.body
    );

  return res.status(200).json(result);
};

export const removeVariant = async (
  req: Request,
  res: Response
) => {
 const variantId = String(req.params.variantId);
  const result =
    await deleteVariant(
      variantId
    );

  return res.status(200).json(result);
};

export const addProduct = async (
  req: Request,
  res: Response
) => {

  const result =
    await createProduct(req.body);
  return res.status(200).json(result);
};

export const addVariant = async (
  req: Request,
  res: Response
) => {

 const productId = String(req.params.productId);

const result = await createVariant(
  productId,
  req.body
);
  return res.status(200).json(result);
};