import CompanionForm from '@/components/CompanionForm'
import React from 'react'

export default function NewCompanion() {
  return (
    <main className='min-lg:w-1/3 min-md-w-2/3 flex items-center justify-center'>
      <article className='w-full gap-4 flex flex-col'>
        <h1>companion builder</h1>
        <CompanionForm/>
      </article>
    </main>
  )
}
