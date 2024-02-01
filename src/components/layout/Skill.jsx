import React from 'react'
import SkillBar from '../SkillBar'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import CircularProgress from '../CircularProgress '
import Paragraph from '../Paragraph'







export const Skill = () => {
  return (
    <section id='Skill' className='py-[80px]'>
        <Container>
            <Flex className='justify-between gap-x-14'>
                <div className='w-1/2'>
                    <Heading className='pb-[30px]' text='Technical Skills' as='h2'/>
                    <SkillBar skillName='HTML' skillLevel={96}/>
                    <SkillBar skillName='CSS' skillLevel={90}/>
                    <SkillBar skillName='TailwindCss' skillLevel={86}/>
                    <SkillBar skillName='Bootstrap' skillLevel={80}/>
                    <SkillBar skillName='Javascript' skillLevel={76}/>
                    <SkillBar skillName='React' skillLevel={70}/>
                 </div>
                 
                 <div className='w-1/2 px-16'>
                    <Heading className='pb-[30px]' text='Professional Skills' as='h2'/>
                    <Flex>
                      <div className='w-1/4'>
                         <CircularProgress percentage={90}/>
                         <Paragraph text='Communication' className='font-bold'/>
                      </div>
                      <div className='w-[20%]'></div>
                      <div className='w-1/4'>
                         <CircularProgress percentage={55}/>
                         <Paragraph text='Team Work' className='font-bold'/>
                      </div>
                    </Flex>
                    
                    <Flex className='pt-10'>
                      <div className='w-1/4'>
                         <CircularProgress percentage={86}/>
                          <Paragraph text='Project Management' className='font-bold'/>
                       </div>
                      <div className='w-[20%]'></div>
                      <div className='w-1/4'>
                         <CircularProgress percentage={60}/>
                         <Paragraph text='Creativity' className='font-bold'/>
                      </div>
                    </Flex>
                 </div>
            </Flex>
        </Container>
    </section>
  )
}
