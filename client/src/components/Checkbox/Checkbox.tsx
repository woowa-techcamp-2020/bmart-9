import React, { useState, useEffect } from 'react';
import * as S from './CheckboxStyle';
import { useCart } from "../../hooks/useCart";

type Props = {
	checkboxId: number;
	isCheck: number;
	contents: string;
}

const Checkbox: React.FC<Props> = ({ checkboxId, isCheck, contents }: Props) => {

	const [tempCheck, setTempCheck] = useState<number>(isCheck);
	const { updateCartCheck } = useCart();

	useEffect(() => {
		updateCartCheck(checkboxId, tempCheck);
	}, [tempCheck]);

	return <S.ContainerLabel htmlFor={'cartCheckbox' + checkboxId}>
		<S.Checkbox
			id={'cartCheckbox' + checkboxId}
			type="checkbox"
			checked={isCheck === 1}
			onChange={() => tempCheck === 1 ? setTempCheck(0) : setTempCheck(1)}
		></S.Checkbox>
		<S.CheckboxMark></S.CheckboxMark>
		<S.CheckboxContents>{contents}</S.CheckboxContents>
	</S.ContainerLabel>;
};

export default Checkbox;

