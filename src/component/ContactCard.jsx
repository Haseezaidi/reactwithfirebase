import React from 'react'
import {IoMdTrash} from 'react-icons/io'
import {RiEditCircleLine} from 'react-icons/ri'
import {HiOutlineUserCircle} from 'react-icons/hi'
const ContactCard = ({contact}) => {
  return (
    <div key={contact.id} className= ' bg-yellow flex justify-between items-center rounded-lg p-2 '>
    <div className='flex gap-2'>
    <HiOutlineUserCircle className='text-orange text-4xl'/>
     <div className=''>
       <h2 className='text'>{contact.name}</h2>
       <p className='text-sm'>{contact.email}</p>
     </div>
    </div>
     <div className='flex text-3xl'>
       <RiEditCircleLine/>
       <IoMdTrash className=' text-orange'/>
     </div>
   </div>
  )
}

export default ContactCard
