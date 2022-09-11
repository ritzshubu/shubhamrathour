import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mediumImg from '../public/assets/projects/medium.png';
import expressImg from '../public/assets/projects/expressnews.png';
import ijleImg from '../public/assets/projects/ijle.png';
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
          <ProjectItem
            title='Express NEWS'
            backgroundImg={expressImg}
            projectUrl='/express'
            tech='CMS PHP'
          />
          <ProjectItem
            title='IJLE'
            backgroundImg={ijleImg}
            projectUrl='/ijle'
            tech='REACT JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
