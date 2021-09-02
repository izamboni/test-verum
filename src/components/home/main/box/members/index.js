import './styles.css';

function Members ({ active, members }) {

    const customClass= active ? 'active' : '';
    return (
        <div className={`members ${customClass}`}>
            <div className={`list-members ${customClass}`}>
                {members.map(member => (
                    <div key={member.name}>
                        <h4>{member.name}</h4>
                        <h5>Race: {member.race}</h5>
                        <h5>Class: {member.job}</h5>
                        <h6><a href={member.wiki} target="_blank" rel="noreferrer">More Info</a></h6>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Members;