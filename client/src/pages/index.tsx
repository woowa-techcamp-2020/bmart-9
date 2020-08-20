import React from 'react';
import Link from 'next/link';
import { useCategory } from '../hooks/useCategory';

const IndexPage = () => {
  useCategory(true);
  return (
    <>
      <h1> helle bmart - 9</h1>
      <Link href="/counter">
        <a>go to counter</a>
      </Link>
      <br />
      <Link href="/card">
        <a>go to card</a>
      </Link>
      <br />
      <Link href="/admin_cn">
        <a>go to 이찬호</a>
      </Link>
      <br />
      <Link href="/admin_bg">
        <a>go to admin bongeun</a>
      </Link>
      <br />
      <Link href="/admin_andy">
        <a>go to admin andy</a>
      </Link>
      <br />
      <br />
      <Link href="/cartPage">
        <a>장백우니</a>
      </Link>
    </>
  );
};

export default IndexPage;
