import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const HeroCard = (
    {
      id,
      superhero,
      alter_ego,
      characters,
      first_appearance,
      publisher,
    }) => {
  const srcImage = `/assets/heroes/${id}.jpg`
  return (
      <div
          className={'col-xs-6 col-md-4 col-lg-3 my-4'}>
        <div className="card">
          <img className="card-img-top" src={srcImage} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title text-primary display-6">{superhero}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
              the
              card content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Publisher:</strong> {publisher}</li>
            <li className="list-group-item"><strong>Alter Ego:</strong> {alter_ego}</li>
            <li className="list-group-item"><strong>Characters:</strong> {characters}</li>
            <li className="list-group-item"><strong>First Appearance: </strong> {first_appearance}</li>
          </ul>
          <div className="card-body d-flex flex-column justify-content-center ">
            <Link
                className={'btn btn-outline-primary'}
                to={`/hero/${id}`}>
              More Info...
            </Link>
          </div>
        </div>
      </div>
  )
};

HeroCard.propTypes = {
  id:PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired
}