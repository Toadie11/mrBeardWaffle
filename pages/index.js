import Image from "next/image";
import { Inter } from "next/font/google";
import Part2 from "../components/part2";
import Part1 from "../components/part1";
import Part3 from "@/components/part3";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Vollkorn:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
}
