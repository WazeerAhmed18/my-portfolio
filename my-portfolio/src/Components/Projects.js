import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'; // Import Next.js Image component
import ProImg from '../assets/web.jpg';
import ECom from '../assets/ecom.jpg';
import NetFlix from '../assets/net.png';

const Projects = ({ image, title, href, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div 
        {...props} // Spread props to ensure AOS attributes are applied
        className="group relative w-64 h-64 bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:w-96">
        <Image
          src={image}
          alt={title}
          layout="fill" // Automatically makes the image responsive
          objectFit="cover" // Ensure the image covers the container
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <h2 className="text-white text-2xl font-bold transition-transform duration-300 ease-in-out transform group-hover:scale-105">
            {title}
          </h2>
        </div>
      </div>
    </a>
  );
};

const HoverExpandCards = () => {
  const cardsData = [
    {
      image: NetFlix,
      title: 'NetFlix Clone',
      href: 'https://wazeerahmed18.github.io/netflix-clone/', // Replace with actual project link
    },
    {
      image: ProImg,
      title: 'Nostra',
      href: 'https://wazeerahmed18.github.io/Nostra/', // Replace with actual project link
    },
    {
      image: ECom,
      title: 'E-Commerce',
      href: 'https://example.com/ecommerce', // Replace with actual project link
    },
  ];

  const [triggered, setTriggered] = useState(false);

  const onEnterViewport = () => {
    setTriggered(true);
  };

  const onExitViewport = () => {
    setTriggered(false);
  };

  const fadeInProps = useSpring({
    opacity: triggered ? 1 : 0,
    from: { opacity: 0.25 },
    config: { duration: 500 },
    onRest: () => {
      if (!triggered) {
        setTriggered(false);
      }
    },
  });

  useEffect(() => {
    AOS.init(); // Initialize AOS after the component mounts
  }, []);

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div className="flex flex-col items-center justify-center py-16 px-8 bg-black">
        <div className="font-bold mb-7 text-4xl">
          <animated.h1
            style={fadeInProps}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <span className="text-white">MY</span>{" "}
            <span className="text-green">
              <span className="word" style={{ opacity: triggered ? 1 : 0 }}>
                PROJECTS
              </span>
            </span>
          </animated.h1>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          className="mx-2 mb-8 text-slate-300 text-center text-sm sm:text-base md:mx-16 md:mb-12 lg:text-lg lg:mx-80 lg:mb-14"
        >
          Here’s a brief showcase of my projects: I’ve crafted innovative
          applications, responsive websites, and interactive experiences using
          modern web development tools and techniques.
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
          {cardsData.map((card, index) => (
            <Projects
              key={index}
              image={card.image}
              title={card.title}
              href={card.href}
              data-aos={index === 0 ? "zoom-in" : index === 1 ? "zoom-in" : "zoom-in"}
              data-aos-duration="1000"
              data-aos-delay="300"
            />
          ))}
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Projects;