import React from 'react'
import './contact.css'
import Card from './Card'
import data from './form.json'
import UserForm from './UserForm'

const TemplateContact = () => {
  return (
    <section className='contact'>
       <div className="title reveal">
          <h2 className="section-title">{data.title}</h2>
          <h1>Sitio en construcción.</h1>
      </div>

      <div className="content">
        <div className="row">
          {data.cards.map((item) => {
            return(
              <Card key = {item.id} props = {item} />
            )
          })}
        </div>
        <UserForm/>
      </div>

    </section>
  )
}

export default TemplateContact