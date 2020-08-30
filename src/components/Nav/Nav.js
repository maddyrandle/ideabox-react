import React from 'react';

const Nav = () => {
  return (
    <div className='navContainer'>
      <div className='topSection'>
        <h1 className='navH1'>IdeaBox</h1>
      </div>
      <div className='bottomSection'>
        <h3 className='navH3'>Filter Stared Ideas</h3>
        <button className='navBtn'>Show Starred Ideas</button>
      </div>
    </div>
  );
}

export default Nav;
