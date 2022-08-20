import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mediumImg from '../public/assets/projects/medium.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4'>My Works</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Medium App'
            backgroundImg={mediumImg}
            projectUrl='/medium'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
