import {getHeroesByPublisher} from "../helpers";
import {HeroesList} from "../components";

const DcPage = () => {
  const heroList = getHeroesByPublisher('DC Comics');
  return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Dc Heroes</h1>
            </div>
          </div>
          <div className="row">

            {
              heroList.map((hero) => (
                  <HeroesList
                      key={hero.id}
                      {...hero}
                  />
              ))
            }
          </div>
        </div>
      </>
  );
}

export default DcPage;