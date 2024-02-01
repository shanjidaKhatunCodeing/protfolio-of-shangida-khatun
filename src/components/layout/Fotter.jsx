import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import ListItem from '../ListItem'
import { FaFacebookSquare, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Fotter = () => {
  return (
   <section className='py-[50px] bg-bgColor'> 
    <Container>
        <Flex className='justify-between gap-x-64 items-center'>
            <div className='w-1/4'>
                <Image src={logo}/>
            </div>
            <div className='w-1/2 pr[150px]'>
                <ul>
                    <Flex>
                        <ListItem href='#Banner' text='Home'/>
                        <ListItem href='#About' text='About'/>
                        <ListItem href='#Service' text='Service'/>
                        <ListItem href='#Project' text='Project'/>
                        <ListItem href='#Skill' text='Skill'/>
                    </Flex>
                </ul>
            </div>
            <div className='w-1/4'></div>
        </Flex>
        <div className='py-[30px] border-b-2 border-black'></div>

        <div className='pt-6'>
            <Flex className='pl-[800px] gap-x-5'>
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
    </Container>
   </section>
  )
}

export default Fotter