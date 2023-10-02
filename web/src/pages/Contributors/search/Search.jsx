import PropTypes from "prop-types";
import search from "../../../assets/search.png";
export default function SearchTerm({ setTerm }) {
  return (
    <div className="w-full px-2 mb-14">
      <div className="border-yellow-400 border-2 rounded-3xl flex mx-auto w-96 max-w-full">
        <img src={search} alt="search" width={45} height={45} className="py-2 px-3"/>
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          className="flex-1 pr-4 w-fit outline-none bg-transparent text-yellow-500 font-medium placeholder:text-yellow-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

SearchTerm.propTypes = {
  setTerm: PropTypes.func.isRequired,
};