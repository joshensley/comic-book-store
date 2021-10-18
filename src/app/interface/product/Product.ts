
interface ProductSpecificationNameValue {
    productSpecificationValueID: number,
    productID: number,
    productSpecificationID: number,
    name: string,
    value: string
};

export interface Product {
    id?: number,
    name: string,
    description: string,
    regularPrice: number,
    discountPrice: number,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
    categoryType: string,
    categoryTypeId: number,
    productType: string,
    productTypeId: number,
    productSpecificationNameValues: ProductSpecificationNameValue[]
};