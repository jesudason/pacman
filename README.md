# PACMAN SIMULATOR

https://jesudason.github.io/pacman/

## Game Description

The application is a simulation of Pacman moving on in a grid, of dimensions 5 units x 5 units.
Pacman is free to roam around the surface of the grid, but must be prevented from moving off the grid. Any movement that would result in Pacman moving off the grid must be prevented, however further valid movement commands must still be allowed.
This application takes commands for a user, tests the validity of the commands, and responds accordingly. All commands are recorded in the Command History section, regardless of if they adhere to the game's rules. Only valid rules will change the location of Pacman.
The rules can be read in detail here https://github.com/ie/Code-Challenge-1/

## How to Play

- Visit https://jesudason.github.io/pacman/
- In the command input field, enter your commands. Valid commands include:
  - PLACE X,Y,F (Where F is "NORTH", "SOUTH", "EAST", or "WEST")
  - MOVE
  - LEFT
  - RIGHT
  - REPORT
- Invalid commands will be recorded in the Command History log, but the moves will be ignored by Pacman.
- Use the REPORT command to see where Pacman has moved to.

## Build Notes

This project was bootstrapped with [Create React App].
https://github.com/facebook/create-react-app

It uses `React Testing Libraby` and `Jest` for testing.
https://testing-library.com/docs/react-testing-library/intro/
https://jestjs.io/docs/tutorial-react

It also uses the CSS preprocessor `Sass`.
https://sass-lang.com/
