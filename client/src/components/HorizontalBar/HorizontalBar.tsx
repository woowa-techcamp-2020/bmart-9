import React from 'react';
import * as S from './HorizontalBarStyle';

type Props = {
	start?:any;
	center?:any;
	end?:any;
}

const HorizontalBar: React.FC<Props> = ({start,center,end} : Props) => {
	console.log("start=",start,"center=",center,"end=",end);
	let startCol = "1fr";
	let centerCol = "1fr";
	let endCol = "1fr";
	if(start === undefined){
		startCol = "";
	}
	if(center === undefined){
		centerCol = "";
	}
	if(end === undefined){
		endCol = "";
	}
	return <S.Container isStart={startCol} isCenter={centerCol} isEnd={endCol}>
		{start !== undefined ? <S.Start>{start}</S.Start> : <></>}
		{center !== undefined ? <S.Center>{center}</S.Center> : <></> }
		{end !== undefined ? <S.End>{end}</S.End> : <></>}
	</S.Container>;
};

export default HorizontalBar;

