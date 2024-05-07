import React from 'react'

const navbar = () => {
  const clickhai=() => {
    <div className='h-1/4 w-2/4 bg-white text-black pt-12 m-9 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ea mollitia assumenda dolores, cum necessitatibus iste earum fuga amet fugit distinctio exercitationem enim, corporis velit culpa, deserunt tempora maxime sequi.</div>
  }
  
  return (
    <navbar> 
      <div className='bg-zinc-800 h-12 w-full flex justify-between content-centre text-center '>
<div className='font-bold text-white mx-4 h-5 cursor-pointer hover:font-extrabold transition-all'>iTask</div>
<ul className='font-semibold text-white flex gap-24 mx-5 cursor-pointer '>
  <li className='hover:font-extrabold transition-all'>Home</li>
  <li onClick={clickhai} className='hover:font-extrabold transition-all flex justify-center align-middle'>about</li>
</ul>
      </div>
    </navbar>
  )
}

export default navbar


