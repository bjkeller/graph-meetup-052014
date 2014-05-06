# Cytoscape.js "labs"

This is a node.js version of the "labs" for my presentation of Cytoscape.js to
the Seattle/Bellevue Graph Meetup (6 May 2014).

## Setting up

Before starting, make sure you have installed `git`, `node` (including `npm`),
as well as a text editor.

Clone the repo – you can grab the URL from github, and then run the commands

    cd graph-meetup-052014
    npm install

which uses the contents of the `package.json` file to create a subdirectory
`node_modules` that includes packages for cytoscape.js and http-server.

## The labs

The files in the `local` directory are meant to be run from the node package
`http-server`

You can start the server by running

    npm start

and then from the browser open `localhost:8000/local/` and select whichever of
the html files you are working on.
