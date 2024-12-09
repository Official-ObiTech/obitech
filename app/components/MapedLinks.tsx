import Link from "next/link";
import React from "react";
import clsx from "clsx"

interface Link {
  href: string;
  label: string;

}

interface MapedLinksProps {
  links: Link[];
  className?: string;
}

const MapedLinks: React.FC<MapedLinksProps> = ({ links, className }) => {
  return (
    <>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.href} className={clsx("link ", className)}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MapedLinks;
