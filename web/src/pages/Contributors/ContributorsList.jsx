import ContributorItem from "./ContributorItem";
let contributors = [
    { 'name': "Holden Caulfield", 'position': "UI Designer" },
    { 'name': "Henry Letham", 'position': "CTO" },
    { 'name': "Oskar Blinde", 'position': "Founder" }
]
const ContributorsList = () => {
    return (
        <div className="flex flex-wrap -m-2">
            {contributors.map((contrib, index) => {
                return <ContributorItem name={contrib.name} position={contrib.position} key={index} />
            })
            }
        </div>
    )
}

export default ContributorsList