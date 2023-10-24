# QUIZLY
### Around the World Trivia
***
###### Developed by Paula De Amicis

Code Institute's Milestone Project 2 is the culmination of the successful completion of all HTML5, CSS3 & JavaScript modules nested within the Front-end Development journey. 
Designed to demonstrate competency in the three fundamental coding and programming languages and, creativity in the choice of quiz. 


<Visit live website>

<Insert composite image of game screenshots>

### TABLE OF CONTENTS
...
***

### PROJECT OBJECTIVE
To create a fun and interactive online quiz that incorporates appropriate use of JavaScript for its functionality. 

##### USER OBJECTIVES
- Test their knowledge of various topics related to travelling the world. 
- Have fun while challenging themselves through two levels of difficulty. 

##### SITE OWNER OBJECTIVES
- Demonstrate competency in the three main coding languages as part of my front-end developer journey
- Create an online quiz that is entertaining and fun
- Design a visually appealing, fully responsive and accessible website
- Challenge myself by incorporating my newly acquired programming knowledge with my designerly background.  

***
### USER EXPERIENCE
##### TARGET AUDIENCE
Web users with an interest in world trivia, general knowledge quizzes or keen to play a fun, online game with simple rules and graphics. 

##### USER REQUIREMENTS
- Easy to understand quiz rules
- Simple navigation
- Logical presentation and flow of content 
- Responsive website that allows users to play on any device
- Meets W3C accessibility standards to ensure the quiz works equally for everyone
- No broken code
- Provide a 404 page when something unexpectedly goes wrong and redirects users to another page 

***

### DESIGN

##### COLOUR PALETTE 
Consistent across all devices, the colour palette was inspired by our big, blue sky and passenger air travel, so shades of blue, grey and white were used. 

![QUIZLY Colour pallette](https://...)


Responses to answers were inspired by the universal traffic light system, colours of green for correct and red for incorrect. 

Background image credits: <xyz>

##### TYPOGRAPHY
Google Fonts are incorporated into the website. **Ysabeau Office** for the heading and sub-headings and **Poppins** for all other scales with a standard sans serif fallback. These styles were selected to reflect the _fun_ aspect of the game while also being legible and clear. 

##### STRUCTURE
Designed to be quick to learn and easy to navigate, Quizly is a single-page website. When a player visits the website, they are greeted with a <homepage> which introduces Quizly. The user clicks a button to enter the quiz, they are then given the option to select their level of difficulty. It's at this point, the quiz has further navigational features; return to home or help for more information. Once the player has answered all the questions in their chosen level of difficulty, they will be presented with the number of correct responses and the corresponding award (Gold, Silver, Bronze or Try again) and the option to play again, which once clicked, will return them to the home page. 


***
## TECHNOLOGIES EMPLOYED

##### LANGUAGES
- HTML5
- CSS3
- JavaScript

##### FRAMEWORKS, LIBRARIES & TOOLS
- <composite image> to create the multi-device mock-up 
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/ "A complete guide to Flexbox") - CSS flexbox layout system to provide structure and responsiveness to all elements
- [Figma](https://www.figma.com "Figma home") - used to map out the prototype
- [Favicon](https://favicon.io/ "Favicon home") - to create the Favicon
- [Visual Studio](https://visualstudio.microsoft.com/vs/mac/ "Visual Studio home") - chosen IDE
- [GitHub](https://github.com/ "GitHub home") - hosting, version control and deployment
- [GitHub Desktop](https://desktop.github.com/ "GitHub Desktop home") - to push changes and simplify development workflow
- [a11y](https://color.a11y.com/Contrast/ "a11y Contrast checker") - colour contrast accessibility validator
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/ "Google Chrome Developer") - to test responsiveness and debug
- [Mobile simulator](https://chrome.google.com/webstore/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk "Mobile simulator extension overview") - to test responsiveness on a vast range of devices. 
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/ "Lighthouse overview") - used to audit performance, accessibility, development best-practice and SEO. 
***

## TESTING
All code validated via the [W3C HTML Validation Service](https://validator.w3.org/) , [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) and [JSHint](https://jshint.com/) to detect errors and potential problems in the code. 

! outline errors (if any) and steps to resolve. Provide screenshots 

Note: Due to multiple JavaScript files, each designed to provide functionality for specific features, .... 

##### HTML VALIDATION 
<insert image here>


##### CSS VALIDATION
<insert image here>

##### JavaScript VALIDATION 
<insert image here>


##### LIGHTHOUSE TESTING 
The website was tested for: 
- Perfomance - how the page performs while loading
- Accessibility - meets accessibility standards so that it works equally for everyone and provides tips on improvement where relevant
- Best practice - conforms to current industry best practice standards
- SEO - Search engine optimisation. Ranks the site 

<insert images>

##### ACCESSIBILITY
A11y
<insert image/s> 

Mobile simulator
<insert image/s>

##### MANUAL TESTING
Throughout development, I carried out a range of manual testing to ensure functionality was as intended. 

These included: 

* Landing page
    *   Page loads correctly
    *   User can clearly see and interact with the site
    *   Clicking the 'Let's go!' button will start the game and direct user to the next section - Choosing level of difficulty. 

* Navigation 
    * Click the home icon will reload the website
    * Question mark icon will trigger a modal with game rules
    * Triggered modal has a cross icon to close and that it works

* Difficulty section
    * Clicking either 'easy' or 'hard' will load the respective questions in a randomised order each time. 

* Question section 
    * Questions and answer options (easy) / text area (hard) displayed correctly
    * Answer options / text area is enabled once question has loaded
    * Question counter increments correctly with each question answered
    * Selected answer will trigger the appropriate text banner (red = incorrect / green = correct)
    * 'Next Question' icon disabled until user has submitted an answer
    * 'Next Question' icon enabled after answer submitted
    * Once 'next question' icon has been clicked, the next question will be correctly loaded and will continue until all questions (easy = 15 questions / hard = 10 questions) in that section has been answered. 
    * When all questions for the section has been answered, the results section will be triggered. 

*   Results section 
    *   Section is rendered correctly 
    *   Questions answered correct are counted in the back-end and presented as a total to the user with the appropriate tribute and award icon
    *   Verify the 'play again' button is enabled and will work as intended - to reload the website and direct user to the home page. 

##### BROWSER COMPATIBILITY
This website has been manually tested on the browsers listed below with additional testing via Lighthouse. 
- Google Chrome
- Safari
- 
##### BUGS

***
### DEPLOYMENT
This website was deployed to GitHub Pages. 
***
### CREDITS
Fonts from [Google Fonts](https://fonts.google.com/)
Colour palette from [Coolors](https://coolors.co/?home)
HTML icons from [Font Awesome](Font Awesome)
[Favicon](https://favicon.io/favicon-converter/) converted icon created by Vectors Market on [Flaticon](https://www.flaticon.com/free-icons/travel) 
Questions and answers from ....
Background image from ....
Icons for awards from [Favicon](https://favicon.io/)
Code snippets and structure inspiration derived from past students projects and the online code community via [StackOverflow], A Designer who Codes and Bytexxxx tutorials hosted on [YouTube]. Support from Code Institute mentor Scott N. 




