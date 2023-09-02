import PropTypes from "prop-types";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';
import {useForm} from "../../hooks/useForm.js";
import {HeroCard} from "../components/";
import {getHeroByName} from "../helpers";

export const SearchPageMessages = ({heroes, q}) => {
  if (Object.keys(heroes).length === 0) return (
      <div className="alert alert-danger" role="alert">
        <strong>{q} </strong>Hero, Dont exist...
      </div>
  )
  return (
      <div className="alert alert-success" role="alert">
        Find <b>{heroes.length}</b> Heroes..
      </div>
  )
}

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const {nameHero, onInputChange} = useForm({
    nameHero: q
  })
  const onInputHero = (e) => {
    e.preventDefault();
    if (nameHero.trim().length <= 1) return;
    navigate(`?q=${nameHero}`)
  }

  return (
      <>
        <div className="row">
          <div className="col">
            <form
                onSubmit={onInputHero}
            >
              <div className="form-group">
                <label htmlFor="nameHero ">Search Hero</label>
                <input
                    type="text"
                    className="form-control my-3"
                    id="nameHero"
                    name={'nameHero'}
                    placeholder="Example Superman"
                    value={nameHero}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mb-2">Search
                </button>
              </div>
            </form>
          </div>
          <div className="col mt-4">

            <SearchPageMessages
                heroes={heroes}
                q={q}
            />

            <div className="row">
              {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
              }
            </div>
          </div>
        </div>
      </>
  )
}

SearchPageMessages.propTypes = {
  heroes: PropTypes.array.isRequired,
  q: PropTypes.string.isRequired
}


