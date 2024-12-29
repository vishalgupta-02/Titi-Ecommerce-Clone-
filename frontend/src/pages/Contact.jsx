import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"


const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
        <img src={assets.contact_img} className="w-full md:max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR STORE</p>
          <p className="text-gray-500">XYZ STREET, WILLS STATION <br/> SUITE 350, WASHINGTON, USA </p>
          <p className="text-gray-500">TEL: (+91) 675-784-5367 <br /> EMAIL: admin@forever.in</p>
          <p className="font-semibold text-xl text-gray-600">CAREERS AT FOREVER</p>
          <p className="text-gray-500">LEARN MORE ABOUT OUR TEAMS AND JOBS OPENINGS</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">EXPLORE JOBS</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact