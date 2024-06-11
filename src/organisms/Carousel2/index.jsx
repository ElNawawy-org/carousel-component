import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { image, cardS, text } from './style.module.css';

const cards = [
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

export const Carousel2 = () => {
  const cardsList = cards.map(card => (
    <div
      key={card.id}
      className={cardS}
    >
      <div className={image}>
        <Image
          alt={card.alt}
          src={card.src}
          width={1900}
          height={1000}
        />
      </div>

      <div className={text}>{card.text}</div>
    </div>
  ));

  return (
    <Carousel
      autoPlay={true}
      centerMode={true}
      centerSlidePercentage={80}
      infiniteLoop={true}
      showIndicators={false}
      transitionTime={500}
      useKeyboardArrows={true}
      showThumbs={false}
      interval='3000'
      swipeable={true}
    >
      {cardsList}
    </Carousel>
  );
};
