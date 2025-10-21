
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="bg-slate-800 text-slate-300 text-sm font-medium px-4 py-2 rounded-md shadow-sm">
      {skill}
    </div>
  );
};

export default SkillBadge;
