import Image from "next/image";
import { Icon } from "@iconify/react";
interface Props {
  img?: string;
  name?: string;
}
export default function UserMenu({ img = "https://picsum.photos/200?random=1", name = "User Name" }: Props) {
  return (
    <div className="flex items-center">
      <Image className="rounded-full" src={img} width={60} height={80} alt={name} />
      <span className="ml-2">{name}</span>

      <button className="transform transition-transform duration-300 ease-in-out ">
        <Icon icon="bi:chevron-down" />
      </button>
    </div>
  );
}
