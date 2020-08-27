import React, { useState } from 'react';
import Link from 'next/link';
import * as S from './HeaderStyle';
import { HorizontalBar } from '../HorizontalBar';
import { useRouter } from 'next/router';
import { SideMenu } from '../SideMenu';
import { SearchBar } from '../SearchBar';
import { Images } from '../../images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '../IconButton';
import { useUser } from '../../hooks/useUser';

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title }: Props) => {
  const { pathname, back } = useRouter();
  const inputVisiblePath = new Set(['/', '/search']);
  const [open, setOpen] = useState(false);
  const { isAmdin } = useUser();
  const toggleOpen = () => setOpen(!open);

  return (
    <S.Container>
      <SideMenu open={open} toggleOpen={toggleOpen} />
      <HorizontalBar
        start={
          pathname !== '/' ? (
            <IconButton icon={faArrowLeft} onClickHandler={() => back()} />
          ) : isAmdin ? (
            <Link href="/admin">
              <a>어듬인</a>
            </Link>
          ) : (
            ' '
          )
        }
        center={
          title ? (
            <S.Title>{title}</S.Title>
          ) : (
            <Link href="/">
              <S.Image height="30px" src={Images.MAIN_LOGO} />
            </Link>
          )
        }
        end={<IconButton icon={faBars} onClickHandler={toggleOpen} />}
      />
      {inputVisiblePath.has(pathname) && <SearchBar />}
      {/* {title && <HorizontalBar center={<S.Title>{title}</S.Title>} />} */}
    </S.Container>
  );
};

export default Header;
