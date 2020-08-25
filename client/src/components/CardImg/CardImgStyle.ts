import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  position: relative;
  background-color: #FFFFFFFF;
  width: 100%;
`

export const Img = styled.img`
  width:140px;
  height:140px;
  /* border-radius:5px; */
  /* box-shadow: 0.5px 0.5px 3px grey; */
`

export const ImgWrapper = styled.div`
  padding: 5px;
  width: 100%;
`

export type likeProps = {
  like: string;
}

export const HeartIcon = styled(FontAwesomeIcon)<likeProps>`
  color: ${(props) => props.like};
  background-color: #d1d1d1;
  height: 24px;
  border-radius: 50%;
  padding:5px;
  position: absolute;
  font-size: 25px;
  top: 10px;
  left: 10px;
  opacity:0.8;
`

export const ShoppingBagIcon = styled(FontAwesomeIcon)`
  color: grey;
  background-color: #FFFFFFFF;
  height: 25px;
  border-radius: 50%;
  padding:5px;
  position: absolute;
  font-size: 29px;
  bottom: 10px;
  left: 10px;
  opacity: 0.8;
`

export const IQ = styled.div`
  color: black;
  background-color: #FFFFFFFF;
  line-height: 20px;
  border-radius: 10px;
  font-weight: bold;
  padding:3px;
  position: absolute;
  font-size: 13px;
  top: 10px;
  right: 10px;
  z-index: 1;
  box-sizing: border-box;
  text-align: right;
  vertical-align: middle;
  opacity:0.8;
  & ::after {
    content: 'IQ';
    color: grey;
    margin-left:2px;
  }
`