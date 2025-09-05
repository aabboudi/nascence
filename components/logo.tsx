import Image from "next/image";

export default function Logo({ quality, size }: { quality: number; size: number }) {
  return (
    <div>
      <Image
        src="/nascence-group-logo-standrad.svg"
        alt="Nascence Group Logo"
        width={quality}
        height={quality}
        className={`h-${size} w-${size} object-contain dark:hidden`}
      />
      <Image
        src="/nascence-group-logo-white.svg"
        alt="Nascence Group Logo"
        width={quality}
        height={quality}
        className={`h-${size} w-${size} object-contain hidden dark:block`}
      />
    </div>
  );
}
