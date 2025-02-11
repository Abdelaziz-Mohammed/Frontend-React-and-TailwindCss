
import PropTypes from 'prop-types';

function TestimonialBox({ desc, name, image, position }) {
  return (
    <div className='text-white bg-[#21293c] p-[30px] rounded-[12px] shadow-[0_10px_20px_rgba(0,0,0,0.5)]'>
        <p className='font-normal text-md mb-3 tracking-[0.5px]'>{desc}</p>
        <div className='flex items-center justify-start gap-3'>
            <img src={`src/assets/images/${image}`} alt={name}
                className='w-[50px] h-[50px] rounded-full object-contain outline outline-[2px] outline-primaryColor outline-offset-2' loading='lazy'/>
            <div>
                <strong aria-label="Testimonial author">{name}</strong>
                <p className='text-gray-500'>{position}</p>
            </div>
        </div>
    </div>
  )
}

TestimonialBox.propTypes = {
    desc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
}

export default TestimonialBox
