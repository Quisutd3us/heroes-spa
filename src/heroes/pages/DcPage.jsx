import {HeroesList} from "../components";

const DcPage = () => {
  return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className={'display-4'}>Dc Heroes List</h1>
            </div>
          </div>
          <div className="row">

            {
              <HeroesList publisher={'DC Comics'}/>
            }
          </div>
        </div>
      </>
  );
}

export default DcPage;