import React,{useState,useEffect} from 'react'
import axios from 'axios'

const UserForm = () => {

  const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [coment,setComent] = useState('')

    const [isValidEmail,setIsValidEmail] = useState(true)
    const [isValidComet,setIsValidComent] = useState(true)
    const [succesfullySubmit,setSuccesfullySubmit] = useState(false)



    const handleSubmit = (e) => {
      e.preventDefault();

      
        if (!email.includes('@') || !email.includes('.')) {
            setIsValidEmail(false)
        }
        if(coment.trim().length === 0){
            setIsValidComent(false)
        }else{
            setIsValidComent(true)
            setIsValidEmail(true)
            setSuccesfullySubmit(true)


            const data = {
              Name : name,
              Email : email,
              Coment: coment
            }
            axios.post('https://sheet.best/api/sheets/8e73bd6b-6f98-4a9d-9dc2-dfac46495c8a',data).then((response) => {
              console.log(response)
              setName('')
              setEmail('')
              setComent('')
            })
        }
    }



    useEffect(() =>{
        const KeyDwonHandler = event =>{
            if(event.key === 'Enter'){
                event.preventDefault();
                handleSubmit();
            }
        };

        document.addEventListener('keydown',KeyDwonHandler)

        return() => {
            document.removeEventListener('keydown',KeyDwonHandler)
        };

    },[name,email,coment])


  return (
    <div className="row">
    <div className="contact-form ">
      <h3>Enviame mensaje.</h3>
      <div className="input-box">
        <input 
        type="text" 
        name="" 
        placeholder="Nombre"
        onChange={event => setName(event.target.value)}
        />
      </div>
      <div className='input-box'>
        <input 
          type="text" 
          name="" 
          style={{
              borderColor: !isValidEmail ? 'red': '#000',
              borderWidth: !isValidEmail ? '3px': '1px',
              background : !isValidEmail ? '#FFB8A9': 'white'
          }}
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
      />
      </div>
      <div className="input-box coment">
        <input 
        type="text" 
        name="" 
        placeholder="Comentario"
        style={{
          borderColor: !isValidComet ? 'red': '#000',
          borderWidth: !isValidComet ? '3px': '1px',
          background : !isValidComet ? '#FFB8A9': 'white'
      }}
        onChange={e => setComent(e.target.value)}
        />
      </div>

      <div className="input-box">
        
        <button 
        type='submit' 
        className='send-tn'
        onClick={handleSubmit}
        >Enviar</button>
      </div>


      <h1 style={{display : succesfullySubmit ? 'flex':'none'}}>Mensaje enviado correctamente</h1>
    </div>
  </div>
  )
}

export default UserForm