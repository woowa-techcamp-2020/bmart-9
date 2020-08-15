import { HorizontalCardSet } from "../components/HorizontalCardSet";
import { CardProps } from './../components/Card/Card'

const data : CardProps[] = [
	{id: 1, imgSrc: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png", productData: { productName: "저글링", productDiscountRate:99, productBasePrice: 1000, productPrice:10}},
	{id: 2, imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61aOa%2B4v4IL._AC_SL1240_.jpg", productData: { productName: "골리앗", productDiscountRate:99, productBasePrice: 1000, productPrice:10}},
	{id: 3, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "혼욱스", productDiscountRate:50, productBasePrice: 2000, productPrice:1000}},
	{id: 4, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "클옹", productDiscountRate:50, productBasePrice: 2000, productPrice:1000}},
	{id: 5, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "코이라멘 마제소바", productDiscountRate:0, productBasePrice: 9000, productPrice:9000}},
	{id: 6, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "장해민", productDiscountRate:10, productBasePrice: 1000, productPrice:900}},
	{id: 7, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "김한", productDiscountRate:0, productBasePrice: 0, productPrice:0}},
]

const CardPage = () => {
		return(
			<>
				<HorizontalCardSet data={data}/>
			</>
		)
	}


export default CardPage;
