import Link from "next/link";

export default function DesktopMenu({ links }: { links: { href: string; content: string }[] }) {
  return (
    <>
      <ul className="gap-3 hidden md:flex">
        {links?.map((link, idx) => (
          <li className="p-3 rounded-md transition-all hover:bg-gray-100" key={`${link.href}-${idx}`}>
            <Link className="" href={link.href}>
              {link.content}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex gap-3">
        <Link href="/login">Iniciar Sesion</Link>
        <Link href="/register">Registrarse</Link>
      </div>
    </>
  );
}
