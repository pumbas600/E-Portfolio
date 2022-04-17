import React, {useEffect, useState} from "react"
import { GithubContribution, getContributionsBetween} from "../GithubIntegration";

const GithubContributions:React.FC = () => {

    const [contributions, setContributions] = useState<GithubContribution[]>([]);

    useEffect(() => {
        getContributions();
    }, []);

    const getContributions = async (): Promise<void> => {
        const to: Date = new Date();
        const from: Date = new Date(to.getFullYear(), to.getMonth() - 1, to.getDate());
        setContributions(await getContributionsBetween(from, to));
    }

    return (
        <div>
            {contributions.length !== 0 &&
            `you made ${contributions[0].contributions} on ${contributions[0].date.toLocaleDateString()}`}
        </div>
    )
}

export default GithubContributions;