import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div>
      <h1 className={styles.title}>Welcome to docs!</h1>
      <Image src="/nextjs.svg" alt="Next.js Logo" width={200} height={200} />
      <button>Click me</button> 
   </div>
  );
}
