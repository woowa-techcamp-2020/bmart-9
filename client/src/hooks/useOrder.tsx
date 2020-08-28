import { useCreator } from '../utils/createContext';
import { OrderContexts } from '../context/OrderContext';
import { Order, CreateOrderBody, ClientCart } from '../../../shared';
import { useCart } from './useCart'
import { useSnackbar } from './useSnackbar'
import MOMENT from 'moment';
import API from '../api';

export const useOrder = () => {
  const [orderList, dispatch] = useCreator(OrderContexts);
  const { deleteAllCheck } = useCart();
  const { openSnackbar } = useSnackbar();

  const setOrderList = (orderList: Order[]) => {
    dispatch({ type: "SET_ORDER_LIST", newOrderList: orderList });
  }

  const createOrder = async (token: string, cartList: ClientCart[]) => {
    const checkedCartLiat = cartList.filter((cart) => cart.check && cart);

    const createOrderParams: CreateOrderBody = {
      createdAt: MOMENT(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      latitude: 37.5,
      longitude: 127.5,
      cartList: checkedCartLiat
    }

    const payloadOrder = await API.Order.create(token, createOrderParams);
    dispatch({ type: 'ADD_ORDER_TO_LIST', newOrder: payloadOrder });

    openSnackbar("success", `${checkedCartLiat[0].name}외 ${checkedCartLiat.length - 1}개 상품을 주문했습니다.`);

    deleteAllCheck(token);
  }

  return { orderList, dispatch, setOrderList, createOrder };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { order, doSomething };
};


