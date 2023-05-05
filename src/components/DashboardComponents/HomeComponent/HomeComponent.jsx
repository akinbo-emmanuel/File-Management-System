import ShowItems from "../ShowItems/ShowItems";

const HomeComponent = () => {
    const files = [ "New file", "new file 2"];

  return (
    <div className="col-md-12 w-100">
        <ShowItems title={"Uploaded Files"} items={files}/>
    </div>
  )
}

export default HomeComponent