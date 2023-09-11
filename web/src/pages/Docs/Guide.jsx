// eslint-disable-next-line no-unused-vars
import React from 'react';
import Code from './CodeBlock';
import { Fab } from '../../components/Fab/Fab';
import { useInterectionObserver } from '../../hooks/useInterectionObserver';

const Guide = () => {
  const { isIntersecting, observerRef } = useInterectionObserver('200px');

  return (
    <main className="py-16">
      <div className="container max-w-5xl px-8 mx-auto space-y-16 ">
        <h1 className="text-5xl font-bold text-white">Getting started 🗺️</h1>

        <p className="max-w-md text-white" ref={observerRef}>
          This guide will help you to make your first contribution{' '}
        </p>
        {/* Step 1 */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            Step 1: Fork this repository
          </h2>

          <img
            src="https://user-images.githubusercontent.com/104521101/240342742-b2863384-753d-448b-9c8f-cc2122121c2b.png"
            alt="Fork"
            className="max-w-[80%]"
          />
        </div>

        {/*  Step 2 */}
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              Step 2: Clone the forked repository
            </h2>

            <p className="max-w-md text-white">
              Go to your GitHub account, open the forked repository, click on
              the code button and then click the copy to clipboard icon.
            </p>
            <p className="max-w-md text-white">
              Open a terminal and run the following git command:
            </p>

            <Code lang="bash">git clone &lt;URL you just copied&gt;</Code>
            <p className="max-w-md text-white">
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
          <h2 className="text-3xl font-semibold text-white">
            Step 3: Move to the project directory
          </h2>

          <Code>cd StarterHive/</Code>
        </div>

        {/* Step 4 */}

        <div className="space-y-4">
          <h2 className="max-w-xl text-3xl font-semibold text-white">
            Step 4: Add an upstream link to the main branch in your cloned repo
          </h2>

          <Code>
            git remote add upstream https://github.com/ArslanYM/StarterHive
          </Code>

          <p className="max-w-md text-white">
            Keep your cloned repo up to date by pulling from upstream (this will
            also avoid any merge conflicts while committing new changes)
          </p>

          <Code> git pull upstream main </Code>
        </div>

        {/* Step 5 */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            Step 5: Create your feature branch (Required)
          </h2>

          <Code> git checkout -b &lt;feature-name&gt; </Code>
        </div>

        {/* Step 6 */}

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            Step 6: Make necessary changes
          </h2>

          <p className="max-w-md text-white">Add your commits to the staging</p>

          <Code>git add .</Code>
        </div>

        {/* Step 7 */}

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            Step 7: Commit the changes
          </h2>

          <p className="max-w-md text-white">
            commit those changes using the `git commit` command:
          </p>

          <Code>
            git commit -m &quot;Write a meaningful but small commit
            message&quot;
          </Code>
        </div>

        {/* step 8 */}

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            Step 8: Push your code
          </h2>

          <Code>git push -u origin your-branch-name</Code>
        </div>

        {/* Step 9 */}

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            Step 9: Create a PR on Github
          </h2>

          <p className="max-w-md text-white">
            Create a PR on Github. (Don&apos;t just hit the create a pull
            request button, you must write a PR message to clarify why and what
            are you contributing)
          </p>
        </div>

        <p className="max-w-md text-white">
          Make sure you are following the Guidelines of this project while
          contributing. Take a look at{' '}
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
