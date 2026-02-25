# Node.js REPL & VS Code Navigation Guide

This guide covers:

-   What Node REPL is
-   How to use it
-   Important REPL commands (.help, .exit, etc.)
-   How Ctrl + C works
-   How to run Node files
-   How to navigate folders inside VS Code terminal

------------------------------------------------------------------------

## 1. What is Node REPL?

REPL stands for:

**Read → Evaluate → Print → Loop**

It is an interactive environment that allows you to run JavaScript
directly in your terminal using Node.js.

Start it by typing:

``` bash
node
```

You will see:

``` bash
>
```

Now you can type JavaScript:

``` js
2 + 3
```

 Output:
    5
    ------------------------------------------------------------------------   

## 2. How to Use Node REPL

### Start REPL

    ``` bash
    node
    ```

### Example Commands

    ``` js
    console.log("Hello Aman");
    let name = "Aman";
    name.toUpperCase();
    ```

    You can even load modules:

    ``` js
    const fs = require("fs");
    ```

    ------------------------------------------------------------------------

## 3. Special REPL Commands

    Commands starting with a dot (`.`):

### .help

    Shows all available REPL commands.

    ``` bash
    .help
    ```

### .exit

    Exits REPL safely.

    ``` bash
    .exit
    ```

### .clear

    Clears the REPL environment.

### .save filename.js

    Saves current REPL session to a file.

### .load filename.js

    Loads a file into REPL.

    ------------------------------------------------------------------------

## 4. Ctrl + C (Important)

    In most command line interfaces:

    -   Press **Ctrl + C** to stop a running process.
    -   In Node REPL:
        -   Press once → clears line
            -   Press twice → exits REPL

            ------------------------------------------------------------------------

## 5. Running a Node File (Instead of REPL)

            Create a file:

                app.js

                Inside the file:

                ``` js
                console.log("Hello from Node");
                ```

                Run it with:

                ``` bash
                node app.js
                ```

                ------------------------------------------------------------------------

## 6. Navigating Folders in VS Code Terminal

                Open terminal in VS Code: - Terminal → New Terminal

### Show current directory

                ``` bash
                pwd
                ```

### List files

                Mac/Linux:

                ``` bash
                ls
                ```

                Windows:

                ``` bash
                dir
                ```

### Go into folder

                ``` bash
                cd foldername
                ```

### Go back one folder

                ``` bash
                cd ..
                ```

                ------------------------------------------------------------------------

## 7. Typical Node Workflow

                1.  Create project folder
                2.  Open in VS Code
                3.  Open terminal
                4.  Run file with:

                ``` bash
                node app.js
                ```

                5.  Initialize npm:

                ``` bash
                npm init
                ```

                6.  Install packages:

                ``` bash
                npm install express
                ```

                ------------------------------------------------------------------------

## REPL vs Running a File

                  REPL                     Running File
                    ------------------------ --------------------
                      For testing small code   For real projects
                        Instant execution        Executes full file
                          Temporary                Permanent code

                          ------------------------------------------------------------------------

## When to Use What

                          Use REPL for: - Testing small JavaScript code - Learning Node basics -
                          Quick experiments

                          Use .js files for: - Backend applications - Express projects -
                          Real-world development

                          ------------------------------------------------------------------------

                          End of Guide

