import { FileUploader } from '../components/FileUploader';
import { useCategory } from '../hooks/useCategory';
import React, { useState, useEffect } from 'react';
import { useProduct } from '../hooks/useProduct';
import { CartItem } from '../components/CartItem';

const AdminPage = () => {
  const { category } = useCategory();
  const { products, setProductByCategory2_id } = useProduct();
  const [index, setIndex] = useState(0);
  const [cate2Id, setCate2Id] = useState(0);
  console.log(category)

  const setCategory = (index: number) => {
    setIndex(index);
    setCate2Id(category[index].subCategory![0].id);
    setProduct(cate2Id);
  };

  const setProduct = async (category2_id: string | number) => {
    setCate2Id(+category2_id);
    console.log('curr category2_id=', cate2Id);
    if (cate2Id === 0) {
      console.log('초기데이터 필요없어', cate2Id);
      return;
    }
    await setProductByCategory2_id(cate2Id);
  };

  return (
    <>
      <FileUploader />
      <select
        name="cate1"
        onChange={(e) => setCategory(Number(e.target.value))}
      >
        {category.map((cate, idx) => (
          <option key={cate.id} value={idx}>
            {cate.name}
          </option>
        ))}
      </select>
      <select name="cate2" onChange={(e) => setProduct(e.target.value)}>
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
