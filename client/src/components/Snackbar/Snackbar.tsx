import React from 'react';
import * as S from './SnackbarStyle';
import { useSnackbar } from '../../hooks/useSnackbar'

const Snackbar: React.FC = () => {
	const { state, clearSnackbar } = useSnackbar();
	return <S.Container className={`${state.snackbarClass} ${state.open ? 'active' : ''}`}>
		<S.Message>{state.message}</S.Message>
		<S.Button onClick={() => clearSnackbar()}>닫기</S.Button>
	</S.Container>;
};

export default Snackbar;

