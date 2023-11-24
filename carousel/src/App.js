import Carousel from './components/Carousel';
import { slides } from './data/carouselData';

export default function App() {
  return (
    <>
      <Carousel slides={slides} />
    </>
  );
}
