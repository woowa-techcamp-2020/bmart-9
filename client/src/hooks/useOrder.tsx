import { useCreator } from '../utils/createContext';
import { OrderContexts } from '../context/OrderContext';
import { Order, CreateOrderBody, ClientCart } from '../../../shared';
import { useCart } from './useCart'
import API from '../api';

export const useOrder = () => {
  const [orderList, dispatch] = useCreator(OrderContexts);
  const { deleteAllCheck } = useCart();

  const setOrderList = (orderList: Order[]) => {
    dispatch({ type: "SET_ORDER_LIST", newOrderList: orderList });
  }

  const createOrder = async (token: string, cartList: ClientCart[]) => {
    const checkedCartLiat = cartList.filter((cart) => cart.check && cart);

    const createOrderParams: CreateOrderBody = {
      createdAt: '2020-08-27 21:08:00',
      latitude: 134,
      longitude: 25,
      cartList: checkedCartLiat
    }

    const payloadOrder = await API.Order.create(token, createOrderParams);
    dispatch({ type: 'ADD_ORDER_TO_LIST', newOrder: payloadOrder });

    deleteAllCheck(token);
  }

  // 주문 상세 내역에서 주문내역 볼때,
  // 상세 내역에 있는 item들은 context에 저장해두고 관리할 필요가있는가?
  // 누를때마다 api요청 보내서 가져와서 보여주고 끝나면 안됨?
  const getOrderProductList = async (token: string, cartList: ClientCart[]) => {
    
  }

  return { orderList, dispatch, setOrderList, createOrder };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { order, doSomething };
};


