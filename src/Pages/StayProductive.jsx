
function StayProductive() {
  return (
    <section className="my-[60px]">
      <div className="container max-w-[80%] mx-auto flex flex-col md:items-center md:justify-center md:flex-row md:w-full md:max-w-full gap-[30px]">
        <div className="center-content">
          <img src="/src/assets/images/illustration-stay-productive.png" alt="stay-productive-img"
            className="max-w-[80%]"/>
        </div>
        <div className="text-white">
          <h3 className="font-semibold text-[25px] md:text-[30px] leading-[45px]">
            Stay productive,
            <br />
            wherever you are
          </h3>
          <div className="font-normal text-sm flex flex-col gap-[12px] max-w-[400px]  my-[15px]">
            <p>
              Never let location be an issue when accessing your files. Fylo has you
              covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and colleagues for live
              collaboration. No email attachments required.
            </p>
          </div>
          <a href="/"
            className="border-b-2 border-primaryColor hover:border-[#42b0d1] text-primaryColor hover:text-[#42b0d1] pb-[3px] transition-all duration-200 center-content gap-2 w-fit font-normal">
            See how Fylo works
            <img src="/src/assets/images/icon-arrow.svg" alt="arrow-img"
                className="w-[20px] h-[20px] object-contain animate-arrowMove"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default StayProductive
