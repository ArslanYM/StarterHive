import ContributorItem from './ContributorItem'
import { useState, useEffect, useContext } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader'
import { ThemeContext } from '../../Context/ThemeContext';
import PropTypes from "prop-types";

import axios from 'axios';

const ContributorsList = ({ searchContributor }) => {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(true);

    const { current_theme } = useContext(ThemeContext).theme

    useEffect(() => {
        const fetchContributors = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://api.github.com/repos/ArslanYM/StarterHive/contributors',
                    {
                        headers: {
                            Authorization: ``,
                        },
                    }
                );
                setContributors(response.data);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

            fetchContributors();
    }, []);

    const filteredContributors = contributors.filter((contributor) => {
        return contributor.login.toLowerCase().includes(searchContributor.toLowerCase());
      });

    return (
        <div className="flex flex-wrap -m-2 justify-center items-center">
            <ScaleLoader 
                loading={loading}
                color={current_theme === 'dark' ? 'white' : 'black'}
            />

            { filteredContributors.map((contributor, index) => {
                return <ContributorItem image={contributor.avatar_url} name={contributor.login} url={contributor.html_url} key={index} />
            })
            }
        </div>
    );
};

export default ContributorsList;
ContributorsList.propTypes = {
    searchContributor: PropTypes.string,
  };