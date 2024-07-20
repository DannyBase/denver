import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  // transform: "translateY(-50%)"
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#f65314"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
