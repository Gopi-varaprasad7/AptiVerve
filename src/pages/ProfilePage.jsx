import React from 'react';
import Topbar from '../components/profile_page/topbar';
import Details from '../components/profile_page/details';
import ProgressCard from '../components/profile_page/progress_card';

const ProfilePage = () => {
  return (
    <div>
      <Topbar />
      <Details />
      <ProgressCard />
    </div>
  );
};

export default ProfilePage;
