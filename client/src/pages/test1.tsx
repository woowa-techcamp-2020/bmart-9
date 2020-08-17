import { HorizontalBar } from "../components/HorizontalBar";
import {Counter} from '../components/Counter/Counter';
import {Button} from '../components/Button';
import {CartItem} from "../components/CartItem"
import {$str} from "../utils/localization";
	
type Item = {
	id:number;
	checked:boolean;
	name:string;
	img:string;
	base_price:number;
	discount:number;
	price:number;
}



const cartItem:Item[] = [
	{
		id:1,
		checked:true,
		name: "귀여운 비둘기 300g",
		img:"https://i.imgur.com/KLnzGrk.png",
		base_price:3000,
		discount: 30,
		price: 2100,
	},
	{
		id:2,
		checked:false,
		name: "볼빵빵 참새 150g",
		img:"https://i.imgur.com/FrBKe9W.png",
		base_price: 50000,
		discount: 20,
		price: 40000,
	},
	{
		id:3,
		checked:true,
		name: "아이폰 XS Pro",
		img:"https://i.imgur.com/0vGb1eJ.png",
		base_price: 1200000,
		discount: 10,
		price: 1180000,
	},
];

const HorizontalPage = () => (
	<>
	
		<HorizontalBar start={["hello","50%",30000]} center={"sdfdsf"} end={"end"}/>
		<HorizontalBar start={"start"} end={<Button text={$str("뒤로가기")}></Button>}/>
		<HorizontalBar start={"start"} end={"end"}/>
		<br>
		</br>
		{cartItem.map( (item:Item) => {
			return <CartItem key={item.id} id={item.id} checked={item.checked} name={item.name} img={item.img} discount={item.discount} price={item.price} base_price={item.base_price}></CartItem>
		})}
	</>
);

export default HorizontalPage;
