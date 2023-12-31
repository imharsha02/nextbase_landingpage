"use client";
import Link from "next/link";
import {useState, useEffect,} from "react"

function Header() {
  
  const [scrolled, setScrolled] = useState(false);

  const checkScroll = () => {
    const offset = window.scrollY;
    if (offset > 10 ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    }
  }, [])

  let headerClass = "fixed bg-transparent top-0 left-0 z-40 w-full flex justify-center items-center transition"
  if (scrolled) {
    headerClass = "fixed border-b top-0 left-0 z-50 w-full flex justify-center items-center transition bg-opacity-90 backdrop-blur-sm bg-[#FFFAFA]";
  }

  
  return (
    <header className={headerClass}>
      <div className="max-w-[1320px] mx-auto w-full px-4">
        <div className="flex mx-[-16px] items-center justify-between relative">
          <div className="px-4 w-60 max-w-full">
            <Link href="/">
              <p className="header-logo w-full block py-5">Nextbase</p>
            </Link>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <div
                id="navbarToggler"
                className="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
              >
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
              </div>
              <nav
                id="navbarCollapse"
                className="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none"
              >
                <ul className="blcok lg:flex">
                  
                  <li className="relative ">
                    <Link href="/" className="hover:text-blue-500">
                      <span className="text-base py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0">
                        Features
                      </span>
                    </Link>
                  </li>
                  <li className="relative ">
                    <Link href="/" className="hover:text-blue-500">
                      <span className="text-base py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0">
                        Demos
                      </span>
                    </Link>
                  </li>
                  <li className="relative ">
                    <Link href="/" className="hover:text-blue-500">
                      <span className="text-base py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0">
                        Pricing
                      </span>
                    </Link>
                  </li>
                  <li className="relative ">
                    <Link href="/" className="hover:text-blue-500">
                      <span className="text-base py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0">
                        Docs
                      </span>
                    </Link>
                  </li>
                  <li className="relative ">
                    <Link href="/" className="hover:text-blue-500">
                      <span className="text-base py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0">
                        Discord
                      </span>
                    </Link>
                  </li>
                  <li className="relative ">
                    <Link href="/" className="hover:text-blue-500">
                      <span className="text-base py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0">
                        Public Roadmap
                      </span>
                    </Link>
                  </li>
                  <li className="relative ">
                    <Link href="/" className="hover:text-blue-500">
                      <span className="text-base py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0">
                        FAQ
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
              <Link href="/signin">
                <span className="text-base font-semibold text-gray-400 hover:text-primary py-3 px-7 transition">
                  {" "}
                  Sign In{" "}
                </span>
              </Link>
              <Link href="/signup">
                <span className="text-base font-bold text-white bg-black py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:shadow-signUp rounded-sm transition ease-in-out duration-300">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


