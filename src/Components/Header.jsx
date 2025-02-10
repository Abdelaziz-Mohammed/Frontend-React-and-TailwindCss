
import { useEffect, useRef, useState } from "react"

function Header() {
  const [links] = useState(["Features", "Team", "SignIn"])
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        headerRef.current.style.backgroundColor = "#0c1524";
        headerRef.current.style.boxShadow = "0 0 15px rgba(0, 174, 255, 0.6)";
        headerRef.current.style.padding = "0";
      }
      else {
        headerRef.current.style.backgroundColor = "#181e2a";
        headerRef.current.style.boxShadow = "";
        headerRef.current.style.padding = (window.innerWidth > 576) ? "40px 0 0" : "10px 0 0";
      }
    })
  }, []);
  function handleNavigate(link) {
    if (link === 'Features') {
      window.scrollTo({
        top: 765,
        behavior: 'smooth',
      });
    }
    else if (link === 'Team') {
      window.scrollTo({
        top: 1856,
        behavior: 'smooth',
      });
    }
    else { // 'SignIn
      window.scrollTo({
        top: 2295,
        behavior: 'smooth',
      });
    }
  }
  return (
    <>
        <header ref={headerRef} className="pt-[10px] sm:pt-[40px] fixed top-0 left-0 w-full z-50 bg-[#181e2a] transition-all duration-200">
            <div className="container mx-auto flex flex-col items-center gap-[12px] sm:flex-row sm:justify-around sm:gap-[30px]">
                <a href="/">
                    <img src="/src/assets/images/logo.svg" alt="logo-img" />
                </a>
                <nav>
                    <ul className="flex items-center justify-center gap-[30px]">
                        {
                            links.map((link, index) => {
                                return (
                                  <li key={index}>
                                    <button onClick={() => handleNavigate(link)}
                                      className="text-white opacity-90 hover:underline hover:text-[#00aeff] transition-all duration-200">
                                        {link}
                                    </button>
                                  </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header
