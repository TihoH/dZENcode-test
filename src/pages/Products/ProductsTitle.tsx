import React from 'react'
import clases from './products.module.css'

interface ProductsTitleProps {
    quantityProduct: number
}

export default function ProductsTitle({quantityProduct}:ProductsTitleProps) {
  return (
    <div className={clases.productsTitle}>
        <h2>Продукты / {quantityProduct}</h2>
    </div>
  )
}
