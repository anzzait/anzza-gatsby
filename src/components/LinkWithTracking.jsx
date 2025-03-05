// src/components/LinkWithTracking.jsx
import React from 'react';

const trackExternalLink = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      'event_category': 'external_link',
      'event_label': url,  // 任意の文字列をevent_labelとして使用
      'transport_type': 'beacon'
    });
  }
};

const LinkWithTracking = ({ href, target, rel, children }) => {
  const handleClick = () => {
    trackExternalLink(href);  // 任意の文字列をevent_labelとして渡す
  };

  return (
    <a href={href} target={target} rel={rel} onClick={handleClick}>
      {children}
    </a>
  );
};

export default LinkWithTracking;
