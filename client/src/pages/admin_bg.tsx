import { FileUploader } from '../components/FileUploader';
import { useCategory } from '../hooks/useCategory';
import { useProduct } from '../hooks/useProduct';
import React, { useState, useRef, useEffect } from 'react';

const AdminPage = () => {
  const { category } = useCategory();
  const [index, setIndex] = useState(0);
  const { product, getProductByCategory2Id } = useProduct();
  const category2Ref = useRef(false);
  const [category2Id, setCategory2Id] = useState(0);

  const clickHandler = () => {
    getProductByCategory2Id(category2Ref.current.value)
    setCategory2Id(category2Ref.current.value)
    console.log(product)
  }
  

  return (
    <>
      <FileUploader />
      <select name="category1" onChange={(e) => setIndex(Number(e.target.value))}>
        {category.map((cat, idx) => (
          <option key={cat.id} value={idx}>
            {cat.name}
          </option>
        ))}
      </select>
      <select name="category2" ref={category2Ref}>
        {category[index].subCategory?.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <button onClick={() => clickHandler()}>검색</button>
    </>
  );
};

export default AdminPage;
