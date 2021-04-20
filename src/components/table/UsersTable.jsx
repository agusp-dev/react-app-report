import React, { Fragment } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import ProfilePhoto from '../../assets/img-profile.png'

const data = {
  head: [
    '#',
    'Image',
    'Name',
    'Surname',
    'Gender',
    'Email'
  ],
  body: [
    {
      image: ProfilePhoto,
      name: 'Agustin',
      surname: 'Perez',
      gender: 'Male',
      email: 'perez.agustin@gmail.com'
    },
    {
      image: ProfilePhoto,
      name: 'Diego',
      surname: 'Perez',
      gender: 'Male',
      email: 'perez.diego@gmail.com'
    },
    {
      image: ProfilePhoto,
      name: 'Maximiliano',
      surname: 'Perez',
      gender: 'Male',
      email: 'perez.maxi@gmail.com'
    }
  ]
}

export default function UsersTable() {
  const { head, body } = data

  const onDownloadBtnClick = () => {
    console.log('dwn')
  }

  return (
    <Fragment>
      <table className='table table-striped'>
        <TableHead head={ head } />
        <TableBody body={ body } />
      </table>
      <div className='d-flex justify-content-end'>
        <button 
          type='button'
          className='btn btn-primary'
          onClick={ onDownloadBtnClick }>
            Download
        </button>
      </div>
    </Fragment>
  )
}
