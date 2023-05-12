/* import { MovieGrid } from "../components/MovieGrid"; */
import { HeroComponent } from "../components/HeroComponent";
import { PosterGrid } from "../components/PosterGrid";
import { RecommendedCardGrid } from "../components/RecommendedCardGrid";

export const LandingPage = () => {
  return (
    <>
      <HeroComponent />
      <PosterGrid route="/movie/now_playing" title="Currently on cinemas" />
      {/* <MovieGrid /> */}
      <RecommendedCardGrid></RecommendedCardGrid>
      <PosterGrid route="/movie/upcoming" title="Upcoming Releases" />
    </>
  );
};
