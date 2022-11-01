# PACMAN SIMULATOR

## Game Description

The application is a simulation of Pacman moving on in a grid, of dimensions 5 units x 5 units.
Pacman is free to roam around the surface of the grid, but must be prevented from moving off the grid. Any movement that would result in Pacman moving off the grid must be prevented, however further valid movement commands must still be allowed.
This application takes commands for a user, tests the validity of the commands, and responds accordingly. All commands are recorded in the Command History section, regardless of if they adhere to the game's rules. Only valid rules will change the location of Pacman.
The rules can be read in detail here https://github.com/ie/Code-Challenge-1/

## How to Play

- Clone this repository https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=cli
- Run `npm install` to install dependencies
- Run `npm start` to start the application
- Run `npm test` to run the tests

## Build Notes

This project was bootstrapped with [Create React App].
https://github.com/facebook/create-react-app

It uses `React Testing Libraby` and `Jest` for testing.
https://testing-library.com/docs/react-testing-library/intro/
https://jestjs.io/docs/tutorial-react

It also uses the CSS preprocessor `Sass`.
https://sass-lang.com/

## Next Steps
