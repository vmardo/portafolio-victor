import { Github, Linkedin } from 'lucide-react';



function Navbar() {
  return (
    <div className='flex justify-between items-center w-4/5 mx-auto py-10'>
        
        <img src="./logo.svg" alt="logo" className='' width={100} />

        <nav className='flex justify-between'>

            <div className='flex gap-5 mr-10'>

                <a href="#">Home</a>
                <a href="#about">Sobre mí</a>
                <a href="#skills">Habilidades</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contacto</a>

            </div>

            <div className='flex justify-between'>
                <Github  color='gray' size={30} />
                <Linkedin color='gray' size={30} />
            </div>


        </nav>

    


    </div>
  )
}

export default Navbar