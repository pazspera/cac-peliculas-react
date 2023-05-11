import heart from "../assets/heart.svg";
import popcorn from "../assets/popcorn.svg";
import "./FooterComponent.css";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center py-3">
            <p className="d-flex align-items-center mb-0">
              <span>Made with </span>
              <img src={heart} alt="Heart" className="mx-1" />
              <span> and </span>
              <img src={popcorn} alt="Popcorn" className="mx-1" />
              <span>
                by{" "}
                <a href="https://github.com/pazspera" target="_blank" rel="noreferrer" className="link-line">
                  Paz Spera
                </a>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
