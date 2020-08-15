import React from 'react';
import * as S from './HorizontalBarStyle';

type Props = {
	start?:any;
	center?:any;
	end?:any;
}

const HorizontalBar: React.FC<Props> = ({start,center,end} : Props) => {
	return <S.Container isStart={start ? "1fr":""} isCenter={center ? "1fr":""} isEnd={end ? "1fr":""}>
		{start !== undefined && <S.Start>{start}</S.Start>}
		{center !== undefined && <S.Center>{center}</S.Center>}
		{end !== undefined && <S.End>{end}</S.End>}
	</S.Container>;
};

export default HorizontalBar;

