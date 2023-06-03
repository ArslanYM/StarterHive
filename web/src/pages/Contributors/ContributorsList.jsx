import ContributorItem from './ContributorItem'
import { useState, useEffect } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader'

import axios from 'axios';

const ContributorsList = () => {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div className="flex flex-wrap -m-2 justify-center items-center">
            <ScaleLoader 
                loading={loading}
                color='white'
            />

            {contributors.map((contributor, index) => {
                return <ContributorItem image={contributor.avatar_url} name={contributor.login} url={contributor.html_url} key={index} />
            })
            }
        </div>
    );
};

export default ContributorsList;