import MainTable from "../../../shared/components/Table/MainTable";
import HeaderStolenBikes from "./HeaderStolenBikes";

const StolenBikesContent = () => {
  return (
    <>
      <HeaderStolenBikes />
      <MainTable columns={[]} rows={[]} />
    </>
  );
};

export default StolenBikesContent;
