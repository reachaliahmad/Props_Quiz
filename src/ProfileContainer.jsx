import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';

const ProfileContainer = () => {
  const userData = {
    image: '/photo1.jpg',
    name: 'Ali Ahmad',
    followers: 1234,
    posts: 567,
    likes: 890
  };

  return (
    <div className="profile-container">
      <ProfileHeader image={userData.image} name={userData.name} />
      <ProfileStats followers={userData.followers} posts={userData.posts} likes={userData.likes} />
    </div>
  );
};

export default ProfileContainer;
