import Image from "next/image";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="relative h-[400px] w-full bg-[#d9dea6]">
      <div className="absolute left-0 top-0 h-full w-1/2">
        <Image
          src="/decorative-circles.png"
          alt=""
          fill
          priority
          className="object-contain object-left"
          sizes="50vw"
        />
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-full flex flex-col justify-center px-12">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">{title}</h1>
        {subtitle && <h2 className="text-3xl text-gray-700">{subtitle}</h2>}
      </div>
    </div>
  );
}
