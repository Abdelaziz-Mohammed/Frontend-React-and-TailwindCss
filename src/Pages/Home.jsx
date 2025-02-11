
import Button from './../Components/Button'

function Home() {
  return (
    <>
      <section className="bg-[#1c2230] pt-[120px]">
        <div className="container mx-auto px-[30px]">
          <div className="flex items-center justify-center">
            <img src="images/landing.png" alt="landing-img" className="max-w-[400px] w-[80%]" />
          </div>
          <div className="text-white text-center flex flex-col items-center">
            <h1 className="text-[25px] md:text-[35px] font-extrabold my-[15px]">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="max-w-[400px] font-normal text-md">
              Keep all your important documents, photos, and files securely stored and easily accessible from any device, anytime, anywhere.
            </p>
          </div>
          <div className='center-content mt-[15px]'>
            <Button text="Get Started" to="/" />
          </div>
        </div>
        <img src="images/bg-curvy-desktop.svg" alt="curvy-img"
            className='w-full h-[25vw] max-h-[200px]'/>
      </section>
    </>
  )
}

export default Home
