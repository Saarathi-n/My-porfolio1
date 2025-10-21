import React from 'react';

// A simple component to represent a skill card with a logo placeholder
const SkillCard = ({ name, logoUrl }) => (
  <div className="card skill-card">
    <div className="skill-logo-placeholder">
      {/* In a real app, replace this with an actual image, e.g., <img src={logoUrl} alt={`${name} logo`} /> */}
      <span className="logo-placeholder-text">Logo</span>
    </div>
    <div className="skill-name">{name}</div>
  </div>
);

const Skills = () => {
  return (
    <section className="section">
      <h2>Skills</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <SkillCard name="React" logoUrl="/logos/react.svg" />
        <SkillCard name="Node.js" logoUrl="/logos/nodejs.svg" />
        <SkillCard name="JavaScript" logoUrl="/logos/javascript.svg" />
        <SkillCard name="TypeScript" logoUrl="/logos/typescript.svg" />
        <SkillCard name="MongoDB" logoUrl="/logos/mongodb.svg" />
        <SkillCard name="SQL" logoUrl="/logos/sql.svg" />
        <SkillCard name="CSS" logoUrl="/logos/css.svg" />
        <SkillCard name="HTML" logoUrl="/logos/html.svg" />
      </div>
    </section>
  );
};

export default Skills;