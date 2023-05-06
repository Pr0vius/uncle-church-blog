import { MouseEventHandler } from "react";

export default function Overlay({
  onClick,
  active = false,
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
  active: boolean;
}) {
  const activeStyles = "w-full h-full bg-black";
  return (
    <div
      className={`fixed top-0 left-0  opacity-50 z-[80] transition-colors duration-300  ${active && activeStyles}`}
      onClick={onClick}
    ></div>
  );
}
