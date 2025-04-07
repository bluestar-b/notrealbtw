import Image from 'next/image'

const Hero = () => {
    return (
      <div className="bg-black text-white flex items-center justify-between py-10 h-screen">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Gaslight Inc.</h1>
          <p className="text-xl mb-8">The Most Professional Gaslighting and Social Engineering Service Available! (We Promise.)</p>
          <p className="text-lg">Don’t be left in the dark about what’s real. Hire our team of psychological experts and get results (and some laughs) today!</p>
        </div>
        <div className="hidden lg:block w-1/2">
        <Image
        src="/bg.jpg"
        height={500}
        width={500}
            alt="pic btw background"
          />
        </div>
      </div>
    );
  }
  
  export default Hero;