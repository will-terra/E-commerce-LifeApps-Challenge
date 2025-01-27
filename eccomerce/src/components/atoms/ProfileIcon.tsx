import Image from "next/image";
import Link from "next/link";

const ProfileIcon = () => {
  return (
    <Link href="/profile">
      <Image
        aria-label="Vá para seu perfil"
        src="/ProfileIcon.svg"
        alt="Ícone de perfil"
        width={35}
        height={35}
        className="mx-2"
      />
    </Link>
  );
};

export default ProfileIcon;
