import { Link } from "react-router-dom";
import "./HeroComponent.css";

export const HeroComponent = () => {
  return (
    <section className="hero py-5">
      <div className="container py-5">
        <div className="row">
          <h1 className="hero__title">Buzzing for a movie night?</h1>
          <p className="hero__text">We have you covered</p>
          <Link>
            <button className="btn btn-movie">Explore the hive</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
