import { HorizontalBar } from "../components/HorizontalBar";
import {Counter} from '../components/Counter/Counter';
import {Button} from '../components/Button';

const HorizontalPage = () => (
	

	<>
		{/* <HorizontalBar start={"hello"} center={5} end={<Counter/>}/> */}
		<HorizontalBar start={["hello","50%",30000]} center={"sdfdsf"} end={"end"}/>
		<HorizontalBar start={"start"} end={<Button text="테스트버튼"></Button>}/>
		<HorizontalBar start={"start"} end={"end"}/>
	</>
);

export default HorizontalPage;
