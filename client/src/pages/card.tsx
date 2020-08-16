import { HorizontalCardSet } from "../components/HorizontalCardSet";
import { Carousel } from './../components/Carousel/'
import { CardProps } from './../components/Card/Card'

const data : CardProps[] = [
	{id: 1, imgSrc: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png", productData: { productName: "초보탈출 리액트", productDiscountRate:99, productBasePrice: 1000, productPrice:80}},
	{id: 2, imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61aOa%2B4v4IL._AC_SL1240_.jpg", productData: { productName: "맥 딜리버리", productDiscountRate:99, productBasePrice: 1000, productPrice:110}},
	{id: 3, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:50, productBasePrice: 2000, productPrice:130}},
	{id: 4, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:50, productBasePrice: 2000, productPrice:1000}},
	{id: 5, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:0, productBasePrice: 9000, productPrice:9000}},
	{id: 6, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:10, productBasePrice: 1000, productPrice:900}},
	{id: 7, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:0, productBasePrice: 0, productPrice:0}},
]

const CardPage = () => {
		return(
			<>
				<Carousel/>
				<HorizontalCardSet data={data}/>
			</>
		)
	}


export default CardPage;
