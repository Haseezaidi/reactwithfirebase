import React, { useEffect, useState } from 'react'
import Nav from './component/Nav'
import {FiSearch} from 'react-icons/fi'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {AiFillPlusCircle} from 'react-icons/ai'
import {IoMdTrash} from 'react-icons/io'
import {RiEditCircleLine} from 'react-icons/ri'

import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from './component/ContactCard'

const App = () => {

  const [contacts, setContacts]=useState([]);

  // useEffect(() => {
  //   const getcontacts = async () => {
  //     try {
  //     const contactsRef=collection(db ,"contacts") ;
  //     const contactsSnapshot = await getDocs(contactsRef);

  //     const contactslist = contactsSnapshot.docs.map((doc)=>{
  //       return{
  //         id:doc.id,   
  //       ...doc.data(),
  //       }
  //     });
  //   console.log(contactslist);
  //     }catch(error){
  //       console.log(error)
  //     }
  //    // console.log( contactsSnapshot);
  //   };
  //   getcontacts();
  // },[])

  useEffect(()=>{
    const getcotacts =async()=>{
      try{
        const contactRef =collection(db,"contacts");
        const contactsSnapshot = await getDocs(contactRef);
        const contactslist =contactsSnapshot.docs.map((doc)=> {
          return{
            id : doc.id,
            ...doc.data()
          }
        });
        setContacts(contactslist);

      }catch(error){
        console.log(error);
      }
    };
getcotacts();
  },[])
  return (
    <div className='max-w-[370px] mx-auto'>
      <Nav/>
      <div className='flex'>
      <div className="flex relative items-center flex-grow">
      <FiSearch className="absolute text-3xl text-white ml-1"/>
        <input type="text" 
        
        className="bg-transparent rounded-md h-10  border border-white flex-grow text-white pl-9"
       />
      </div>
      <div>
      <AiFillPlusCircle className='text-5xl text-white cursor-pointer'/>
      </div>
      </div>

      <div className='mt-4 gap-3 flex flex-col'>
        {contacts.map((contact)=>(
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
  )
}

export default App
