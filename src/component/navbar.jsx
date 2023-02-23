import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { Link } from "react-scroll";
import LinkNext from "next/link";

function NavbarApp({ hideMenu }) {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full md:fixed top-0 left-0 right-0 bg-white z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {hideMenu !== true ? (
                <>
                  <Link
                    to="homepage"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="cursor-pointer"
                    href={hideMenu !== true ? null : "/"}
                  >
                    <h2 className="text-2xl text-green-600 font-bold ">
                      JADI PELAMINAN
                    </h2>
                  </Link>
                </>
              ) : null}
              {hideMenu !== true ? null : (
                <LinkNext href="/">
                  <button>
                    {" "}
                    <h2 className="text-2xl text-green-600 font-bold ">
                      JADI PELAMINAN
                    </h2>
                  </button>
                </LinkNext>
              )}
              <div className="md:hidden">
                {/* <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button> */}
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar === "ilang" ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {hideMenu !== true ? (
                  <>
                    <li>
                      <Link
                        to="about"
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={() => setNavbar(!navbar)}
                        className="text-xl py-2 px-6 text-center md:hover:bg-green-300 rounded-2xl cursor-pointer"
                      >
                        Tentang
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="tutorial"
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={() => setNavbar(!navbar)}
                        className="text-xl py-2 px-6 text-center md:hover:bg-green-300 rounded-2xl cursor-pointer"
                      >
                        Tutorial
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="fitur"
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={() => setNavbar(!navbar)}
                        className="text-xl py-2 px-6 text-center md:hover:bg-green-300 rounded-2xl cursor-pointer"
                      >
                        Fitur
                      </Link>
                    </li>
                  </>
                ) : null}

                <li>
                  {hideMenu !== true ? (
                    <>
                      <Link
                        to="design"
                        smooth={true}
                        offset={-60}
                        duration={500}
                        href="/design"
                        onClick={() => setNavbar(!navbar)}
                        className="text-xl py-2 px-6 text-center md:hover:bg-green-300 rounded-2xl cursor-pointer"
                      >
                        Desain
                      </Link>
                    </>
                  ) : null}
                  {hideMenu !== true ? null : (
                    <LinkNext
                      href="/template"
                      className="text-xl py-2 px-6 text-center md:hover:bg-green-300 rounded-2xl cursor-pointer"
                    >
                      <button>Desain</button>
                    </LinkNext>
                  )}
                </li>

                <li>
                  {hideMenu !== true ? (
                    <>
                      <Link
                        to="video"
                        smooth={true}
                        offset={-60}
                        duration={500}
                        href="/video"
                        onClick={() => setNavbar(!navbar)}
                        className="text-xl py-2 px-6 text-center md:hover:bg-green-300 rounded-2xl cursor-pointer"
                      >
                        Undangan Video
                      </Link>
                    </>
                  ) : null}
                  {hideMenu !== true ? null : (
                    <LinkNext
                      href="/video"
                      className="text-xl py-2 px-6 text-center md:hover:bg-green-300 rounded-2xl cursor-pointer"
                    >
                      <button>Undangan Video</button>
                    </LinkNext>
                  )}
                </li>
                <LinkNext href="/login">
                  <button className="mx-1 bg-green-500 text-white text-xl py-2 px-6 text-center md:hover:bg-green-300 rounded-2xl cursor-pointer">
                    Login
                  </button>
                </LinkNext>
                <LinkNext href="/register">
                  <button className="mx-1 bg-green-500 text-white text-xl py-2 px-6 text-center md:hover:bg-green-300 rounded-2xl cursor-pointer">
                    Register
                  </button>
                </LinkNext>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarApp;
