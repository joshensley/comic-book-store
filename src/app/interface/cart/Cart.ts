export interface Cart {
    id?: number,
    quantity: number,
    applicationUserID: string,
    productID: number,
    productName: string,
    price: number,
    totalPrice: number,
    productTypeName: string,
    imageTitle: string,
    imageUrl: string
};