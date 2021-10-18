export interface ProductImage {
    id: number,
    imageTitle: string,
    authorizedImageURL: string,
    alternateText: string,
    createdAt: Date,
    updatedAt: Date,
    productId: number,
    productName: string,
    fileUpload: FormData
}