import React, { useState } from 'react'
function ProductListTH3() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Products 1', price: 10 },
        { id: 2, name: 'Products 2', price: 11 },
        { id: 3, name: 'Products 3', price: 13 },
    ]);
    console.log({ products });
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name}-${product.price}
                </li>
            ))}
        </ul>
    );
}

export default ProductListTH3