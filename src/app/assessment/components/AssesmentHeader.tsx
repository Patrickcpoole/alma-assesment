import Image from "next/image";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="relative h-[400px] w-full bg-[#d9dea6] flex justify-center">
      <div className="">
        <Image
          src="/decorative-circles.png"
          alt=""
          fill
          priority
          className="object-contain object-left"
          sizes="50vw"
        />
      </div>

      <div className="w-1/2 h-full flex flex-col justify-center gap-12 items-center">
        <div className="flex flex-col items-start gap-10">
          <span className="text-4xl font-bold text-secondary">almă</span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 whitespace-pre-line">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
