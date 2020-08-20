import React from 'react';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <>
      <h1> helle bmart - 9</h1>
      <Link href="/counter">
        <a>go to counter</a>
      </Link>
      <br />
      <Link href="/main">
        <a>go to main</a>
      </Link>
      <br />
      <Link href="/card">
        <a>go to card</a>
      </Link>
      <br />
      <Link href="/admin_chano">
        <a>go to cnAdmin</a>
      </Link>
      <Link href="/admin_bg">
        <a>go to admin bongeun</a>
      </Link>
      <Link href="/admin_andy">
        <a>go to admin andy</a>
      </Link>
    </>
  );
};

export default IndexPage;
