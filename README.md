
<h1 align="center" >Starter Hive ✨</h1>
<p align= "center" > This project aims to simplify and guide the way beginners make their first contribution.</p>

## Table of Content

- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)


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
- Navigate to StarterHive on your device

```
cd StaterHive/

```
### Step 4:
- Add an upstream link to the main branch in your cloned repo

    ```
    git remote add upstream https://github.com/ArslanYM/StarterHive
    ```
- Keep your cloned repo up to date by pulling from upstream (this will also avoid any merge conflicts while committing new changes)
    ```
    git pull upstream main
    ```
### Step 5: 
- Create your feature branch (This is a necessary step, so don't skip it)
    ```
    git checkout -b <feature-name>
    ```
### Step 6: Make necessary changes and commit those changes
- Add your commits to the staging
   ```
   git add .
   ```
   
### Step 7:  Now commit those changes using the `git commit`  command:

    ```
    git commit -m "Write a meaningful but small commit message"
    ```
    
### Step 8: Push your changes using the command `git push` :
    ```
    git push -u origin your-branch-name
    
    ```
### Step 9:
- Create a PR on Github. (Don't just hit the create a pull request button, you must write a PR message to clarify why and what are you contributing)

<details> 
 
<summary> New to open-source?
 </summary>


You can also contribute to this project if you are new to open source:
- [Check out the `CONTRIBUTORS.md` file to get started](CONTRIBUTORS.md)

 </details>


## Contributors

Thank you for your dedication and hard work. Your contributions are invaluable to our team, and we are so grateful for all that you do. Your hard work and dedication is truly admirable. Thank you for your unwavering commitment and for all that you do for our team.

Please visit [Contributors](/CONTRIBUTORS.md) to check the list of contributors and add your name to the list to become a contributor.

<a href="https://github.com/ArslanYM/StarterHive/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ArslanYM/StarterHive" />
</a>


## Guidelines 
Make sure you are following the Guidelines of this project while contributing. Take a look at [Guidelines](GUIDELINES.md).

## License
Starter Hive is licensed under the MIT License. See the [LICENSE](https://github.com/ArslanYM/StarterHive/blob/main/LICENSE) file for more information.
