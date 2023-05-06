import Container from "@/components/general/Container";
import NavBrand from "./NavBrand";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const links = [
  {
    href: "#",
    content: "Inicio",
  },
  {
    href: "#",
    content: "Quienes Somos",
  },
  {
    href: "#",
    content: "Proposito",
  },
  {
    href: "#",
    content: "Publicaciones",
  },
  {
    href: "#",
    content: "Seccion de Jovenes",
  },
];

export default function Nav() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <Container as="nav" className="flex items-center justify-between py-2">
        <NavBrand />
        <DesktopMenu links={links} />
        <MobileMenu links={links} />
      </Container>
    </header>
  );
}
