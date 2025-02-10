
import Button from "../Components/Button"

function GetStarted() {
  return (
    <section className="py-[60px] relative">
      <div className="absolute bg-[#0c1524] w-full h-[50%] left-0 bottom-0"></div>
      <div className="container relative z-1">
        <div className="bg-[#1c2230] text-white text-center rounded-[12px] shadow-[0_10px_20px_rgba(0,0,0,0.5)] p-[50px]
                        flex flex-col items-center gap-4 max-w-[1000px] mx-auto">
            <h3 className="font-bold text-[20px] sm:text-[35px]">
              Get early access today
            </h3>
            <p className="font-normal text-[14px] sm:text-[16px] max-w-[400px] tracking-[0.6px] mb-[30px]">
              It only takes minute to sign up and our free starter tier is extremely generous. 
              If you have any questions, our support team would be happy to help you.
            </p>
            <form className="center-content flex-wrap gap-3 w-full md:px-[60px]">
                <input type="email" placeholder="Enter Your E-mail" name="email" id="email"
                    className="flex-1 h-[50px] rounded-[30px] pl-4 text-black placeholder:text-[#777] outline-none border-none" />
                <Button text='Get started for free' to='/' />
            </form>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
