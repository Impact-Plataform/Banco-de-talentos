import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Home() {
  return (
    <div>
      <Header mode="complete" />
      <Cards />
      <Footer />
    </div>
  );
}
