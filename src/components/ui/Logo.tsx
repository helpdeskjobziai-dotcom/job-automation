import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * The Jobziai logo. There are two transparent copies, one per theme, so it sits
 * cleanly on any background: navy lettering on light, white lettering on dark
 * (the cyan arrow stays the same). The theme decides which one shows, in CSS.
 */
export function Logo({ href = "/", className, size = "md" }: { href?: string; className?: string; size?: "md" | "lg" }) {
  const height = size === "lg" ? "h-14 sm:h-16" : "h-9 sm:h-10";
  return (
    <Link href={href} aria-label="Jobziai home" className={cn("inline-flex items-center rounded-control", className)}>
      <Image
        src="/logo-light.png"
        alt="Jobziai: find, match, apply"
        width={1178}
        height={335}
        priority
        className={cn("site-logo site-logo-light", height)}
      />
      <Image
        src="/logo-dark.png"
        alt=""
        aria-hidden
        width={1178}
        height={335}
        loading="eager"
        className={cn("site-logo site-logo-dark", height)}
      />
    </Link>
  );
}
