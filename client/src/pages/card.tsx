import { Card } from "../components/Card";



const CounterPage = () => 
	{
		const data = [
		{id: 1, imgSrc: "https://www.virtualtechgurus.com/wp-content/uploads/2016/10/square-img-300x300.png", productData: { productName: "달걀", productDiscountRate:10, productBasePrice: 1000, productPrice:800}},
		{id: 2, imgSrc: "https://www.virtualtechgurus.com/wp-content/uploads/2016/10/square-img-300x300.png", productData: { productName: "사과", productDiscountRate:10, productBasePrice: 1000, productPrice:800}},
		{id: 3, imgSrc: "https://www.virtualtechgurus.com/wp-content/uploads/2016/10/square-img-300x300.png", productData: { productName: "과자", productDiscountRate:10, productBasePrice: 1000, productPrice:800}}
	]

		return(
			<>
		{data.map(product => <Card {...product}/>)}
		{/* <Card {...data}/> */}
			</>
		)
	}


export default CounterPage;
