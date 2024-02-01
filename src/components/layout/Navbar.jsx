import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import ListItem from '../ListItem'
import { IoMdHome } from "react-icons/io"
import { FaUser } from "react-icons/fa"
import { MdMiscellaneousServices, MdModelTraining  } from "react-icons/md"
import { GoProjectRoadmap } from "react-icons/go"
import Button from '../Button'

const Navbar = () => {
  return (
    <nav className='py-12'>
        <Container className='fixed top-[28px] left-[7%] z-50'>
            <Flex className=''>
                <div className='w-[20%] '>
                    <Image src={logo}/>
                </div>
                <div className='w-[60%] pl-[150px]'>
                    <ul>
                        <Flex>
                            <ListItem href='#Banner' text='Home' icon={<IoMdHome />}/>
                            <ListItem href='#About' text='About' icon={<FaUser />}/>
                            <ListItem href='#Service' text='Service' icon={< MdMiscellaneousServices />}/>
                            <ListItem href='#Project' text='Project' icon={< GoProjectRoadmap />}/>
                            <ListItem href='#Skill' text='Skill' icon={< MdMiscellaneousServices />}/>
                            <ListItem href='#Education' text='Education' icon={< MdModelTraining />}/>
                        </Flex>
                            
                    </ul>
                </div>
                <div className='w-[20%] text-end'>
                    <Button text='Contact Me' href='#Contact' className='target_'/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar
