import { NoMovies, LoadContainerMovies } from '.';
import { savedMovies } from '../features/storage';

function Home() {
  return <>{!savedMovies.length ? <NoMovies /> : <LoadContainerMovies />}</>;
}
export default Home;
