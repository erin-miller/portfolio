export default function ToonScout() {
  return (
    <div className="page-length text-darkmoss py-24">
      <div className="project-title">ToonScout</div>
      <div className="text-2xl">
        <div className="project-header">What is it?</div>
        <div className="project-desc">
          ToonScout is designed to assist{" "}
          <a
            className="project-link"
            href="https://toontownrewritten.com/"
            target="_blank"
          >
            Toontown Rewritten
          </a>{" "}
          players by providing tools via the web application or through a
          Discord bot. It utilizes the{" "}
          <a
            className="project-link"
            href="https://github.com/ToontownRewritten/api-doc/blob/master/local.md"
            target="_blank"
          >
            companion app API
          </a>{" "}
          to get real-time data from the currently running character.
        </div>

        {/* images */}
        <div className="overflow-x-auto flex space-x-4 py-4">
          <div className="min-w-[200px] max-w-full flex-shrink-0">
            <img
              src="/images/toonscout/website_1.png"
              alt="Website Suits Example"
              className="project-example"
            />
          </div>
          <div className="min-w-[200px] max-w-[500px] flex-shrink-0">
            <img
              src="/images/toonscout/botcmd_1.png"
              alt="Bot Command 1"
              className="project-example"
            />
          </div>
        </div>

        <div className="project-header">Challenges</div>
        <div className="project-desc">
          <div>
            The companion app API server runs only when the game is active,
            meaning all API requests must be made locally. This creates
            limitations for expanding the project to other platforms, like
            mobile. However, the initial goal of the project was to provide
            tools through Discord commands.
          </div>
          <div>
            Having users set up and run a Discord bot on their own machines can
            be complicated and confusing. To solve this, a websocket is opened
            between the bot server (which runs on a VPS) and the web
            application.
          </div>
          <div>
            During the web app's setup, it asks the user to authenticate with
            Discord's OAuth process. The app stores the Discord user ID and
            links it to the incoming character data. This information is sent to
            the bot server and is updated in MongoDB. When a user executes a
            Discord command, the bot retrieves the character data tied to their
            ID.
          </div>
          <div>
            Furthermore, my lack of web development and UX design experience
            presented me with some difficulties when implementing a dark mode
            theme. I underestimated how difficult it would be to choose colors
            that not only fit each element but also maintained readability.
          </div>
          <div>
            After a little bit of research and choosing color palettes I
            enjoyed, I was able to strike a balance between design and
            usability.
          </div>
        </div>
        <div className="project-header">Outcome</div>
        <div className="project-desc">
          I entered this project with very minimal experience with nearly every
          tool and framework, particularly Next.js, MongoDB, and APIs. I gained
          invaluable experience by tinkering with every tool and creating
          something that I was proud of. I find ToonScout to be very useful as I
          play the game and it provides a positive impact on my play.
        </div>
        <div className="project-header">Stack</div>
        <div className="project-desc">
          Typescript, Next.js, TailwindCSS, React, Node.js, MongoDB, Express
        </div>
      </div>
    </div>
  );
}
