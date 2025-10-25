import React from 'react';

const ProfileStats = ({ followers, posts, likes }) => {
  return (
    <div className="profile-stats">
      <div className="stat">
        <span className="stat-label">Followers:</span> {followers}
      </div>
      <div className="stat">
        <span className="stat-label">Posts:</span> {posts}
      </div>
      <div className="stat">
        <span className="stat-label">Likes:</span> {likes}
      </div>
    </div>
  );
};

export default ProfileStats;
