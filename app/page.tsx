import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
        id='123'
        name='Neural the Brainy Explorer'
        topic='Neural Network of the Brain'
        subject='Science'
        bg='#E5D0FF'
        duration={45}
        />
        <CompanionCard
        id='456'
        name='Countsy ths Number Wizard'
        topic='Derivatives & Integrals'
          subject='Maths'
        bg='#FFDA6E'
        duration={30}
        />
        <CompanionCard
        id='789'
        name='Verba the Vocanulary Builder'
        topic='English Literature'
          subject='Language'
        bg='#BDE7FF'
        duration={30}
        />
      </section>
      <section className='home-section'>
        <CompanionsList
        title='Recently completed sessions'
        companions={recentSessions}
        classNames='w-2/3 max-lg:w-full'
        />
        <Cta/>
      </section>
     
    </main>
  )
}

export default Page