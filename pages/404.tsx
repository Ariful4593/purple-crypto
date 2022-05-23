import React from "react";
import Image from "next/image";
import image__error from "../public/images/404.svg";
import Link from "next/link";

export default function Error404() {
  return (
    <div className="error__container">
      <div className="header">
        <Image src={image__error} alt="Error 404" width={450} height={450} />
      </div>
      <div className="description">
        <h2>Looks like {`you're`} lost</h2>
        <p>We {`can't`} find the page that {`you're`} looking for...</p>
      </div>
      <Link href="/" passHref>
        <a className="go__back">Go Home</a>
      </Link>
    </div>
  );
}
