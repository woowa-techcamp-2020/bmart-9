import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ccc;
  /* display:inline-block; */
  /* box-sizing:border-box; */
  /* width: 100%; */
  height: 40px;
  /* height: 40px; */
  /* height: 30%; */
  position: relative;
`

export const ProductName = styled.div`
  padding: 3px 5px;
  font-size: 13px;
`

export const PriceContainer = styled.div`
  position: absolute;
  padding: 3px 5px;
  font-size: 13px;
  top:20px;
`

export const ProductDiscountRate = styled.span`
  color: red;
  font-weight: bold;
`

export const ProductBasePrice = styled.span`
  color:grey;
  text-decoration: line-through;
`

export const ProductPrice = styled.span`
  padding-left: 5px;
  font-weight:bold;
`

export const CartIcon = styled.div``