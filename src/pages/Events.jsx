import React, {useEffect, useState} from 'react'
import { events } from '../utilities/events'
import { motion } from 'framer-motion'

const Events = () => {
  return (
    <div className='pt-28 lg:pt-40 bg-[#0f1616] min-h-screen'>
      <div className='w-5/6 max-w-6xl mx-auto'>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg text-center">
          My Tech Adventures: Events, Conferences & Meetups
        </h2>

        <p className="text-lg text-gray-200 my-3">
          Sharing my experiences from the amazing tech events I attend 🎤✨
        </p>

        <div className="my-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center gap-10 py-20"
            >
              <h2 className="text-green text-lg font-semibold py-5">{event.title}</h2>
              <ImageCarousel images={event.images} />
              <p className="text-lightgray text-base font-medium leading-8">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="carousel rounded-lg overflow-hidden">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`carousel-item w-full transition-opacity duration-700 ${
              idx === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <img src={image} className="w-full object-center h-[400px] rounded-lg" alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Events
