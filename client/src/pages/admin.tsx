import { FileUploader } from '../components/FileUploader';
import { useCategory } from '../hooks/useCategory';
import React, { useState } from 'react';

const AdminPage = () => {
  const { category } = useCategory();
  const [index, setIndex] = useState(0);
  const [cate2Id, setCate2Id] = useState(0);
  console.log(cate2Id);

  return (
    <>
      <FileUploader />
      <select name="cate1" onChange={(e) => setIndex(+e.target.value)}>
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
    </>
  );
};

export default AdminPage;
