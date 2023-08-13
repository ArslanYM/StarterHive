// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Code from "./CodeBlock";
import { ThemeContext } from "../../Context/ThemeContext";
import { Fab } from "../../components/Fab/Fab";
import { useInterectionObserver } from "../../hooks/useInterectionObserver";

const Guide = () => {
  const { theme } = useContext(ThemeContext);

  const { isIntersecting, observerRef } = useInterectionObserver("200px");

  return (
    <main className="py-16">
      <div className="container max-w-5xl px-8 mx-auto space-y-16 ">
        <h1 className={`text-5xl font-bold ${theme.text_Color}`}>
          Getting started 🗺️
        </h1>

        <p className={`max-w-md ${theme.text_Color}`} ref={observerRef}>
          This guide will help you to make your first contribution{" "}
        </p>
        {/* Step 1 */}
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
            Step 1: Fork this repository
          </h2>

          <img
            src="https://user-images.githubusercontent.com/104521101/240342742-b2863384-753d-448b-9c8f-cc2122121c2b.png"
            alt="Fork"
            className="max-w-3xl"
          />
        </div>

        {/*  Step 2 */}
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
              Step 2: Clone the forked repository
            </h2>

            <p className={`max-w-md ${theme.text_Color}`}>
              Go to your GitHub account, open the forked repository, click on
              the code button and then click the copy to clipboard icon.
            </p>
            <p className={`max-w-md ${theme.text_Color}`}>
              Open a terminal and run the following git command:
            </p>

            <Code lang="bash">git clone &lt;URL you just copied&gt;</Code>
            <p className={`max-w-md ${theme.text_Color}`}>
              The code will look something like this :
            </p>

            <Code lang="Shell">
              git clone https://github.com/&lt;your username&gt;/StarterHive.git
            </Code>
          </div>

          <img
            src="https://user-images.githubusercontent.com/104521101/240346473-5947298f-dd52-478c-9cd9-f22791eea4a5.png"
            alt="clone"
            className="w-full"
          />
        </div>

        {/* Step 3 */}

        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
            Step 3: Move to the project directory
          </h2>

          <Code>cd StarterHive/</Code>
        </div>

        {/* Step 4 */}
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
            Step 4: Install dependencies
          </h2>
          <p className={`max-w-md ${theme.text_Color}`}>
              Move to source directory by typing the comment below.
            </p>

          <Code>cd web/src</Code>
          <p className={`max-w-md ${theme.text_Color}`}>
              You need to install dependencies used for this project. It will download all the necessary dependices automatically.
            </p>
            <Code>npm install</Code>
        </div>
        {/* Step 5 */}

        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
            Step 5: To run app
          </h2>

          <Code>npm run dev --host</Code>
        </div>

        {/* Step 6 */}

        <div className="space-y-4">
          <h2 className={`max-w-xl text-3xl font-semibold ${theme.text_Color}`}>
            Step 6: Add an upstream link to the main branch in your cloned repo
          </h2>

          <Code>
            git remote add upstream https://github.com/ArslanYM/StarterHive
          </Code>

          <p className={`max-w-md ${theme.text_Color}`}>
            Keep your cloned repo up to date by pulling from upstream (this will
            also avoid any merge conflicts while committing new changes)
          </p>

          <Code> git pull upstream main </Code>
        </div>

        {/* Step 7 */}
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
            Step 7: Create your feature branch (Required)
          </h2>

          <Code> git checkout -b &lt;feature-name&gt; </Code>
        </div>

        {/* Step 8 */}

        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
            Step 8: Make necessary changes
          </h2>

          <p className={`max-w-md ${theme.text_Color}`}>
            Add your commits to the staging
          </p>

          <Code>git add .</Code>
        </div>

        {/* Step 9 */}

        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
            Step 9: Commit the changes
          </h2>

          <p className={`max-w-md ${theme.text_Color}`}>
            commit those changes using the `git commit` command:
          </p>

          <Code>
            git commit -m "Write a meaningful but small commit message"
          </Code>
        </div>

        {/* step 10 */}

        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
            Step 10: Push your code
          </h2>

          <Code>git push -u origin your-branch-name</Code>
        </div>

        {/* Step 11 */}

        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold ${theme.text_Color}`}>
            Step 9: Create a PR on Github
          </h2>

          <p className={`max-w-md ${theme.text_Color}`}>
            Create a PR on Github. (Don't just hit the create a pull request
            button, you must write a PR message to clarify why and what are you
            contributing)
          </p>
        </div>

        <p className={`max-w-md ${theme.text_Color}`}>
          Make sure you are following the Guidelines of this project while
          contributing. Take a look at{" "}
          <a
            href="https://github.com/ArslanYM/StarterHive/blob/main/GUIDELINES.md"
            className="text-purple-400 underline"
          >
            Contribution Guidelines
          </a>
        </p>
      </div>
      <Fab isVisible={isIntersecting} />
    </main>
  );
};

export default Guide;