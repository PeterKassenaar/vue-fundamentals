// productService.ts - test
// NOT WORKING YET
export interface Product {
    id: number;
    name: string;
}

export class ProductService {
    private products: Product[] = [
        {id: 1, name: 'Washing Machine'},
        {id: 2, name: 'Hair Dryer'},
        {id: 3, name: 'Kitchen Machine'},
        {id: 4, name: 'Loudspeaker boxes'}
    ];

    // 'API' for this service

    getProducts(): Product[] {
        return this.products;
    };

    addProduct(product: Product) {
        this.products.push(product);
    }
}
