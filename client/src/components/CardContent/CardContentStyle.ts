import styled from 'styled-components';

export const Container = styled.div`
  background-color: grey;
  line-height: 40px;
  margin: 3px 3px 0 3px;
  position: relative;
  border-radius: 5px;
`

export const ProductName = styled.div`
  padding: 3px 5px;
  font-size: 15px;
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