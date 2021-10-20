import { ProductInventoryUnit } from "./ProductInventoryUnit";

export interface SearchProductInventoryUnit {
    productInventoryUnitList: ProductInventoryUnit[],
    pageIndex: number,
    totalPages: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean
};