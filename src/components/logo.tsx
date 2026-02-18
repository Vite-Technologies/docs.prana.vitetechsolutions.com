import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.jpg"
        alt="Logo"
        width={100}
        height={100}
        className="size-6 rounded-lg object-cover"
      />
      <p className="font-semibold">Prana Connect</p>
    </div>
  );
};
