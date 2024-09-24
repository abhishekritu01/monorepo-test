import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl">Welcome to blogapp!</h1>
      <Image src="/nextjs.svg" alt="Next.js Logo" width={200} height={200} />
      <button>Click me</button>
    </div>
  );
}
