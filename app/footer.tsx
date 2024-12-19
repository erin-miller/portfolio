export default function Footer() {
  return (
    <footer className="text-cbrown py-4 mt-10">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/erin-miller"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-darkmoss flex items-center space-x-2"
        >
          <img src="/github-mark.svg" alt="GitHub" className="w-6 h-6" />
          <span>GitHub</span>
        </a>
        <a
          href="mailto:erinm1018@gmail.com"
          className="hover:text-darkmoss flex items-center space-x-2    "
        >
          <img src="/email.svg" alt="Email" className="w-6 h-6" />
          <span>Email</span>
        </a>
      </div>
    </footer>
  );
}
