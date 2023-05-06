import Container from "@/components/general/Container";
import { Roboto_Slab } from "next/font/google";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";
import HeroSlider from "@/components/Slider";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

async function getMetadata() {
  const res = await fetch("http://localhost:3000/api/pages/index/metadata", { cache: "no-cache" });
  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata();
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image]
    },
  };
}

export default function Home() {
  return (
    <Container>
      <header
        className={`flex flex-col-reverse pt-20 text-gray-500 ${robotoSlab.className} gap-5 border-b-2 border-gray-300 pb-10 mb-5`}
      >
        <div className=" flex flex-col justify-center">
          <h1 className="text-slate-600 font-medium text-4xl my-0 ">Page Title</h1>
          <p className="text-slate-400 text-xl uppercase my-3">Page subtitle</p>
          <p className={`${inter.className}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quis minus doloribus quia pariatur iste
            aliquam inventore repudiandae deleniti a!
          </p>
          <Link
            href="#"
            className="border-solid border-2 rounded-md border-blue-300 text-blue-300 mt-5 px-4 py-2 w-max hover:bg-blue-300 hover:text-white transition-colors duration-300 ease-in-out"
          >
            Ver Mas
          </Link>
        </div>
        <div>
          <HeroSlider
            images={[
              "https://images.unsplash.com/photo-1485216983937-749292830fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80",
              "https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
              "https://images.unsplash.com/photo-1491396122992-23bcbe680fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
            ]}
          />
        </div>
      </header>
    </Container>
  );
}
