import { FileUploader } from '../components/FileUploader';
import { useCategory } from '../hooks/useCategory';
import React, { useState, useEffect } from 'react';
import { useProduct } from '../hooks/useProduct';
import { CartItem } from '../components/CartItem';
import Link from 'next/link';

const AdminPage = () => {
  const { category } = useCategory();
  const { products, setProductByCategory2_id } = useProduct();
  const [index, setIndex] = useState(0);
  const [cate2Id, setCate2Id] = useState(-1);

  useEffect(() => {
    if (cate2Id !== -1) {
      setProductByCategory2_id(cate2Id);
    }
  }, [cate2Id]);

  useEffect(() => {
    if (category) {
      const currentFirstSubCategoryId = category[index].subCategory![0].id;
      setCate2Id(currentFirstSubCategoryId);
    }
  }, [category, index]);

  return (
    <>
      <Link href="/">
        <a>go to card</a>
      </Link>
      <FileUploader />
      <select name="cate1" onChange={(e) => setIndex(Number(e.target.value))}>
        {category &&
          category.map((cate, idx) => (
            <option key={cate.id} value={idx}>
              {cate.name}
            </option>
          ))}
      </select>
      <select name="cate2" onChange={(e) => setCate2Id(+e.target.value)}>
        {category &&
          category[index].subCategory?.map((cate) => (
            <option key={cate.id} value={cate.id}>
              {cate.name}
            </option>
          ))}
      </select>
      <div>
        {/* {products &&
          products.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              // checked={false}
              name={product.name}
              image={`http://${product.image}`}
              discount={product.discount}
              price={product.price}
              basePrice={product.basePrice}
            ></CartItem>
          ))} */}
      </div>
    </>
  );
};

export default AdminPage;

// import React, { useEffect, useState } from 'react';
// import { Header } from '../../components/Header';
// import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
// import API, { baseURL } from '../../api';
// import { getToken } from '../../utils/cookieParser';
// import { getSocket } from '../../utils/socket';
// import { useUser } from '../../hooks/useUser';
// import { SocketMessage, Order } from '../../../../shared';
// import { OrderItem } from '../../components/OrderItem';

// const orders: Order[] = [
//   {
//     id: 55,
//     userId: 2,
//     userName: 'andy',
//     orderId: 70,
//     orderName:
//       '메디힐 콜라겐 임팩트 에센셜 슈퍼 파워 레인져 블라디보스톡 마스크 EX ENS EKWNQ DNFSP BSDO 1매 외 4개',
//     totalPrice: 75000,
//     status: 'requested',
//     createdAt: new Date().toString(),
//   },
//   {
//     id: 57,
//     userId: 2,
//     userName: 'andy',
//     orderId: 77,
//     orderName: '비둘기 고기 50g 외 7개',
//     totalPrice: 1234000,
//     status: 'dispatched',
//     createdAt: new Date().toString(),
//   },
//   {
//     id: 59,
//     userId: 2,
//     userName: 'andy',
//     orderId: 79,
//     orderName: '맛있는 개구리반찬 - 저글링용 외 1개',
//     totalPrice: 5000,
//     status: 'delivered',
//     createdAt: new Date().toString(),
//   },
// ];

// const AdminPage = ({
//   searchedHistory,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   const { user, notAdminHandler } = useUser();

//   useEffect(() => {
//     notAdminHandler();
//   }, []);

//   const onSendMessage = () => {
//     if (user) {
//       const socket = getSocket(user.id);
//       const message: SocketMessage = {
//         userId: user.id,
//         message: '상품이 발송되었습니다',
//         receiverId: 2,
//       };
//       socket.emit('ADMIN_SEND_MESSAGE', message);
//     }
//   };
//   return (
//     <>
//       <Header title={'관리자'} />
//       {orders.map((order) => (
//         <OrderItem key={order.id} order={order} />
//       ))}
//       <button onClick={onSendMessage}>상품발송하기</button>
//     </>
//   );
// };

// export const getServerSideProps = async ({
//   req,
// }: GetServerSidePropsContext) => {
//   const token = getToken(req.headers.cookie);
//   // const searchedHistory = token ? await API.Search.getAll(token as string) : [];
//   return {
//     props: {
//       searchedHistory: [],
//     },
//   };
// };

// export default AdminPage;
