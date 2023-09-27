import ContributorItem from './ContributorItem';
import { useState, useEffect, useRef } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import SearchTerm from './search/Search';

import axios from 'axios';

const ContributorsList = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [pageNo, setPageNo] = useState(1); 
  const [isMoreContributors, setIsMoreContributors] = useState(true); // Flag to check if there are more contributors to fetch
  const isInitialRender = useRef(true); // Initial render flag

  useEffect(() => {
    const fetchContributors = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/repos/ArslanYM/StarterHive/contributors?page=${pageNo}`,
          {
            headers: {
              Authorization: ``,
            },
          }
        );
        setContributors((prev) => prev.concat(response.data));
        setIsMoreContributors(response.data.length === 30);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    // Check if it's not the initial render before fetching data
    if (!isInitialRender.current) {
      fetchContributors();
    } else {
      // Set the initial render flag to false
      isInitialRender.current = false;
    }
  }, [pageNo]);

  const filtered = contributors.filter((entry) =>
    entry.login.toLowerCase().match(new RegExp(search.toLowerCase(), 'g'))
  );

  return (
    <>
      <div className="flex flex-wrap -m-2 justify-center items-center">
        <ScaleLoader loading={loading} color="white" />

        {!loading ? <SearchTerm setTerm={setSearch} /> : ''}

        {filtered.length
          ? filtered.map((contributor, index) => {
              return (
                <ContributorItem
                  image={contributor.avatar_url}
                  name={contributor.login}
                  url={contributor.html_url}
                  key={index}
                />
              );
            })
          : loading
          ? ''
          : `No result for ${search}`}
      </div>
      <div className="flex w-full justify-center items-center mt-12 my-8">
        {isMoreContributors ? (
          !loading && (
            <span
              className="hover:text-white border border-yellow-400 cursor-pointer px-4 py-2 rounded-full"
              onClick={() => setPageNo((prev) => prev + 1)}
            >
              Load More...
            </span>
          )
        ) : (
          <span className="italic">No more contributors</span>
        )}
      </div>
    </>
  );
};

export default ContributorsList;
