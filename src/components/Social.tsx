import React from 'react';

interface SocialProps {
  useIcons: boolean;
}

interface SocialItem {
  href: string;
  icon: string;
  label: string;
}

const Social: React.FC<SocialProps> = ({ useIcons }): React.ReactNode => {
  const socialData: SocialItem[] = [
    {
      href: 'https://open.spotify.com/artist/6bGro9VGKBorkwHf2prS1N',
      icon: 'fa-spotify',
      label: 'Spotify',
    },
    {
      href: 'https://music.apple.com/us/artist/nervous-monks/1482596038',
      icon: 'fa-apple',
      label: 'Apple',
    },
    {
      href: 'https://music.youtube.com/channel/UChPuHzUFqC0gekc_HbRgluA',
      icon: 'fa-youtube',
      label: 'YouTube',
    },
    {
      href: 'https://www.facebook.com/nervousmonks/',
      icon: 'fa-facebook',
      label: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/nervousmonks/',
      icon: 'fa-instagram',
      label: 'Instagram',
    },
    {
      href: 'https://soundcloud.com/nervousmonks',
      icon: 'fa-soundcloud',
      label: 'SoundCloud',
    },
    {
      href: 'https://nervousmonks.bandcamp.com/releases',
      icon: 'fa-bandcamp',
      label: 'Bandcamp',
    }
  ];

  const renderLinks = ({ href, icon, label }: SocialItem): React.ReactNode => (
    <li key={icon} className='d-inline-block'>
      <a href={href} target='_blank' rel='noreferrer'>
        {useIcons ? (<i className={`fab ${icon}`}></i>) : label }
      </a>
    </li>
  );

  return (
    <ul id='social'>
      {socialData.map(renderLinks)}
    </ul>
  );
};

export default Social;