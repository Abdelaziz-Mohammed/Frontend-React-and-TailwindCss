
import { useState } from "react"
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  const [contacts] = useState([
    {
      id: 1,
      icon: 'icon-phone.svg',
      text: '+1-543-123-4567'
    },
    {
      id: 2,
      icon: 'icon-email.svg',
      text: 'example@fylo.com'
    },
  ]);
  const [links] = useState([
    { id: 1, text: 'About Us' },
    { id: 2, text: 'Jobs' },
    { id: 3, text: 'Contact Us' },
    { id: 4, text: 'Terms' },
    { id: 5, text: 'Press' },
    { id: 6, text: 'Privacy' },
    { id: 7, text: 'Blog' }
  ]);
  const [socials] = useState([
    { id: 1, name: 'linkedin' },
    { id: 2, name: 'facebook' },
    { id: 3, name: 'twitter' },
    { id: 4, name: 'instagram' }
  ]);
  return (
    <section className="pb-[60px] bg-[#0c1524]">
      <div className="container pl-[50px] ms:pl-0">
        <a href="#home">
          <img src="images/logo.svg" alt="logo-img"
            className="w-[175px] h-[65px] object-contain"/>
        </a>
        <div className="text-white pt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:items-start lg:grid-cols-4 gap-[50px]">
          <div className="flex items-center gap-[12px]">
            <img src="images/icon-location.svg" alt="location-img"
              className="w-[18px] h-[18px] object-contain"/>
            <p className="font-normal text-sm tracking-[0.6px]">
              123 Main St, Anytown, Egypt
            </p>
          </div>
          <div>
            {
              contacts.map(contact => <div key={contact.id}
                className="flex items-center justify-start gap-3 mb-3 last-of-type:mb-0">
                <img src={`images/${contact.icon}`} alt="icon-img"
                className="w-[] h-[] object-contain"/>
                <p className="font-normal text-sm">
                  {contact.text}
                </p>
              </div>)
            }
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-[30px] w-fit">
            {
              links.map(link => <a key={link.id} href='/'
                className="hover:text-[#00aeff] hover:translate-x-2 transition-all duration-300">
                  {link.text}
              </a>)
            }
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {
              socials.map(social => <a key={social.id} href={`https://www.${social.name}.com/`} target="_blank" className="group">
                <div className="w-[30px] h-[30px] rounded-full center-content border-[1px] cursor-pointer border-primaryColor">
                  {
                    social.name === 'linkedin' ?
                    <FaLinkedinIn className="group-hover:text-primaryColor transition-all duration-200" /> :
                    social.name === 'facebook' ?
                    <FaFacebookF className="group-hover:text-primaryColor transition-all duration-200" /> :
                    social.name === 'twitter' ?
                    <FaTwitter className="group-hover:text-primaryColor transition-all duration-200" /> :
                    <FaInstagram className="group-hover:text-primaryColor transition-all duration-200" />
                  }
                </div>
              </a>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
