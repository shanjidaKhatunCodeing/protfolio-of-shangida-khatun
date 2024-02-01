import React from 'react';
import { Circle } from 'react-circle';

const CircularProgress = ({ percentage }) => {
return (
<div>
<Circle
progress={percentage}
animate={true} // Set to true for animation
responsive={true} // Make it responsive
size={100} // Diameter of the circle
lineWidth={10} // Width of the circle bar
containerStyle={{ width: '200px', height: '100px' }} // Size of the container
containerClassName={'circle-container'} // Classname for the container
/>
</div>
);
};

export default CircularProgress;
