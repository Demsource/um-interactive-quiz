# How to get the app and run on your local server

* Download zip of the code or git clone the application

* Extract zip or open the clonned folder

* Open the terminal

* `CD` into the directory of the downloaded or clonned app

* Run `npm i` to install the dependencies

* Run `npm run dev` to start the server


# Interactive Quiz

## Introduction

In this project, I have designed and implemented an interactive
quiz about React library using React library. I've developed an
intuitive, user-friendly quiz application that allows users to easily
answer multiple-choice questions, track their progress, and view their
final scores at the end. The app is designed to provide a seamless
and engaging experience for users with ease of use. This document
explores the unique features of the Quiz App in detail.

This app consists of a single page that displays two different
sections, one at a time.

**One by one quizzes**
- Individual questions to be answered
- Submitting an answers

**Bulk quizzes**
- All questions with answers:
  - Unanswered
  - Answered
    - Correct
    - Wrong
- Results
  - Confetti
- Restart

Looking harmoniously, it is also **responsive** for:

- **Desktop**
- **Tablets**
- **Mobiles**


The code is **optimized** using React.js to deliver a smooth user
experience, with **memoization** techniques to further enhance its
speed and efficiency.


## Techniques / Tools

Let's now examine the tools and techniques used to solve this
challenge. The core of the application depends on the **React.JS**
library; the embedded font family ' **Quicksand** ' is sourced from **Google
Fonts; Fortawesome** is used for the icons; **UUID** library is used to
identify different question objects and **react-confetti** library to display
confetti on game won**.** Now I'll walk through the core features and
capabilities of this Quiz App.

Quizzes are coming from the static **json** object, and there are 5
questions to test the application.
Quizzes are **shuffled** using javascript utility function, as well as
answers for those questions. So that every time the user loads an app
for the first time or restarts the game, those will be accordingly **sorted**
differently.

**One by one quizzes**

- A **30-second** timer is active for each question
- Stylish **Progress Bar** for game tracking
- Choose/Answer a question
  - **Clicking** an answer button
- Skip a question
  - **Refrain from clicking** the answer button
- Advancing a question
  - Timer count is down to **zero**
  - **Next** button
- Submitting answers
  - Timer count is down to **zero** on the last question
  - **Submit Answers** button

**Bulk quizzes**


- Correctness of a **selected answer** will be assessed and
    short explanations will be provided (only for the answered
    questions)
  - Right
    - Answer turns into green (Check)
  - Wrong
    - Answer turns into red (Xmark)
- **Unanswered** question
  - No decoration
  - No explanations will be provided
  - Note about question to be answered
- Displaying **Confetti** on game won
  - User has answered all the questions correctly and scored
       100 points
- **Restart Quiz** Button

**Code Optimization**

- The code is optimized using React’s **memoization** features,
    especially to prevent re-rendering components that are not
    dependent on the timer (since it runs and updates after
    every second)
  - React. **memo** ()
  - **useMemo** ()
  - **useCallback** ()

**Responsiveness:**

- **Desktop (up from 810px)**
- **Tablets (up to 810px)**
- **Mobiles (up to 390px** )


## Output / Results

For this Interactive Quiz project assignment, I created a ready-to-
use, live interactive quiz app. The project successfully produces a fully
functional, straightforward and smooth interactive app, that meets all
the defined objectives and has all the core functionalities in place,
crafting a user experience that is seamless, intuitive, and simple to
navigate. This project served as a practical application for front-end
web development, boosting my comprehension of interactive web
applications. Primary deliverables include:

- The project utilizes the **React.js** library
- **Optimized** code that significantly enhances application
    **performance** and **efficiency**
- Built on **mock** dataset (json) **array**
  - The quiz is capable of managing a **dynamic** number of
       **questions** and **answer choices**
- One by one **questions** to answer during interaction
- **Timer**
- Proceeding to the **next** question
- **Submitting** the answers
- Response **grading**
- **Results**
- Short **explanations**
- **Confetti** on game won (100 points)
- **Responsiveness**
  - The application adjusts smoothly, adapting seamlessly to
       various screen sizes.


