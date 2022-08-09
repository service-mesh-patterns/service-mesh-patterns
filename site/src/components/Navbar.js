import React from 'react';
import NavStyleWrapper from "../sections/navbar.style";
import pattern from '../assets/images/brand/SVG/service-mesh-patterns-side.svg';

const Navbar = () => {
  return (
    <NavStyleWrapper>
      <div>
        <img src={pattern} alt="pattern" />
        <div className='text'>Book Chapters</div>
        <div className='text'>Patterns In-Action</div>
        <div className='text'>Meet the Authors</div>
        <div className='text'>About <span>l5</span> </div>
        {/* <Button>k</Button> */}
      </div>
    </NavStyleWrapper>
  );
}

export default Navbar