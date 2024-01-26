import { Link, Github } from 'lucide-react';

function Projects() {
  return (
    <div id='projects' className='my-28'>

        <h3 className="text-center text-5xl font-bold my-16">Proyectos</h3>
        <p className="text-3xl font-normal text-center mb-16">Algunos proyectos que he construido</p>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 place-items-center">

        {/* Card proyecto 1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gris h-[530px]">
                <div>
                    <img src="./proyectos/tenis-store.png" alt="tenis-store" className='h-60 w-full object-cover' />
                </div>
                <div className='px-6 py-4'>
                    {/* info */}
                    <div>
                        <h4 className='text-3xl font-medium mb-4'>Tenis Store</h4>
                        <p className='text-xl font-light mb-4'> Proyecto de tienda e-commerce con autenticacion y pasarela de pagos paypal </p>
                        <p className='text-base'>Tecnologias: React, Node, Tailwind</p>
                    </div>

                    {/* links */}
                    <div className='flex justify-between items-start mt-5'>
                        <div className='flex gap-3'>
                            <Link/>
                            <a href="https://proyectodetenis.netlify.app/" target='_blank' className='underline'>Preview</a>
                        </div>

                        <div>
                            <div className='flex gap-3 mb-3'>
                                <Github/>
                                <a href="https://github.com/vmardo/tenis-chillan-api" target='_blank' className='underline'>Código backend</a>
                            </div>

                            <div className='flex gap-3'>
                                <Github/>
                                <a href="https://github.com/vmardo/tenis-chillan-ui" target='_blank' className='underline'>Código frontend</a>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

        {/* Card proyecto 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gris h-[530px]">
                <div className=''>
                    <img src="./proyectos/dashboard.png" alt="dashboard"  className='h-60 w-full object-cover' />
                </div>
                <div className='px-6 py-4'>
                    {/* info */}
                    <div>
                        <h4 className='text-3xl font-medium mb-4'>Dashboard Clima</h4>
                        <p className='text-xl font-light mb-4'> App para consultar informacion sobre el clima de las ciudades mas importantes de chile </p>
                        <p className='text-base'>Tecnologias: Javascript, HTML, CSS</p>
                    </div>

                    {/* links */}
                    <div className='flex justify-between items-start mt-5'>
                        <div className='flex gap-3'>
                            <Link/>
                            <a href="https://vmardo.github.io/tablerodedatos/" target='_blank' className='underline'>Preview</a>
                        </div>

                        <div>
                            <div className='flex gap-3 mb-3'>
                                <Github/>
                                <a href="https://github.com/vmardo/tablerodedatos" target='_blank' className='underline'>Código</a>
                            </div>

                        </div>
                    </div>
                </div>

        </div>

        {/* Card proyecto 3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gris h-[530px]">
                <div className=''>
                    <img src="./proyectos/restaurant.png" alt="dashboard"  className='h-60 w-full object-cover' />
                </div>
                <div className='px-6 py-4 flex flex-col justify-between '>
                    {/* info */}
                    <div>
                        <h4 className='text-3xl font-medium mb-4'>Landing Page</h4>
                        <p className='text-xl font-light mb-4'> Landing page sobre restaurant de hamburguesas </p>
                        <p className='text-base'>Tecnologias: HTML, CSS</p>
                    </div>

                    {/* links */}
                    <div className='flex justify-between items-start mt-5'>
                        <div className='flex gap-3'>
                            <Link/>
                            <a href="https://iridescent-chebakia-bf2522.netlify.app/" target='_blank' className='underline'>Preview</a>
                        </div>

                        <div>
                            <div className='flex gap-3 mb-3'>
                                <Github/>
                                <a href="https://github.com/vmardo/segundo-repositorio" target='_blank' className='underline'>Código</a>
                            </div>

                        </div>
                    </div>
                </div>

        </div>


        </div>

    </div>
  )
}

export default Projects