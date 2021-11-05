export interface CartDatabaseModel {
    id?: number,
    quantity: number,
    applicationUserId: string
    productId: number
}