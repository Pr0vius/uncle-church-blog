import { MouseEventHandler } from "react";

export default function MobileMenuButton({
  onClick,
  active = false,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  active: boolean;
}) {
  const activeStyles =
    "before:transform before:-rotate-[45deg] before:top-2/4 before:-translate-y-2/4 after:transform after:rotate-[45deg] after:bottom-2/4 after:translate-y-2/4";
  return (
    <button
      onClick={onClick}
      className={`flex w-8 h-4 relative before:absolute before:content-[''] before:w-full before:bg-black before:h-1  before:top-0 before:left-0 before:rounded-md before:transition-transform before:duration-300 before:ease-in-out before:transform-gpu after:content-[''] after:absolute after:w-full after:bg-black after:h-1 after:bottom-0 after:left-0 after:rounded-md z-[100] after:transition-transform after:duration-300 after:ease-in-out after:transform-gpu ${
        active && activeStyles
      }`}
    ></button>
  );
}
