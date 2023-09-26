import React from "react";

interface IProductCardProps {
  title: string;
  description: string;
  price?: number;
  imageUrl?: string;
  productCardClass?: string;
  productContainerClass?: string;
  productImageClass?: string;
  productTitleClass?: string;
  productDescripionClass?: string;
  productPriceClass?: string;
}

const ProductCard = ({
  description,
  imageUrl,
  price,
  title,
  productCardClass,
  productImageClass,
  productTitleClass,
  productDescripionClass,
  productPriceClass,
  productContainerClass
} : IProductCardProps) => {
  return (
    <div className={productCardClass}>
      <img src={imageUrl} alt={title} className={productImageClass} />
      <div className={productContainerClass}>
        <h2 className={productTitleClass}>{title}</h2>
        <p className={productDescripionClass}>{description}</p>
        <p className={productPriceClass}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;