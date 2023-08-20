# Contributing to a Vite-Powered React Project 🚀

Welcome to our open-source React project, which is powered by Vite! This guide will assist you in navigating the contribution process, ensuring a smooth and productive experience. Let's dive right in! 🛠️

## Prerequisites 📋

Before you get started, please ensure that your system has the following software installed:

- **Git**: A version control system. [You can download it here](https://git-scm.com/downloads/) 🧑‍💻
- **Node.js**: A JavaScript runtime. [You can download it here](https://nodejs.org/en/download) 🟢
- **npm**: The Node Package Manager, which comes included with the Node.js installation 📦


## Contributing 🤝

### Step 1: Fork the Repository 🍴

![Fork](https://github.com/ArslanYM/StarterHive/assets/104521101/b2863384-753d-448b-9c8f-cc2122121c2b)

- Start by forking this repository. Simply click the "Fork" button located in the top right corner of this page. 🚀


### Step 2: Clone Your Fork 📂

![Clone](https://github.com/ArslanYM/StarterHive/assets/104521101/ffe2cb3b-d7e9-41fb-a7e6-8f5ca9d50dd0)

- Next, clone your forked repository to your local machine. Go to your GitHub account, open the forked repository, click the "Code" button, and copy the repository's URL. Then, open your terminal and execute the following command:

   ```
   git clone "URL you just copied"
   ```
Replace "URL you just copied" with the URL you obtained from your forked repository. 🖥️

![opy](https://github.com/ArslanYM/StarterHive/assets/104521101/5947298f-dd52-478c-9cd9-f22791eea4a5)

The code will look something like this : 
```
git clone https://github.com/{your user name}/StarterHive.git
```


### Step 3: Navigate to the Project Directory 📁
- Change your terminal's current directory to the project's "web" folder:

```
cd StaterHive/web
```


### Step 4: Install Dependencies 📦

In the web directory, install the required dependencies by running the following command:

```
npm install
```
This command will download and install all the packages specified in the project's package.json file. 📥

### Step 5: Create a New Branch 🌿
Create a new branch for your work. It's best to choose a branch name that clearly reflects the purpose of your changes. Use the following command:

```
git checkout -b my-feature
```

- Replace "my-feature" with a descriptive branch name. 🌟

### Step 6: Make and Test Your Changes ✍️
Now, you can make the necessary code adjustments using your preferred code editor. To test your changes locally, run the project with:

```
npm run dev
```
This command initiates the development server and builds the project. Open your web browser and visit the provided URL to observe your changes. Thoroughly test to ensure everything functions as expected. ✅

### Step 7: Commit and Push Your Changes ☑️
Once you're satisfied with your changes, it's time to commit them. First, stage your changes with:

```
git add .
```

- This command stages all modified files.

- Commit your changes with a descriptive message:

```
git commit -m "Add my feature"
```
- Replace "Add my feature" with a brief description of your changes. 📝

- Push your changes to your forked repository:

```
git push origin my-feature
```
- Replace "my-feature" with the name of your branch. 🚢

### Step 8: Create a Pull Request(PR) 🚀
Head over to the main repository on GitHub. You should see a message indicating that you've recently pushed a branch. Click on the "Compare & pull request" button. 🔄

Review your changes and provide a meaningful title and comment for your pull request. 💬

Finally, click "Create pull request" to submit your contribution. 📤

Congratulations! You've successfully contributed to our Vite-powered React project. Our project maintainers will review your pull request. 🎉

Thank you for your valuable contribution! 👏
