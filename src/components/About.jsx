import { CalendarRange, School2 } from 'lucide-react';



function About() {
  return (
    <div className="my-28" id='about'>

        <h3 className="text-center text-5xl font-bold my-16">Sobre mí</h3>
        <p className="text-3xl font-normal text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi est culpa cupiditate molestias laboriosam hic ducimus impedit nisi. Numquam nihil itaque deserunt doloremque reprehenderit quos laboriosam! Eum repellendus alias atque.
        Hic velit similique explicabo quasi ad sint, possimus, error voluptas, reprehenderit dolor est qui optio dolore nesciunt. Tempore facere quaerat magnam rerum ipsam, sed, architecto suscipit, magni dolorum necessitatibus nulla.</p>


        <h3 className="text-center text-5xl font-bold my-16">Experiencia</h3>



        <h3 className="text-center text-5xl font-bold my-16">Educación</h3>
        <div className='flex justify-between items-start border-b border-b-white py-4'>
            <div>
                <p className='text-2xl'>Ingeniería Informática</p>

                <div className='flex items-center gap-3'>
                    <School2 />
                    <p className='font-medium text-sm'>Universidad de la Frontera</p>
                </div>
            </div>
           
            <div className='flex items-center gap-3'>
                <CalendarRange />
                <p className='font-medium text-sm'>2019-2024</p>
            </div>

        </div>

    </div>
  )
}

export default About