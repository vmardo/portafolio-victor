import { CalendarRange, School2 } from 'lucide-react';



function About() {
  return (
    <div className="my-28" id='about'>

        <h3 className="text-center text-5xl font-bold my-16">Sobre mí</h3>
        <p className="text-3xl font-normal text-center">

        ¡Hola! Mi nombre es Victor Mardones y soy un apasionado desarrollador fullstack con base en Chillán. Inicié mi trayectoria académica en la Universidad del Bío-Bío, 
        donde me gradué  en Pedagogía en Educación Matemática. Durante mi tiempo en la universidad,
        desarrollé una sólida base en la resolución de problemas y el pensamiento lógico, 
        habilidades que han demostrado ser invaluables en mi carrera en el desarrollo web.</p>

        <h3 className="text-center text-5xl font-bold my-16"></h3>


        <h3 className="text-center text-5xl font-bold my-16">Educación</h3>
        <div className='flex justify-between items-start border-b border-b-white py-4'>
            <div>
                <p className='text-2xl'>Profesor Educacion Media en Matemática</p>
     

                <div className='flex items-center gap-3'>
                    <School2 />
                    <p className='font-medium text-sm'>Universidad del Bio-Bio</p>
           
                </div>
            </div>
           
            <div className='flex items-center gap-3'>
                <CalendarRange />
                
                <p className='font-medium text-sm'>2014-2019</p>
     
                
            </div>

        </div>

        <div className='flex justify-between items-start border-b border-b-white py-4'>
            <div>
                <p className='text-2xl'>Desarrollador FullStack</p>
     

                <div className='flex items-center gap-3'>
                    <School2 />
                    <p className='font-medium text-sm'>Universidad del Desarrollo</p>
           
                </div>
            </div>
           
            <div className='flex items-center gap-3'>
                <CalendarRange />
                
                <p className='font-medium text-sm'>2023-2024</p>
     
                
            </div>

        </div>

    </div>
  )
}

export default About