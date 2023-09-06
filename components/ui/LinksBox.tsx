import Link from "next/link"

const LinksBox = () => {
  return (
    <footer>
      <ul className=" w-full  flex justify-center mt-12 gap-5 text-[0.5em] text-shadow-footerLinks  text-black-500">
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
    </footer>
  )
}

export default LinksBox
