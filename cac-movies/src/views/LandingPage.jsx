import { MovieGrid } from "../components/MovieGrid";
import { HeroComponent } from "../components/HeroComponent";
import { PosterGrid } from "../components/PosterGrid";

export const LandingPage = () => {
  return (
    <>
      <HeroComponent />
      <MovieGrid />
      <PosterGrid route="/movie/upcoming" title="Upcoming Releases" />
    </>
  );
};
