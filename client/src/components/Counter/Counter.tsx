import React, { useState } from "react";
import * as S from "./styled";

export const Counter: React.FC = () => {
	const [counter, setCounter] = useState<number>(0);

	const onClickHandler = (amount: number) => {
		setCounter(counter + amount);
	};

	return (
		<React.Fragment>
			<S.Button onClick={() => onClickHandler(-1)} color={"red"}>
				-
			</S.Button>
			<S.CounterText count={counter}>{counter}</S.CounterText>
			<S.Button onClick={() => onClickHandler(+1)} color={"blue"}>
				+
			</S.Button>
		</React.Fragment>
	);
};
