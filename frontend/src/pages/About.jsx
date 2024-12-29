import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur dicta, magnam non unde deserunt aspernatur voluptas ut illum, ipsum sunt eos, facilis vel delectus sapiente? Est neque nulla corrupti recusandae deserunt dolorem fugit fuga vitae blanditiis totam pariatur rem delectus labore mollitia, consequuntur, unde incidunt laudantium dolore modi autem. Soluta quisquam distinctio animi quas necessitatibus dignissimos excepturi facere quos harum officia rem nulla laboriosam, illo quis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi exercitationem distinctio, quasi voluptates maiores repellat rerum tempore explicabo sunt magni vero vitae excepturi, neque velit, aspernatur maxime. Tempore odio totam cum et id deserunt repudiandae asperiores debitis consequuntur maiores unde reiciendis accusamus qui, eveniet eum obcaecati! Cupiditate architecto optio blanditiis?</p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus sit, dignissimos totam perferendis quae odio et dolorem, voluptatem soluta repellendus facere laboriosam, illo esse!</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
          <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>QUALITY ASSURANCE</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus animi consequatur officia necessitatibus sed repellendus autem, voluptas ipsa, maxime corporis velit, laudantium pariatur id possimus.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>CONVENIENCE</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus animi consequatur officia necessitatibus sed repellendus autem, voluptas ipsa, maxime corporis velit, laudantium pariatur id possimus.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>EXCEPTIONAL CUSTOMER SERVICE</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus animi consequatur officia necessitatibus sed repellendus autem, voluptas ipsa, maxime corporis velit, laudantium pariatur id possimus.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About