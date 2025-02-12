import Hero from "../components/Hero";
import SplineImg from "../components/SplineImg";
import Spotlight from "../components/Spotlight";

export default function Home() {

  const targetDate = new Date('2025-03-31T23:59:59').getTime();

  return (
    <div className="overflow-x-hidden">
      <Hero targetDate={targetDate} />
      <SplineImg />
      <Spotlight />
    </div>
  );
}
