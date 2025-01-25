import Image from "next/image";
import React from "react";

const ProfileIcon = () => {
  return (
    <a href="/profile">
      <Image
        aria-label="Vá para seu perfil"
        src="/ProfileIcon.svg"
        alt="Ícone de perfil"
        width={35}
        height={35}
        className="mx-2"
      />
    </a>
  );
};

export default ProfileIcon;
