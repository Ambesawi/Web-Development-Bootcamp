# Node Package Manager (NPM) Complete Guide

This guide covers:

-   What NPM is
-   How it works with Node.js
-   Why you must initialize npm
-   What package.json is
-   Installing packages
-   Understanding node_modules
-   Typical backend workflow

------------------------------------------------------------------------

## 1. What Is NPM?

**NPM = Node Package Manager**

It is:

-   The default package manager for Node.js
-   The largest software registry in the world
-   A tool used to install and manage JavaScript libraries (packages)

If Node.js is the engine ���\
NPM is the App Store ���

------------------------------------------------------------------------

## 2. Does NPM Come with Node?

YES.

When you install Node.js, you automatically get:

-   node
-   npm

Check installation:

``` bash
node -v
npm -v
```

If both show versions, everything is installed correctly.

------------------------------------------------------------------------

## 3. What Is a Package?

A package is reusable JavaScript code someone else created.

Instead of building everything from scratch, you install libraries like:

-   Express
-   Mongoose
-   Axios
-   Nodemon

Example:

``` bash
npm install express
```

------------------------------------------------------------------------

## 4. Why Must You Initialize NPM First?

Before installing packages in a new project, run:

``` bash
npm init
```

Or quickly:

``` bash
npm init -y
```

This creates a file called:

    package.json

    ------------------------------------------------------------------------

## 5. What Is package.json?

    `package.json` is your project's identity card.

    It contains:

    -   Project name
    -   Version
    -   Description
    -   Dependencies
    -   Scripts

    Example:

``` json
    {
      "name": "my-project",
        "version": "1.0.0",
          "dependencies": {
              "express": "^4.18.2"
                }
                }
```

                ------------------------------------------------------------------------

## 6. What Happens When You Install a Package?

                When you run:

``` bash
                npm install express
```

                Three things happen:

                1.  A folder is created: node_modules/
                2.  Express is added to package.json
                3.  A file is created: package-lock.json

                ------------------------------------------------------------------------

## 7. Important Files Explained

### node_modules/

                Contains all installed packages.

### package.json

                Lists dependencies and project info.

### package-lock.json

                Locks exact package versions to ensure consistent installs.

                ------------------------------------------------------------------------

## 8. Why package.json Is Important

                When someone downloads your project, they don't need all node_modules.

                They simply run:

``` bash
                npm install
```

                NPM reads package.json and installs everything automatically.

                This is professional development workflow.

                ------------------------------------------------------------------------

## 9. Difference Between Node.js and NPM

                  Node.js                           NPM
                    --------------------------------- ----------------------
                Runs JavaScript outside browser   Installs packages
                Runtime environment               Package manager
                Executes files                    Manages dependencies

                          ------------------------------------------------------------------------

## 10. Typical Backend Workflow

                          1.  Create project folder
                          2.  Open in VS Code
                          3.  Initialize npm:

``` bash
                          npm init -y
```

                          4.  Install dependencies:

``` bash
                          npm install express
```

                          5.  Use the package in your file:

``` js
                          const express = require("express");
```

                          ------------------------------------------------------------------------

## 11. Pro Tips

                          -   Always run `npm init` at the beginning of every backend project.
                          -   Avoid installing packages globally unless necessary.
                          -   Never upload `node_modules` to GitHub (use .gitignore).
                          -   Always commit `package.json` and `package-lock.json`.

                          ------------------------------------------------------------------------

### Using .gitignore in Node.js Projects

This section explains how to use .gitignore in your Node.js projects to prevent unwanted files from being tracked by Git.

## What Is .gitignore?

.gitignore is a file that tells Git which files or folders it should ignore and not track in version control.

This is useful for:

node_modules/ folder (very large)

.env files (sensitive data like API keys)

Logs and temporary files

## How To Create .gitignore

In your project folder, create a new file named:
```
.gitignore
```
Add the following for a basic Node.js project:

```
node_modules/
.env
.env.local
.DS_Store
*.log
```
## Why This Matters

Keeps your repository clean

Reduces upload size to GitHub

Protects sensitive data

Allows others to install dependencies with npm install

## Checking if .gitignore Works

After creating .gitignore, run:
```
git status
```
You should not see the ignored files/folders listed.

## Removing Already Tracked Files

If you previously committed files that should be ignored:
```
git rm -r --cached node_modules
```
Then commit the changes:
```
git commit -m "Removed node_modules from tracking"
```
## Summary

For Node.js projects, at minimum your .gitignore should contain:
```
node_modules/
.env
```
This ensures best practices and a professional workflow for Node.js development.

