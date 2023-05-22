import { logo1 } from '../assets/';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo1} alt='sumz-logo' className='w-28 object-contain' />
            <h1>by Navas</h1>
            <button
                type='button'
                onClick={() => window.open('https://github.com/gianfranco2605/Summary-App-ChatGPT-4')}
                className='black_btn'
               >
                GitHub
            </button>
        </nav>
        <h1 className='head_text'>
            Riassumi Articoli con <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAi GPT-4</span> 
        </h1>
        <h2 className='desc'>
        Semplifica la tua lettura con Riassunt, un'app open-source che trasforma lunghi articoli in sintesi chiare e concise.
        </h2>
    </header>
  )
}

export default Hero