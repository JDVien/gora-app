# Gora
*By [Suwanshree Acharya](https://github.com/suwanshree), [Damian Rojas](https://github.com/JayDrojas), [Nathan Zavala](https://github.com/zavadev) and [Jason Vien](https://github.com/JDVien) - [Live site](https://gora--app.herokuapp.com/)*

They're coming to GET YOU...some answers for all of your horror-related questions!

**Table of Contents**
  * [Gora at a Glance](#gora-at-a-glance)
  * [Technologies Used](#technologies-used)
  * [Application Architecture](#application-architecture)
  * [Frontend Overview](#frontend-overview)
  * [Backend Overview](#backend-overview)
  * [Conclusion](#conclusion)

## Gora at a Glance
Gora is a full stack horror knowledge sharing application for horror entertainment enthusiasts. Users can satiate their morbid curiousity by asking questions and getting responses from fellow fans of nightmarish media! From the monochrome terror of the classic Nosferatu to the self-aware scares of modern hits like Scream, there's something here for all followers of fearful fun.

The application is made with a Pug HTML template engine and backed by a Postgres database.

**Key Features**
* Create new users and have user login with authorization
* Create questions, answer questions, and comment on other posts
* Search for questions, answers, and comments
* Filter through content via user profile

![Gora Main Questions Page](/public/images/gora-glance.png)

## Technologies Used
* Frontend
  * PUG
  * Javascript
  * NODEJS
* Backend
  * Postgres
  * Heroku deployment

## Application Architecture
The frontend is a Javascript, PUG HTML app deployed to its own Heroku server.


##### Overview of application architecture

![Database schema](/assets/database-resources/dbv004.png)
##### Gora Postgres database schema

## Frontend Overview
The PUG HTML rendering process involves the PUG source code being compiled into a Javascript function and returns a string of HTML rendered with our implemented Gora data. Styling was handled using CSS in JavaScript.


## Backend Overview
The backend is a collection of RESTful routes serving data to the frontend and an interface with the Postgres database.

## Conclusion
Gora was our first big group project and we had a great time conceiving and implementing our big ideas while staying grounded with realistic expectations given our current experience level.

We (we being Damian, Nathan, Suwan, and myself) managed to accomplish all of the features we set out to achieve, and we had a fairly smooth journey without much to block our development progress other than the expected first-time jitters. We learned a lot about the intertwining of frontend and backend technologies.

We felt like living ghouls during the project at times, but we in the end found the light.
