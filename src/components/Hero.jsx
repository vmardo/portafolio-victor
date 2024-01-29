
function Hero() {
  return (
    <div className="flex justify-between items-center gap-5 my-28">

        <div className="w-2/3">
            <h1 className="text-7xl font-bold">Hola👋, <br /> Mi nombre es <br />
            <span className='inline-flex animate-text-gradient bg-gradient-to-l from-[#13B0F5] via-[#8678f9] to-[#E70FAA] bg-[200%_auto] bg-clip-text text-7xl text-transparent'>
              Victor Mardones
            </span>
            <br /> y soy desarrollador web</h1>
        </div>


        <div className="w-1/3">
            <img src="./avatar_final.png" alt="foto_perfil" width={350} />
        </div>


    </div>
  )
}

export default Hero