// eslint-disable-next-line no-unused-vars
import React from 'react';
import Code from './CodeBlock';
import { Fab } from '../../components/Fab/Fab';
import { useInterectionObserver } from '../../hooks/useInterectionObserver';

const Guide = () => {
  const { isIntersecting, observerRef } = useInterectionObserver('200px');

  return (
    <main className="py-16">
      <div className="container max-w-screen-lg px-8 mx-auto space-y-8 text-white text-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Getting started 🗺️
        </h1>
        <p ref={observerRef}>
          This guide will help you to make your first contribution
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
            Step 1: Fork this repository
          </h2>

          <img
            src="https://user-images.githubusercontent.com/104521101/240342742-b2863384-753d-448b-9c8f-cc2122121c2b.png"
            alt="Fork"
            height={150}
            className="max-w-full mx-auto"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
          Step 2: Clone the forked repository
        </h2>

        <p>
          Now clone the forked repository to your machine. Go to your GitHub
          account, open the forked repository, click on the code button and then
          click the copy to clipboard icon.
        </p>
        <img
          src="https://user-images.githubusercontent.com/104521101/240346473-5947298f-dd52-478c-9cd9-f22791eea4a5.png"
          alt="clone"
          height={350}
          className="max-w-full mx-auto border border-slate-600 rounded-sm"
        />
        <p className="text-white">
          Open a terminal and run the following git command:
        </p>

        <Code command="git clone <URL you just copied>" />
        <p>The code will look something like this :</p>

        <Code command="git clone https://github.com/{your username}/StarterHive.git" />

        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
          Step 3: Move to the project directory
        </h2>
        <Code command="cd StarterHive/" />

        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
          Step 4: Add an upstream link to the main branch in your cloned repo
        </h2>

        <Code command="git remote add upstream https://github.com/ArslanYM/StarterHive" />

        <p>
          Keep your cloned repo up to date by pulling from upstream (this will
          also avoid any merge conflicts while committing new changes)
        </p>

        <Code command="git pull upstream main" />

        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
          Step 5: Create your feature branch (Required)
        </h2>

        <Code command="git checkout -b <feature-name>" />

        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
          Step 6: Make necessary changes
        </h2>

        <p>Add your commits to the staging</p>

        <Code command="git add ." />

        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
          Step 7: Commit the changes
        </h2>

        <p>commit those changes using the `git commit` command:</p>

        <Code command='git commit -m "Write a meaningful but small commit message&quot"' />

        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
          Step 8: Push your code
        </h2>

        <Code command="git push -u origin your-branch-name" />

        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
          Step 9: Create a PR on Github
        </h2>

        <p>
          Create a PR on Github. (Don&apos;t just hit the create a pull request
          button, you must write a PR message to clarify why and what are you
          contributing)
        </p>

        <p>
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
