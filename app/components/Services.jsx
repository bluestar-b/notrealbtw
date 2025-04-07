

const ServiceList = () => {
  const services = [
    {
      name: 'Personal Gaslighting',
      description: 'Need to make someone second-guess their life choices? We specialize in planting just enough doubt to keep them questioning everything.',
      price: '$499.99',
      tagLine: 'Because reality is overrated.',
    },
    {
        name: 'Doxxing',
        description: 'Life sucks maybe they wanted some doxxing in their life. We’ll find all the juicy details about your target and make sure they know we know.',
        price: 'Free',
        tagLine: 'Life sucks maybe made it even more sucky.',
      },
      {
        name: 'Break Your Own Relationship',
        description: 'Ever wanted to break up with someone, but just couldn’t bring yourself to do it? Our team will ghost you, send confusing mixed signals, and make sure you’ll never be able to look them in the eye again. It’s the break-up of a lifetime.',
        price: '$299.99',
        tagLine: 'Get out of that relationship... without even trying.',
      },
      {
        name: 'Lie Helping Service',
        description: 'We don’t just help you lie, we make you a *master* of deception. Whether you need to cover up a small mistake or tell a *whopper* of a fib, we’ll coach you until your lies are so believable, even *you* will start to believe them.',
        price: '$399.99',
        tagLine: 'Your new best friend: truth’s worst enemy.',
      },
    {
      name: 'Professional Social Engineering',
      description: 'Need to infiltrate a conversation? A friendship? Your boss’s office? We’ve got you covered. We will charm, persuade, and manipulate—ethically, of course.',
      price: '$799.99',
      tagLine: 'No one’s too clever for us.',
    },
    {
      name: 'Full-Scale Manipulation Package',
      description: 'We go deep. Full psychological warfare. We’ll have people eating out of your hand, wondering why they ever thought they were in control.',
      price: '$1,199.99',
      tagLine: 'Mind control, but make it fashionable.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Our Premium Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-black p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
            <p className="text-white font-bold mt-4">{service.price}</p>
            <p className="text-gray-300 font-semibold italic mt-2">{service.tagLine}</p>
            <button className="mt-4 w-full py-2 text-white rounded-lg bg-gradient-to-tr from-zinc-500 from-50 to-gray-500 to-100 hover:from-gray-400 hover:to-gray-600 transition duration-300">
              Hire Now
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12 h-screen">
        <h3 className="text-2xl font-semibold">Get Real, Seriously!</h3>
        <p className="text-gray-300 mt-2">
            
            
    Get real, okay? You seriously think this is all fun and games? Have you even considered the *legal implications* of dabbling in the art of mind manipulation? We're talking *international laws*, buddy. Different countries have different rules, and some of them are *super* strict. We're talking fines, jail time, and possibly an international manhunt if you cross the wrong line. Do you really think you can handle that level of responsibility? Because once you start, you can't just "un-send" a thought. It's a *one-way street* from here. Manipulating minds, planting doubts, twisting truths—there's no undo button for that kind of chaos. So before you go any further, maybe think about how much you’re willing to risk... and how far the law will come for you. 
     
        </p>
      </div>
    </div>
  );
}

export default ServiceList;
