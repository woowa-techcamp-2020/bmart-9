import React from 'react';
import * as S from './IconButtonStyle';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  icon: IconDefinition;
  onClickHandler?: () => void;
};

const IconButton: React.FC<Props> = ({ icon, onClickHandler }: Props) => {
  return (
    <S.Container onClick={onClickHandler}>
      <FontAwesomeIcon icon={icon} />
    </S.Container>
  );
};

export default IconButton;
