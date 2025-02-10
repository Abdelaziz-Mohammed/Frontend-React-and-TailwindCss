
import { useState } from "react"
import FeatureBox from "../Components/FeatureBox";

function Features() {
  const [features] = useState([
    {
      id: 1,
      icon: 'icon-access-anywhere.svg',
      title: 'Access your files, anywhere',
      desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    },
    {
      id: 2,
      icon: 'icon-collaboration.svg',
      title: 'Real-time collaboration',
      desc: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    },
    {
      id: 3,
      icon: 'icon-security.svg',
      title: 'Security you can trust',
      desc: 'factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    },
    {
      id: 4,
      icon: 'icon-any-file.svg',
      title: 'Store any type of file',
      desc: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
    },
  ]);
  return (
    <section className="mb-[60px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:w-[650px] mx-auto">
          {
            features.map(feature => <FeatureBox key={feature.id} icon={feature.icon} title={feature.title} desc={feature.desc} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Features
