import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightToBracket, FaHeart } from "react-icons/fa6";

const About = () => {
  return (
    <div>
        <div className='bg-gray-700 text-white p-4 bg-[url("/Img/img.jpg")] bg-blend-multiply bg-cover bg-[center_80%] min-h-56 lg:min-h-96'>
        <div className='flex items-start md:items-center h-full ml-5 lg:ml-24 mt-10 lg:mt-40'>
            <h1 className='text-5xl lg:text-6xl font-bold'>About Us</h1>
        </div>
        <div className='bg-gray-700 bg-opacity-50 text-lg lg:text-xl p-2 mt-4 rounded-lg w-56 lg:w-60 ml-5 lg:ml-24 flex items-center justify-center'>
              {/* <Link to="/" /> */}
            Home <FaArrowRightToBracket className='inline mx-4' /> About Us
        </div>
        </div>
        <div>
            <div className='ml-0 lg:ml-28 mt-8 px-7 md:px-6 py-6 w-full lg:w-4/5'>
              <div className='flex items-center gap-2'>
          <FaHeart className='text-red-500 text-md' />
        <h6 className='text-lg text-blue-500 font-bold'>Make a difference</h6>
        </div>
                <h2 className='text-4xl font-bold mb-7'>Let's come together to make a positive impact</h2>
                <p className='text-gray-700 mb-3 text-md opacity-70'>
                    Udaanous strongly believes that every person regardless of circumstances must have compassion and care, and a chance to make life fulsome. Our mission lies in reaching out and helping the most vulnerable members of society-those who are variously neglected, abandoned, or forgotten. Our focus is beggars; elderly people shunned by their families; pregnant women in trouble; children with disabilities; and anyone who is in dire need of support. Every day has its own share of people who do not have the basics of food and shelter-and other necessities such as healthcare and emotional support.
                    <br /> <br />
                    Udaanous aims to change it-to provide a way to all those who have nowhere to turn. Its vision is of a world where no one should suffer in silence or be ignored. Such society will have for each person dignity and esteem irrespective of age and condition. It offers primary care to such senior citizens who have been abandoned or neglected to bring them under proper shelter, food, and care. Also, we make provisions for pregnant women experiencing crises, linking them to pre-natal clinics for counseling and medical attention. We provide therapy, education, and care for children with disabilities and enable these children to lead fulfilling lives. We also empower beggars by provision of food and shelter alongside creating rehab opportunities for reintegration into society.
                    <br /> <br />
                    There is a firm commitment at Udaanous to creating change that lasts forever. The programs we conduct are aimed at collating all immediate needs with the dignity and independence of an individual. We invite partnerships with foundations, organizations, and compassionate individuals to this cause. Your contributions help us go a long way in providing essential services and support to affected individuals. Together we will make a strong impact, opening doors to the possibility of hope and a brighter world for its most deserving inhabitants.
                </p>
            </div>
            <div className='relative flex flex-col lg:flex-row ml-0 lg:ml-32 mt-8 px-7 md:px-6 py-6 w-full lg:w-2/5 gap-8'>
              <img src="Img/gallery-26.png" alt="" className='rounded-xl border-b-8 border-yellow-400 hover:-translate-y-3 duration-500 z-10' />
              <img src="Img/badge-1.png" alt="" className='absolute top-64 bottom-0 left-[30%] lg:top-auto lg:bottom-28 lg:left-[86%] bg-red-500 rounded-full py-7 px-4 hover:-translate-y-3 duration-500 z-20' />
              <img src="Img/gallery-29.png" alt="" className='rounded-xl border-b-8 border-red-300 hover:-translate-y-3 duration-500 z-10 hidden lg:block' />
            </div>
            <div className='bg-gray-100 bg-[url("/Img/lines-2.png")] bg-blend-color-burn bg-cover mb-60'>
              <div className='flex items-center justify-center mt-24 lg:mt-5 gap-24 px-20 pt-16 pb-5 flex-col lg:flex-row'>
                <img src="Img/rashmi.jpeg" alt="" className='h-2/4 w-80 rounded-lg' />
                <div className='max-w-xl'>
                <h6 className='text-blue-500 font-bold mb-3 text-2xl'>Co-Founder</h6>
                <h1 className='text-5xl font-bold'>Rashmi Kamalasanan</h1>
                <p className='text-gray-700 mt-4 text-md mb-3 opacity-70'>
                    Udaanous Foundation, a non-profit organization focused on driving meaningful change and empowering underserved communities. Driven by a passion for social impact, Rashmi advocates for sustainable development and believes in creating equal opportunities for all. Her work centers on breaking down barriers of inequality, particularly in education and skill development. She is deeply committed to fostering inclusivity by ensuring that marginalized groups have access to the resources they need to thrive.
                    <br /><br />
                    Through Udaanous Foundation, Rashmi leads initiatives that promote educational access, equip individuals with valuable skills, and help create a more equitable society. She recognizes education as a powerful tool for transforming lives and works to make it accessible to those who need it most. Additionally, Rashmi emphasizes the importance of sustainable development, striving to integrate eco-friendly practices into community projects. Her holistic approach continues to inspire change, aiming for a better, more inclusive future for all.
                    </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About