import React, { useEffect, useState } from 'react';

function ProfileAvatar() {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    let avatarId = 'Binx Bond'
    fetch('https://api.multiavatar.com/'+JSON.stringify(avatarId))
    .then(res => res.text())
    .then(svg => console.log(svg))
  }, []);

  return (
    <div>
      {avatarUrl && <img src={avatarUrl} alt="Profile Avatar" />}
    </div>
  );
}

export default ProfileAvatar;