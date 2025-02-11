
import { useState } from "react"
import TestimonialBox from "../Components/TestimonialBox"

function Testimonials() {
  const [testimonials] = useState([
    {
        id: 1,
        desc: 'Fylo has improved our team productivity by an order of magnitude. \
            Since making the switch our team has become a well-oiled collaboration machine.',
        name: 'Satish Patel',
        image: 'profile-1.jpg',
        position: 'Founder & CEO, Huddle',
    },
    {
        id: 2,
        desc: 'Fylo has improved our team productivity by an order of magnitude. \
            Since making the switch our team has become a well-oiled collaboration machine.',
        name: 'Bruce McKenzie',
        image: 'profile-2.jpg',
        position: 'Founder & CEO, Huddle',
    },
    {
        id: 3,
        desc: 'Fylo has improved our team productivity by an order of magnitude. \
            Since making the switch our team has become a well-oiled collaboration machine.',
        name: 'Iva Boyd',
        image: 'profile-3.jpg',
        position: 'Founder & CEO, Huddle',
    },
  ]);
  return (
    <section className="py-[60px]" id="testimonials">
      <div className="container relative">
        <div className="absolute left-[10px] top-[-15px]">
            <img src="images/bg-quotes.png" alt="quotes-img" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-fit mx-auto relative z-1">
            {
                testimonials.map(testimonial => 
                    <TestimonialBox 
                        key={testimonial.id} 
                        desc={testimonial.desc} 
                        name={testimonial.name} 
                        image={testimonial.image} 
                        position={testimonial.position}
                    />
                )
            }
        </div>
      </div>
    </section>
  )
}

export default Testimonials
