import ContributorItem from './ContributorItem'
import { useState, useEffect } from 'react';

import axios from 'axios';

const ContributorsList = () => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        const fetchContributors = async () => {
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
        };

        fetchContributors();
    }, []);

    return (
        <div className="flex flex-wrap -m-2">
            {contributors.map((contributor, index) => {
                return <ContributorItem image={contributor.avatar_url} name={contributor.login} url={contributor.html_url} key={index} />
            })
            }
        </div>
    );
};

export default ContributorsList;