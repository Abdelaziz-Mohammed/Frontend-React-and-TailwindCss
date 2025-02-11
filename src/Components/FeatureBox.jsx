
import PropTypes from 'prop-types'

function FeatureBox({ icon, title, desc }) {
  return (
    <>
      <div className='center-content flex-col gap-[12px] text-white text-center'>
        <img src={`images/${icon}`} alt="featute-img"
            className='w-[80px] h-[80px] object-contain' />
        <h2 className='text-[20px] font-bold mt-[8px]'>
            {title}
        </h2>
        <p className='max-w-[300px] font-normal font-md'>
            {desc}
        </p>
      </div>
    </>
  )
}

FeatureBox.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}

export default FeatureBox
