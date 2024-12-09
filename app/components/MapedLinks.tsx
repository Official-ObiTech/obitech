import Link from "next/link";
import React from "react";

interface Link {
  href: string;
  label: string;
}

interface MapedLinksProps {
  links: Link[];
}

const MapedLinks: React.FC<MapedLinksProps> = ({ links }) => {
  return (
    <>
      <ul className="flex gap-5">
        {links.map((link) => (
          <li key={link.href} className="link ">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MapedLinks;
