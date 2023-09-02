import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroById} from "../helpers/index.js";
import {useMemo} from "react";

export const HeroPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const onNavigateBack = () => {
    hero.publisher === 'DC Comics' ? navigate('/dc') : navigate('/marvel');
  }
  if (!hero) {
    return <Navigate to={'/marvel'}/>
  }

  const srcImage = `/assets/heroes/${id}.jpg`
  return (
      <div className={'row mt-5'}>
        <div className="col-12">
          <h1>HeroPage</h1>
        </div>

        <div className="col-4">
          <div className="card animate__animated animate__bounceInLeft">
            <img className="card-img-top img-fluid" src={srcImage} alt={hero.superhero}/>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-header">
              {hero.superhero}
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-2">
                <p className={'pb-3'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.</p>
                <footer className="blockquote-footer"><strong>Publisher: </strong> <cite
                    title="Source Title"> {hero.publisher}</cite></footer>
                <footer className="blockquote-footer"><strong>Alter Ego: </strong> <cite
                    title="Source Title"> {hero.alter_ego}</cite></footer>
                <footer className="blockquote-footer"><strong>Characters: </strong> <cite
                    title="Source Title">{hero.characters}</cite></footer>
                <footer className="blockquote-footer"><strong>First Appearance: </strong><cite
                    title="Source Title">{hero.first_appearance}</cite></footer>
              </blockquote>
            </div>
            <div className="card-body d-flex flex-column ">
              <button
                  onClick={onNavigateBack}
                  className={'btn btn-outline-primary'}>
                Return
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}


