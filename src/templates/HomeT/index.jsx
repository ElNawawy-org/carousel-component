import { Container } from 'src/atoms/Container';

//import { Carousel } from 'src/organisms/Carousel';
import { Carousel2 } from 'src/organisms/Carousel2';

import { HomeS } from './style.module.css';

export const HomeT = () => {
  return (
    <div className={HomeS}>
      <Container>
        {/*<Carousel />*/}
        <Carousel2 />
      </Container>
    </div>
  );
};
