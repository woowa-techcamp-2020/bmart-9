import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	margin: 20px;
`;

type ButtonProps = {
	color: string;
};

export const Button = styled.div<ButtonProps>`
	background: ${(props) => props.color};
	color: white;
	width: 20px;
	text-align: center;
`;

type TextProps = {
	count: number;
};

export const CounterText = styled.div<TextProps>`
	color: rgba(0, 0, 0, ${(props) => 1 - props.count * 0.05});
`;
