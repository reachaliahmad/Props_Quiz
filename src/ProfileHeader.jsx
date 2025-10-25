import React from 'react';

const ProfileHeader = ({ image, name }) => {
  return (
    <div className="profile-header">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <h2>{name}</h2>
    </div>
  );
};

export default ProfileHeader;
