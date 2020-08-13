import React from "react";
import Link from "next/link";

const IndexPage = () => (
	<>
		<h1> helle bmart - 9</h1>
		<Link href="/counter">
			<a>go to counter</a>
		</Link>
		<br/>
		<Link href="/card">
			<a>go to card</a>
		</Link>
	</>
);

export default IndexPage;
