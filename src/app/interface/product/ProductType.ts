export interface ProductType {
    id?: number,
    name: string,
    isActive: boolean
};

interface ProductSpecification {
    id: number,
    name: string
};

export interface ProductTypeWithProductSpecifications {
    id?: number,
    name: string,
    isActive: boolean,
    productSpecifications: ProductSpecification[]
};