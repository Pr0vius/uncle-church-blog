// export default function Container({ as = "div" }: { as?: string }) {
//   return (
//     <>
//       <div ></div>
//     </>
//   );
// }

export default function Container({
  as = "div",
  className = "",
  ...rest
}: {
  as?: string;
  className?: string;
  [key: string]: any;
}) {
  const Element = as as keyof JSX.IntrinsicElements;
  return <Element className={`md:max-w-3xl lg:max-w-6xl mx-auto xl:max-w-7xl w-11/12 ${className}`} {...rest} />;
}
