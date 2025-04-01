// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/Things/theme_pattern.svg'
// const MyWork = () => {
//   return (
//     <div className='mywork'>
//       <div className="mywork-title">
//         <h1>My Work</h1>
//         <img src={theme_pattern} alt='' />
//       </div>
//       <div className="mywork-container">
        
//       </div>
//     </div>
//   )
// }

// export default MyWork
import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/Things/theme_pattern.svg';
import work1 from '../../assets/Things/Edusity.png';
import work2 from '../../assets/Things/Capstone.png';
import work3 from '../../assets/Things/ScreenTime.png';
const MyWork = () => {
  const mywork_data = [
    {
      w_no:1,
      w_name:'Edusity',
      w_img:work1,
      github:'https://github.com/lakshyabapna/My_Edusity_App'
    },
    {
      w_no:2,
      w_name:'Screen Tab Time Tracker',
      w_img:work3,
      github:'https://github.com/lakshyabapna/Tab-Time-Tracker'
    },
    {
      w_no:3,
      w_name:'Capstone',
      w_img:work2,
      github:'https://github.com/lakshyabapna/capstone'
    }
  ];

  return (
    <div className='mywork'>
      <img className = 'mywork-img' src={theme_pattern} alt='' />
      <div className="mywork-title">
        <h1>My Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((project) => (
          <div key={project.w_no} className="work-card">
            <img src={project.w_img} alt={project.w_name} className="work-image" />
            <h2>{project.w_name}</h2>
            <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;


