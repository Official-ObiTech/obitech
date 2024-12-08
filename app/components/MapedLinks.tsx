import Link from "next/link";


//@ts-ignore
const MapedLinks = ({ links }) => {
  return (
    <>
      <ul className="flex gap-5">
        {links.map((link) => (
          <li
            key={link.href}
            className="link "
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MapedLinks;
