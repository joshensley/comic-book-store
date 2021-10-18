import { ProductType } from "./ProductType";

interface ProductSpecificationValue {
    id?: number
    value: string,
    productSpecificationId: number,
    productId: number
}

export interface ProductSpecification {
    id?: number,
    name: string,
    productTypeId: number | undefined,
    productType: ProductType | undefined
}