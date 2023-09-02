import {HeroesList} from "../components";

const DcPage = () => {
  return (
      <>
        <div className="row">
          <div className="col">
            <h1 className={'display-4'}>Dc Heroes List</h1>
          </div>
        </div>
        <div className="row">

          {
            <HeroesList publisher={'DC Comics'}/>
          }
        </div>
      </>
  );
}

export default DcPage;