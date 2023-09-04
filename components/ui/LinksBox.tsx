import Link from "next/link"

const LinksBox = () => {
  return (
    <ul className="self-center justify-self-center mt-10 flex justify-center gap-5 text-[0.5em] custom-text-shadow-links  text-black-500">
      <li>
        <span
          className={`relative z-20 hover:animate-blinkmulticolor text-[2em] md:text-[1em]  `}
        >
          <Link href="https://cz.linkedin.com/in/v%C3%A1clav-vl%C4%8Dek-45a265158">
            {" "}
            LInkedIn{" "}
          </Link>
        </span>
      </li>
      <li>
        <span
          className={`relative z-20 hover:animate-blinkmulticolor text-[2em] md:text-[1em]  `}
        >
          <Link href="https://github.com/minlost"> Github </Link>
        </span>
      </li>
    </ul>
  )
}

export default LinksBox
