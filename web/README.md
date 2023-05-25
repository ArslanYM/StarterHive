# Contributing to a React Project Built with Vite

- This guide will walk you through the steps to contribute to a React project built with Vite. Vite is a fast and         lightweight development server and build tool that is designed to optimize the development experience for modern web applications. By following these steps, you will be able to make changes and submit your contributions to the project.

## Prerequisites
Before you begin, make sure you have the following software installed on your system:

- Git: Version control system. [Link](https://git-scm.com/downloads/)
- Node.js: JavaScript runtime. [Link](https://nodejs.org/en/download)
- npm: Node Package Manager (comes with Node.js installation)


## Contributing
Following are the steps to guide you:

### Step 1
- Fork this repository 

![fork](https://github.com/ArslanYM/StarterHive/assets/104521101/b2863384-753d-448b-9c8f-cc2122121c2b)


### Step 2:
- Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

![clone](https://github.com/ArslanYM/StarterHive/assets/104521101/ffe2cb3b-d7e9-41fb-a7e6-8f5ca9d50dd0)

Open a terminal and run the following git command:
   ```
   git clone "url you just copied"
   ```
where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

![opy](https://github.com/ArslanYM/StarterHive/assets/104521101/5947298f-dd52-478c-9cd9-f22791eea4a5)

The code will look something like this : 
```
git clone https://github.com/{your user name}/StarterHive.git
```


### Step 3: 
- Navigate to StarterHive/web on your device

```
cd StaterHive/
```
```
cd web/
```

### Step 4: Install Dependencies

In the web directory, install the required dependencies by running the following command:

```
npm install
```
This will download and install all the necessary packages specified in the project's package.json file.

### Step 5: Create a New Branch
Create a new branch to work on your changes. It is recommended to create a branch with a descriptive name that reflects the purpose of your changes. Use the following command to create a new branch:

```
git checkout -b my-feature
```

- Replace my-feature with a meaningful name for your branch.

### Step 6: Make and Test Your Changes
Make the necessary changes to the project code using your preferred code editor.

Run the project locally to test your changes using the following command:

```
npm run dev
```
This command starts the development server and builds the project. Open your web browser and visit the provided URL to see the project running.

Test your changes thoroughly to ensure they are working as expected.

### Step 7: Commit and Push Your Changes
Once you are satisfied with your changes, it's time to commit them. Use the following command to stage your changes:

```
git add .
```

- This command adds all the modified files to the staging area.

- Commit your changes with a descriptive commit message:

```
git commit -m "Add my feature"
```
- Replace "Add my feature" with a brief description of the changes you made.

- Push your changes to your forked repository:

```
git push origin my-feature
```
- Replace my-feature with the name of your branch.

### Step 7: Create a Pull Request
Go to the repository page on GitHub.

You should see a message indicating that you recently pushed a branch. Click on the "Compare & pull request" button.

Review your changes and provide a descriptive title and comment for your pull request.

Click on the "Create pull request" button to submit your contribution.

Congratulations! You have successfully contributed to the React project built with Vite. The project maintainers will review your