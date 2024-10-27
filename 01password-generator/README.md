# Password generator

## High Level Design:
### Requirement-
1. User should be able to generate strong random passwords string,
2. User should be able to copy generated password string in a single click,
3. User should be able to choose if the password should contains only alphabet, only numbers, only special characters
4. User should be able to adjust the length of the password

### Scoping (Prioritization)

### Technology choices-
We are going to use React for this application.

## Low level Design:
### Component Architecture-
1. Create a widgit at the top-center of the screen
2. Widget should contain a text box in which the password is displayed,
3. Widget should contain a button next to the tex box, on click of button, the password should get copied to the clipboard,
4. Widget should contain a slider-input to choose the length of the password (default value is 8),
5. Widget should contain a checkbox to choose if password should contain numbers as well,
6. Widget should contain a checkbox to choose if password should contain special characters as well

### Data API & protocol, Implementation-