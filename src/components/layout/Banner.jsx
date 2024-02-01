import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import banner1 from '../../assets/banner1.jpeg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';
import banner5 from '../../assets/banner5.jpg';
import Heading from '../Heading';
import TypingComponent from '../TypingComponent ';
import Paragraph from '../Paragraph';
import Button from '../Button';
import { FaFacebookSquare, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Banner = () => {
  return (
    <section id='Banner' className='py-[120px] bg-bgColor'>
      <Container>
        <Flex>
          <div className='w-1/2'>
            <Heading className='text-lg font-semibold pb-5' text="Hey, I'm Shangida" as='h5'/>
            <TypingComponent/>
            
            <Paragraph className='pb-10 pt-5' text="I'm a frontend developer based in Bangladesh. I'll help you build beautiful websites your users will love."/>
            
            <Button text='Download CV' href='https://tailwindcss.com/docs/padding' target='_blank'/>

            <div className='pt-6'>
              <Flex className='gap-x-2.5'>
              <a href="https://www.facebook.com/md.mdmarufislam.9?mibextid=2JQ9oc" target='_blank'>
                <FaFacebookSquare/>
              </a>
              <a href="https://github.com/shanjidaKhatunCodeing" target='_blank'>
                <FaGithub/>
              </a>
              <a href="https://wa.me/qr/M347CHNGDAQHJ1" target='_blank'>
                <FaWhatsapp/>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
                <SiGmail/>
              </a>
              </Flex>
            </div>
          </div>
          <div className='w-1/2 relative'>
            <Image className='w-[100px] h-[100px] rounded-full absolute top-0 left-[220px]' src={banner1}/>
            <Image className='w-[100px] h-[100px] rounded-full absolute top-0 left-[380px]' src={banner2}/>
            <Image className='w-[100px] h-[100px] rounded-full absolute top-[80px] left-[300px]' src={banner3}/>
            <Image className='w-[100px] h-[100px] rounded-full absolute top-[160px] left-[220px]' src={banner4}/>
            <Image className='w-[100px] h-[100px] rounded-full absolute top-[160px] left-[380px]' src={banner5}/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
