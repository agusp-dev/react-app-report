import React, { Fragment } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

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
      image: 'https://images.pexels.com/photos/2609925/pexels-photo-2609925.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      name: 'Agustin',
      surname: 'Perez',
      gender: 'Male',
      email: 'perez.agustin@gmail.com'
    },
    {
      image: 'https://images.pexels.com/photos/3577955/pexels-photo-3577955.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      name: 'Diego',
      surname: 'Perez',
      gender: 'Male',
      email: 'perez.diego@gmail.com'
    },
    {
      image: 'https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      name: 'Maximiliano',
      surname: 'Perez',
      gender: 'Male',
      email: 'perez.maxi@gmail.com'
    }
  ]
}

export default function UsersTable() {

  const { head, body } = data
  const getPdfTableRow = (i, user) => {
    return [
      i+1,
      '', //Must be an image, not text
      user.name,
      user.surname,
      user.gender,
      user.email
    ]
  }

  const onDownloadBtnClick = () => {
    const doc = new jsPDF()
    doc.autoTable({
      startY: 12,
      head: [head],
      body: [...body.map((r, i) => getPdfTableRow(i, r))],
      //draw user images
      didDrawCell: data => {
        const { row, column, cell } = data
        if (row.section === 'body' && column.index === 1) {
          const img = new Image()
          img.src = body[row.index].image
          doc.addImage(
            img,
            'JPEG',
            cell.x + 4, 
            cell.y,
            6,
            6
          )
        }
      }
    })
    doc.save('table.pdf')
  }

  return (
    <Fragment>
      <table
        id='usersTable' 
        className='table table-striped'>
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
