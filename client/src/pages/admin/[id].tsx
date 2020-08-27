import React, { useEffect } from 'react';
import API from '../../api';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { Header } from '../../components/Header';
import { OrderMap } from '../../components/OrderMap';
import { MainContainer } from '../../components/MainContainer';
import { HorizontalBar } from '../../components/HorizontalBar';
import { useUser } from '../../hooks/useUser';
import { getSocket } from '../../utils/socket';
import { SocketMessage } from '../../../../shared';
import { BoxButton } from '../../components/BoxButton';
import { useMap } from '../../hooks/useMap';
import { useRouter } from 'next/router';
import { useSnackbar } from '../../hooks/useSnackbar';
import { OrderedProducts } from '../../components/OrderedProducts';

const COMPANY_LATITUDE = 37.516675;
const COMPANY_LONGITUDE = 127.113063;

const AdminOrderDetailPage = ({
  orderInfo,
  orderedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!orderInfo || !orderedProducts) {
    return null;
  }

  const { user, notAdminHandler } = useUser();
  const { moveTo } = useMap();
  const { openSnackbar } = useSnackbar();
  const { back } = useRouter();
  useEffect(() => {
    notAdminHandler();
  }, []);

  const dispatchOrder = async () => {
    if (user) {
      const socket = getSocket(user.id);
      const message: SocketMessage = {
        userId: user.id,
        message: `${orderInfo.id}/상품이 발송되었습니다/${orderInfo.latitude}/${orderInfo.longitude}`,
        receiverId: orderInfo.userId,
      };

      await API.Order.updateStatus(user.token, {
        id: orderInfo.id,
        status: 'dispatched',
      });
      socket.emit('ADMIN_SEND_MESSAGE', message);
      setTimeout(
        () =>
          moveTo({
            latitude: orderInfo.latitude,
            longitude: orderInfo.longitude,
          }),
        2000
      );
      setTimeout(async () => {
        await API.Order.updateStatus(user.token, {
          id: orderInfo.id,
          status: 'delivered',
        });
        openSnackbar('success', '상품이 목적지에 도착헀습니다.');
        back();
      }, 12000);
    }
  };

  const date = new Date(orderInfo.createdAt);

  return (
    <>
      <Header title={'주문정보'} />
      <MainContainer>
        <HorizontalBar
          start={orderInfo.userName + '님의 주문'}
          center={' '}
          end={date.getMonth() + '/' + date.getDate()}
        />
      </MainContainer>
      <OrderMap
        latitude={COMPANY_LATITUDE}
        longitude={COMPANY_LONGITUDE}
        destination={{
          latitude: orderInfo.latitude,
          longitude: orderInfo.longitude,
        }}
      />
      <HorizontalBar start={'상세 주문 내역'} />
      <OrderedProducts orderedProducts={orderedProducts} />
      {orderInfo.status === 'requested' && (
        <BoxButton
          onClickHandler={dispatchOrder}
          title={'발송하기'}
          width={'90%'}
        />
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const orderInfo = await API.Order.getOne(Number(params!.id));
  const orderedProducts = await API.Order.getOrderProductByOrderId(
    Number(params!.id)
  );
  return {
    props: { orderInfo, orderedProducts },
  };
};

export default AdminOrderDetailPage;
