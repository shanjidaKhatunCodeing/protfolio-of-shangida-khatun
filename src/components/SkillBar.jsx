import React, { useState } from 'react';
import Flex from './Flex';
const SkillBar = ({ skillName, skillLevel }) => {
  const [progress, setProgress] = useState(0);

  // Update the progress state when the component mounts
  React.useEffect(() => {
    setProgress(skillLevel);
  }, [skillLevel]);

  return (
    <div className="skill-bar">
      <Flex className='justify-between'>
        <div className="skill-name">{skillName}</div>
        <div className="skill-level">{`${progress}%`}</div>
      </Flex>
      <div className="progress-bar-container">
        <div className="progress-bar bg-primaryColor" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
