import React, { useState } from 'react';
import BioModal from "../BioModal.jsx";



const officers = [
  {
    name: 'Mark W. Sigmon',
    role: 'President',
    imageUrl:      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  
  },
  {
    name: 'Rita Lail',
    role: 'Vice President',
    imageUrl:      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  
  },
  {
    name: 'F. Wesley Sigmon',
    role: 'Secretary',
    imageUrl:"#"  
  }
]
const members = [
  {
    name: 'Aron Gabriel',
    role: 'Board Member',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  
  },
  {
    name: 'Eric McCombs',
    role: 'Board Member',
    imageUrl:      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  
  },
  {
    name: 'Kim S. Ratteerree',
    role: 'Treasurer',
    imageUrl:"#"  
  },
  {
    name: 'Eric Setzer',
    role: 'Treasurer',
    imageUrl:"#"  
  }
]

export default function Board() {
  const [showModal, setShowModal] = useState(false);

  const modalFunction = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      {showModal && 
        <BioModal showModal={showModal}/>
      }
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Board Members</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <h3 className="text-xl font-bold text-gray-600">Officers</h3>
          {officers.map((officer) => (
            <li onClick={modalFunction} key={officer.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={officer.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{officer.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{officer.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div></div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <h3 className="text-xl font-bold text-gray-600">Members</h3>
          <div></div>
          {members.map((member) => (
            <li key={member.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={member.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{member.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
