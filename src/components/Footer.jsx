import { Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <div className='mt-28 mb-5'>
        
        <div className='flex justify-between items-center border-b border-b-gris pb-5'>

            <img src="./logo.svg" alt="logo" className='' width={100} />

            <div className='flex gap-5'>
                <p>+569 66384395</p>
                <a href="mailto:juanperez@correo.com">alonso24mat@gmail.com</a>
            </div>


            <div className='flex justify-between gap-5'>
                    <Github  color='gray' size={30} />
                    <Linkedin color='gray' size={30} />
            </div>

        </div>



        <div className='flex justify-between mt-5'>

            <div className='flex gap-5 mr-10'>

                <a href="#">Home</a>
                <a href="#about">Sobre mí</a>
                <a href="#skills">Habilidades</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contacto</a>

            </div>

            <p>Hecho con 💓 por Victor Mardones</p>

        </div>


    </div>
  )
}

export default Footer