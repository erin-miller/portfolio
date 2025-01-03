export default function ToonAPICalc() {
  return (
    <div className="page-length text-darkmoss py-24">
      <div className="project-title">Toon API Calculator</div>
      <div className="text-2xl">
        <div className="project-header">What is it?</div>
        <div className="project-desc">
          The toon API calculator is a npm package aimed towards{" "}
          <a
            className="project-link"
            href="https://toontownrewritten.com/"
            target="_blank"
          >
            Toontown Rewritten
          </a>{" "}
          developers utilizing the{" "}
          <a
            className="project-link"
            href="https://github.com/ToontownRewritten/api-doc/blob/master/local.md"
            target="_blank"
          >
            companion app API
          </a>
          . It provides best path advising for various parts of a toon's data.
        </div>

        <div className="project-header">Challenges</div>
        <div className="project-desc">
          <div>
            Most of the calculator depends on best path algorithms and comparing
            probabilities. The suit and fish calculator proved to be the most
            difficult to find a good balance.
          </div>
          <div>
            The suit calculator determines the most efficient order of
            activities to complete to reach a level up. Each activity is weighed
            by the amount it gives and how much time they take. However,
            Toontown Rewritten has made changes to a lot of the Toontown Online
            code, and the playerbase does not know the exact amount each
            activity provides.
          </div>
          <div>
            Furthermore, a lot of the activities provide a variable amount. To
            create an effective algorithm, I allowed for some overhead for each
            activity. This resulted in decent results, but it revealed paths
            that normal players generally avoid.
          </div>
          <div>
            Most players would rather repeat the same activity over and over
            (especially if it is easier to find a group) than hop between
            various ones. Adjusting the algorithm to reflect this was difficult,
            but I was mostly successful.
          </div>
          <div>
            The fish calculator was my own personal nightmare. There is a bit of
            information available for the old fishing algorithm and rates, but
            Toontown Rewritten recently remade the entire fishing system. No one
            but the team knows all locations a fish can be caught at or any of
            the variables regarding probabilities.
          </div>
          <div>
            To get around this, I based my calculations on the original Toontown
            Online values with some adjustments. Some locations, such as Chip &
            Dales Acorn Acres, are not included in any fish's location data due
            to a complete lack of knowledge in the area.
          </div>
          <div>
            I spent a lot of time asking knowledgeable people in the community
            on what they know about fishing and fish odds. The current fish
            calculator is effective for my standards, but we will never know if
            it is accurate or not unless the Toontown Rewritten team tells us.
          </div>
          <div>
            Finally, I had to find and compile all of the needed data for each
            calculator. This included gathering every fish's locations and
            rarities as well as defining all golf trophies and flower
            combinations. This task was quite tedious but I enjoyed it
            nonetheless.
          </div>
        </div>
        <div className="project-header">Outcome</div>
        <div className="project-desc">
          I learned a ton through this project, especially how to read data and
          determine a way to manipulate it. I have never deployed an npm package
          before and encountered a lot of quirks. While it was a little annoying
          at times, I really enjoyed making this package.
        </div>
        <div className="project-header">Stack</div>
        <div className="project-desc">JavaScript, Node.js</div>
      </div>
    </div>
  );
}
