import React from 'react'
import Image from "next/image";
import { LandButton } from './styles'
import Link from 'next/link'


const LandingButton = () => {
  return (
    <Link href={"/auth/signup"}>
      <LandButton type="button">
        Get started{" "}
        <Image
          src="/assets/images/ic_round-keyboard-arrow-right.svg"
          width={24}
          height={24}
        />
      </LandButton>
    </Link>
  );
};

export default LandingButton