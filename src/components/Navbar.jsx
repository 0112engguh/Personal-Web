import { cn } from "@/lib/utils";
import { House, FolderGit, MailOpen } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { useEffect, useState } from "react";

const navItems = [
  { name: <House />, href: "#hero", label: "Home" },
  { name: <FolderGit />, href: "#projects", label: "Projects" },
  { name: <MailOpen />, href: "#contact", label: "Contact" },
  { name: <ThemeToggle />, href: "#" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={cn(
          "px-6 py-3 rounded-full flex items-center justify-between shadow-md transition-all duration-300 backdrop-blur-xl bg-zinc-900/80 text-foreground",
          isScrolled ? "shadow-lg scale-100" : "scale-100"
        )}
      >
        <div className="flex space-x-6 text-sm font-medium">
          {navItems.map((item, key) => (
            <div key={key} className="relative group">
              <a
                href={item.href}
                className="text-zinc-300 hover:text-white transition-colors duration-200"
                aria-label={item.label}
              >
                {item.name}
              </a>
              <div
                className="absolute top-12 left-1/2 -translate-x-1/2 
                px-2 py-1 rounded bg-background text-sm text-foreground shadow-md
                opacity-0 group-hover:opacity-100 transition-all duration-200
                pointer-events-none whitespace-nowrap z-50"
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
