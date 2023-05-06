import Image from "next/image";
import Link from "next/link";

export default function NavBrand() {
  return (
    <Link href={"/"} className="flex gap-1 items-center">
      <Image
        src="https://i.pinimg.com/564x/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg"
        alt="Brand Logo"
        width={50}
        height={50}
      />
      <span>Titulo</span>
    </Link>
  );
}
