import { Container } from 'src/atoms/Container';

import { Carousel } from 'src/organisms/Carousel';

import { HomeS } from './style.module.css';

export const HomeT = () => {
  return (
    <div className={HomeS}>
      <Container>
        <Carousel />
      </Container>
    </div>
  );
};
