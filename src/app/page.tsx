import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" height={40} width={60} alt="Logo"/>
      <p className="text-xl font-semibold tracking-tighter">NewTube</p>
    </div>
  );
}
