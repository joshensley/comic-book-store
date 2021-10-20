export interface ProductInventoryUnit {
    id?: number,
    inStock:boolean,
    createdAt: Date,
    updatedAt: Date,
    productId: number,
    productName: string,
    categoryType: string,
    productType: string
}