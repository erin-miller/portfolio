import SplashAnim from "./splashAnim";

export default function Home() {
  return (
    <div className="w-2/3 py-64 text-darkmoss">
      <div className="font-bold text-5xl justify-center dotted-border">
        <div className="text-cbrown h1">
          <SplashAnim />
        </div>
      </div>
      <div className="text-2xl pt-3 pl-2 max-w-2xl py-10">
        <p>
          Hi there, my name is Erin Miller. I'm passionate about building
          software that drives positive change in the environment. From design
          to clean code, I love bringing projects to life from the ground up.
        </p>
      </div>
    </div>
  );
}
