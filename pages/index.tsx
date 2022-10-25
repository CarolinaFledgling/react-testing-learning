import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { getTitle } from "@/components/myMethods";

export default function Home() {
  const [count, setCount] = useState(0);

  const label = `Count: ${count}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{getTitle(true)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>{label}</div>
        <button onClick={() => setCount((value) => value + 1)}>Add</button>
        <button onClick={() => setCount((value) => value - 1)}>Remove</button>
      </div>
    </div>
  );
}
