import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ href = "/", className }: { href?: string; className?: string }) {
  return (
    <Link href={href} aria-label="Home" className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={1490}
        height={521}
        priority
        className="site-logo h-8 sm:h-9 w-auto object-contain"
      />
    </Link>
  );
}
