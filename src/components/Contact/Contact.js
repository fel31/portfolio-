
import { contact } from '../../portfolio'
import './Contact.css'


const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contactez-moi</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email
        </span>
      </a>
      <form action='mailto:oueslati.souad@hotmail.fr' method="get" encType='text/plain'>
    <input type="email" placeholder='email'/>
    <input type="text" placeholder='votre message'/>
    <button type='submit'>Envoyer</button>
    </form>
  
	
    </section>
  
  )
}

export default Contact
