import React, { useEffect, useState } from "react";

export default function Progressbar() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scroll = (scrollTop / pageHeight) * 100;
      setPercent(Math.ceil(scroll));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const progressBarStyle = {
    height: '4px',
    backgroundColor: '#4F46E5',
    width: `${percent}%`,
    transition: 'width 0.3s ease',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
  };

  return (
    <>
      <div id="progress-bar" style={progressBarStyle}></div>
    </>
  );
}
