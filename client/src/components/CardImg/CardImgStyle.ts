import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  position: relative;
  display: inline-block;
  background-color: grey;
  width: 100%;
  height: 100%;
`

export const Img = styled.img`
  box-sizing: border-box;
  padding: 10px;
  width:100%;
`

export const HeartIcon = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 25px;
  right: 7px;
  bottom: 7px;
`