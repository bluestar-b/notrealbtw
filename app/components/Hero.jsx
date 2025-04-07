import Image from 'next/image'


const Hero = () => {
    return (
      <div className="bg-black text-white flex flex-col lg:flex-row items-center justify-between py-10 h-screen">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">Amir Doxxing service</h1>
          <p className="text-xl mb-8">The Most Professional Gaslighting and Social Engineering Service Available! (We Promise.)</p>
          <p className="text-lg">Don’t be left in the dark about what’s real. Hire our team of psychological experts and get results (and some laughs) today!</p>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image
            loading="eager"
            src="/bg.jpg"
            height={512}
            width={341}
            alt="pic btw background"
          />
        </div>
      </div>
    );
}
  
export default Hero;
