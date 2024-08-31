import AnimatedSection from "./AnimatedSection"

const Member = ({member,className}) => {
  return (

    <AnimatedSection animation={{
      transform: { start: 'translateY(100px)', end: 'translateY(0)' },
      delay: 300
    }}> 

    <div className={className}>
        <div className="member-img">
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h1>{member.name}</h1>
                <p>{member.role}</p>
              </div>
            </div>
    </div>

    </AnimatedSection>
  )
}

export default Member