import Image from 'next/image';
import { useState } from 'react';

import { CarouselS, image, cardsS, card, text } from './style.module.css';

const images = [
  {
    id: '1',
    src: 'https://stored-cf.slickpic.com/MjYwMDgzY2FhYTc1MmE,/20200626/MTcwMDk3OTlhNzIy/pn/1900/Mt_Tombstone_1363_2_1920px.webp',
    alt: '',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam reprehenderit neque hic voluptatem perspiciatis esse iure nostrum! Non obcaecati suscipit deleniti ipsam laudantium et harum rerum maxime eaque dicta?',
  },
  {
    id: '2',
    src: 'https://stored-cf.slickpic.com/MjYwMDgzY2FhYTc1MmE,/20200626/MTcwMDk3NjhhNWEy/pn/1900/Mesa_Arch_4309_1920px.webp',
    alt: '',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam reprehenderit neque hic voluptatem perspiciatis esse iure nostrum! Non obcaecati suscipit deleniti ipsam laudantium et harum rerum maxime eaque dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam reprehenderit neque hic voluptatem perspiciatis esse iure nostrum! Non obcaecati suscipit deleniti ipsam laudantium et harum rerum maxime eaque dicta?',
  },
  {
    id: '3',
    src: 'https://stored-cf.slickpic.com/MjYwMDgzY2FhYTc1MmE,/20200626/MTcwMDk4NTVhYTc3/pn/1900/Vancouver_from_Stanley_Park_8385_16x9.webp',
    alt: '',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam reprehenderit neque hic voluptatem perspiciatis esse iure nostrum! Non obcaecati suscipit deleniti ipsam laudantium et harum rerum maxime eaque dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam reprehenderit neque hic voluptatem perspiciatis esse iure nostrum! Non obcaecati suscipit deleniti ipsam laudantium et harum rerum maxime eaque dicta?',
  },
  {
    id: '4',
    src: 'https://stored-cf.slickpic.com/MjYwMDgzY2FhYTc1MmE,/20200626/MTcwMDk4MjJjNTVh/pn/1900/Paris_6798_16x9.webp',
    alt: '',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam reprehenderit neque hic voluptatem perspiciatis esse iure nostrum! Non obcaecati suscipit deleniti ipsam laudantium et harum rerum maxime eaque dicta?',
  },
];

export const Carousel = () => {
  const [Index, setIndex] = useState(0);

  const cardsList = (
    <>
      <div className={card}>
        <div className={image}>
          <Image
            alt={images[Index]?.alt}
            src={images[Index]?.src}
            width={1900}
            height={1000}
          />
        </div>

        <div className={text}>{images[Index]?.text}</div>
      </div>

      <div className={card}>
        <div className={image}>
          <Image
            alt={images[Index + 1]?.alt}
            src={images[Index + 1]?.src}
            width={1900}
            height={1000}
          />
        </div>

        <div className={text}>{images[Index + 1]?.text}</div>
      </div>
    </>
  );

  const handleNext = () => {
    setIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setIndex(prev => prev - 1);
  };

  return (
    <div className={CarouselS}>
      <button
        disabled={Index <= 0}
        onClick={handlePrev}
      >
        &lt;
      </button>

      <div className={cardsS}>{cardsList}</div>

      <button
        disabled={Index >= images.length - 1}
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};
