import Nav from "@/components/Layout/Nav";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
