# Hangman App

This project was created with React and Typescript by Kseniia Guk, 2022.

## Gameplay

Player should guess the word by choosing letters. They can pick wrong letter only 6 times -- every time "hanged man" gets one of his body parts: head, torso, left arm, right arm, left leg and right leg. If hanged man is drawn entirely with all his 6 parts then game is over. If player reveals all the letters of guessed word they win.
More details:

### The hidden word

The word is randomly generated from  one of the two prepared lists of the most common words. One list conists of 100 Russian words, the second one contains 100 English words.

### Languages

At the top of the screen there is a switch that allows you to select the application language - Russian or English. When switching the language, a new word is generated in the selected language, the game starts again.

### The letters of the hidden word

The letters of the hidden word are displayed right under the picture of the hangman. Each letter is originally hidden and is shown if player guesses that letter. If the player wins all the letters turn light-green, in the case of failure unguessed letters reveal and turn red.

### The keyboard

At the bottom of the screen is the keyboard with all the letters of the selected alphabet. Each "key" turns
  - light-blue by hovering it,
  - red by clicking it if the hidden word does not includes this letter,
  - green by clicking it if the hidden word includes this letter.
Also each key turnes disabled after clicking it, so you can't click any key twice.
Besides the player can use their device's keyboard for guessing the letters. The app listens if any button is pressed and if it is the case, then the pressed button is checked for the selected alphabet. 

## Everything else

- The application is adaptive -- it is equally logically displayed on both narrow and wide screens.
- The project idea was inspired by [https://www.youtube.com/c/WebDevSimplified].
