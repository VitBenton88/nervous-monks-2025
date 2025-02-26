import React from 'react';

interface SocialItem {
  href: string;
  icon: string;
}

const Social: React.FC = (): React.ReactNode => {
  const socialData: SocialItem[] = [
    {
      href: "https://open.spotify.com/artist/6bGro9VGKBorkwHf2prS1N",
      icon: "fa-spotify"
    },
    {
      href: "https://music.apple.com/us/artist/nervous-monks/1482596038",
      icon: "fa-apple"
    },
    {
      href: "https://music.youtube.com/channel/UChPuHzUFqC0gekc_HbRgluA",
      icon: "fa-youtube"
    },
    {
      href: "https://www.facebook.com/nervousmonks/",
      icon: "fa-facebook"
    },
    {
      href: "https://www.instagram.com/nervousmonks/",
      icon: "fa-instagram"
    },
    {
      href: "https://soundcloud.com/nervousmonks",
      icon: "fa-soundcloud"
    },
    {
      href: "https://nervousmonks.bandcamp.com/releases",
      icon: "fa-bandcamp"
    }
  ];

  const renderSocialIcon = ({ href, icon }: SocialItem): React.ReactNode => (
    <li key={icon} className="d-inline-block">
      <a href={href} target="_blank" rel="noreferrer">
        <i className={`fab ${icon}`}></i>
      </a>
    </li>
  );

  return (
    <ul id="social">
      {socialData.map(renderSocialIcon)}
    </ul>
  );
};

export default Social;