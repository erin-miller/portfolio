import SplashAnim from "./components/splashAnim";

export default function Home() {
  return (
    <div className="page-length py-32 text-darkmoss">
      <div className="justify-center dotted-border">
        <div className="splash">
          <SplashAnim />
        </div>
      </div>
      <div className="text-2xl pt-3 pl-2 max-w-2xl">
        <p>
          Hi there, my name is Erin Miller. I&apos;m passionate about building
          software that drives positive change in the environment. From design
          to clean code, I love bringing projects to life from the ground up.
        </p>
      </div>
    </div>
  );
}
