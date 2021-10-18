import { Product } from "../../product/Product";

export interface SearchProduct {
    productList: Product[],
    pageIndex: number,
    totalPages: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean
}