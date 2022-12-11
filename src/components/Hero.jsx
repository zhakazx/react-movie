import youth from '../assets/three-youth.jpg'
import studio from '../assets/studio.jpg'

const Hero = () => {
    return (
        <header
            className="w-full h-96 bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: `url(${studio})` }}>
            <div className="flex flex-col justify-center items-center">
                <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
                <span className="text-amber-500"> ZhakaZx Movies</span>
                </h1>
                <p className="mt-5 text-center text-lg text-white opacity-70">This website is about movies and things like that
                </p>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cyan to Blue</button>
            </div>
        </header>
    )
}

export default Hero