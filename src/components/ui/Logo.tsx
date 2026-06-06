import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  linkTo?: string;
}

const sizes = {
  sm: { width: 140, height: 56 },
  md: { width: 200, height: 80 },
  lg: { width: 280, height: 112 },
  xl: { width: 380, height: 152 },
};

export default function Logo({ className = "", size = "md", linkTo = "/" }: LogoProps) {
  const { width, height } = sizes[size];

  const img = (
    <Image
      src="/logo.png"
      alt="Soto & Segovia Imports"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain" }}
      priority
    />
  );

  if (linkTo) {
    return (
      <Link href={linkTo} className="inline-block flex-shrink-0">
        {img}
      </Link>
    );
  }
  return <span className="inline-block flex-shrink-0">{img}</span>;
}
