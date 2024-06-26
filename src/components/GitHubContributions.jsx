import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

export default function GitHubContributions() {
  const [blockSize, setBlockSize] = useState(6);
  const [blockMargin, setBlockMargin] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBlockSize(4);
        setBlockMargin(2);
      } else if (window.innerWidth < 768) {
        setBlockSize(5);
        setBlockMargin(2);
      } else {
        setBlockSize(12);
        setBlockMargin(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="calendar-container flex justify-center">
      <GitHubCalendar
        username="varungaikwad"
        blockSize={blockSize}
        blockMargin={blockMargin}
      />
    </div>
  );
}
