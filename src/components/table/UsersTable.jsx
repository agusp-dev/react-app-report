import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

const data = {
  head: [
    '#',
    'Name',
    'Surname',
    'Gender',
    'Email'
  ],
  body: [
    {
      'name': 'Agustin',
      'surname': 'Perez',
      'gender': 'Male',
      'email': 'perez.agustin@gmail.com'
    },
    {
      'name': 'Diego',
      'surname': 'Perez',
      'gender': 'Male',
      'email': 'perez.diego@gmail.com'
    },
    {
      'name': 'Maximiliano',
      'surname': 'Perez',
      'gender': 'Male',
      'email': 'perez.maxi@gmail.com'
    }
  ]
}

export default function UsersTable() {
  const { head, body } = data
  return (
    <div className='table table-striped'>
      <TableHead head={ head } />
      <TableBody body={ body } />
      <button 
        type='button'
        className='btn btn-primary mt-3'>
          Download
      </button>
    </div>
  )
}
