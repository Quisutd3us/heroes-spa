import {HeroesList} from "../components";

const MarvelPage=()=> {
  return (
      <>
          <div className="row">
            <div className="col-xs-12">
              <h1 className={'display-4'}>Marvel Heroes List</h1>
            </div>
          </div>
          <div className="row">
            {
              <HeroesList publisher={'Marvel Comics'}/>
            }
          </div>
      </>
  );
}

export default MarvelPage;