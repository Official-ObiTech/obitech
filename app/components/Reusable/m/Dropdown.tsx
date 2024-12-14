import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ReusbleButton from "../ReusbleButton";
import Link from "next/link";

interface LinkType {
  href: string;
  label: string;
}

export default function App() {
  // To prevent SSR issues
  const [mounted, setMounted] = useState(false);

  // Handle theme switching
  const { theme, setTheme } = useTheme();

  const links: LinkType[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    // Ensure component is mounted before rendering
    setMounted(true);
  }, []);

  // Prevent rendering until the component is mounted
  if (!mounted) return null;

  return (
    <Dropdown
      backdrop="blur"
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content: "p-6 border-small border-divider bg-background",
      }}
      radius="sm"
    >
      <DropdownTrigger>
        <Avatar
          classNames={{
            base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
            icon: "text-black/80",
          }}
          icon={<AvatarIcon />}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        className="p-3"
        disabledKeys={["profile"]}
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "dark:data-[hover=true]:text-white",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection showDivider aria-label="Profile & Actions">
          <>
            <DropdownItem
              key="profile"
              isReadOnly
              className="h-14 gap-2 opacity-100"
            >
              <User
                avatarProps={{
                  size: "sm",
                  src: "/obitech.png",
                }}
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                description="@official.info.obitech@gmail.com"
                name="Official Obitech"
              />
            </DropdownItem>

            {links.map((link, index) => (
              <DropdownItem key={index}>
                <Link href={link.href} prefetch={true}>
                  {link.label}
                </Link>
              </DropdownItem>
            ))}
          </>
        </DropdownSection>

        <DropdownSection showDivider aria-label="Preferences">
          <DropdownItem key="quick_search" shortcut="⌘K">
            Quick search
          </DropdownItem>
          <DropdownItem
            key="theme"
            isReadOnly
            className="cursor-default"
            endContent={
              <select
                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                id="theme"
                name="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            }
          >
            Theme
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" className="p-0 mt-4">
            <ReusbleButton title="Hire Me" className="w-full rounded" />
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
