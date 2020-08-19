import { FileUploader } from '../components/FileUploader';
import { useCategory } from '../hooks/useCategory';
import React, { useState, useEffect } from 'react';
import { useProduct } from '../hooks/useProduct';
import { CartItem } from '../components/CartItem';

const AdminPage = () => {
  const { category } = useCategory();
  const { products, setProductByCategory2_id } = useProduct();
  const [index, setIndex] = useState(0);
  const [cate2Id, setCate2Id] = useState(
    category[index].subCategory![0].id || -1
  );

  useEffect(() => {
    if (cate2Id !== -1) {
      setProductByCategory2_id(cate2Id);
    }
  }, [cate2Id]);

  useEffect(() => {
    const currentFirstSubCategoryId = category[index].subCategory![0].id;
    setCate2Id(currentFirstSubCategoryId);
  }, [index]);

  return (
    <>
      <FileUploader />
      <select name="cate1" onChange={(e) => setIndex(Number(e.target.value))}>
        {category.map((cate, idx) => (
          <option key={cate.id} value={idx}>
            {cate.name}
          </option>
        ))}
      </select>
      <select name="cate2" onChange={(e) => setCate2Id(+e.target.value)}>
        {category[index].subCategory?.map((cate) => (
          <option key={cate.id} value={cate.id}>
            {cate.name}
          </option>
        ))}
      </select>
      <div>
        {products.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            checked={false}
            name={product.name}
            img={`http://${product.image}`}
            discount={product.discount}
            price={product.price}
            base_price={product.basePrice}
          ></CartItem>
        ))}
      </div>
    </>
  );
};

export default AdminPage;
