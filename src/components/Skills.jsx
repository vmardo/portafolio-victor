
function Skills() {
  return (
    <div className="my-28" id="skills">

        <h3 className="text-center text-5xl font-bold my-16">Habilidades</h3>
        <p className="text-3xl font-normal text-center mb-16">Tecnologías con las que he trabajado</p>


        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 ">

            <div className="flex justify-center items-center">
                <img src="./skills/html.svg" width={115} alt="html_icon" />
            </div>
            <div className="flex justify-center items-center">
                <img src="./skills/css.svg" width={115} alt="css_icon" />
            </div>
            <div className="flex justify-center items-center">
                <img src="./skills/js.svg" width={115} alt="js_icon" />
            </div>
            <div className="flex justify-center items-center">
                <img src="./skills/react.svg" width={115} alt="react_icon" />
            </div>
            <div className="flex justify-center items-center">
                <img src="./skills/tailwind.svg" width={115} alt="tailwind_icon" />
            </div>
            <div className="flex justify-center items-center">
                <img src="./skills/bootstrap.svg" width={115} alt="bootstrap_icon" />
            </div>
            <div className="flex justify-center items-center">
                <img src="./skills/git.svg" width={115} alt="git_icon" />
            </div>
            <div className="flex justify-center items-center">
                <img src="./skills/github.svg" width={115} alt="github_icon" />
            </div>

        </div>

    </div>
  )
}

export default Skills