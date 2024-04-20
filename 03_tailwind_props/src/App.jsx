import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const myObb={
    name :'tanmoy',
    email:'tanmoy@gmail.com',
    ph_no:'9089765456'
  }

  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K1NMdrXzbf-T8CMPhTCMZAl9UGbOg78OvJQq9I_CEQ&s" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
<Card username='Tanmoy' btnText="click"/>
<Card username='tom'/>


    </>
  )
}

export default App
