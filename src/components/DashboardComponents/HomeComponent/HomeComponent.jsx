import ShowFolders from "../ShowFolders/ShowFolders";
import ShowItems from "../ShowItems/ShowItems";

const HomeComponent = () => {
    const files = [ "New file", "new file 2"];
    const folders = [ "New folder", "new folder 2"];

  return (
    <div className="col-md-12 w-100">
      <ShowFolders title={"Created Folders"} items={folders} />
      <ShowItems title={"Uploaded Files"} items={files} />
    </div>
  )
}

export default HomeComponent