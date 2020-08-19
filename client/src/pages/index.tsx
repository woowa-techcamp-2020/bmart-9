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
      <Link href="/admin">
        <a>go to admin</a>
      </Link>
    </>
  );
};

export default IndexPage;
