# ACME Search

Alice is about to head into a meeting with Acme Co. She visits https://foo.com which has a search box where she types "Acme Co." and gets content from various data sources (listed below) relevant to the upcoming meeting.

Data sources: 
- Contacts
- Dropbox file
- Slack message/thread 
- Calendar entry
- Twitter

Each item has a `matching_terms` field, you could treat that as the set of query terms which will retrieve that item (so you don't have to bother with actually searching content).

ACME Search allows you to get relevant search results from the data sources.

The URL for preview is:

**Note:** Sponsor: A take-home project from Neeva


## Contents

- [Core Features](#core-features)
  - [Search](#admin-web)
  - [Dynamically update results as new data becomes available](#dynamically-update)
  - [Data Display](#data-display)
- [Design](#design)
- [Data Sources](#data-sources)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Getting Started](#getting-started)


## Core Features

### Search
There is a search input where the user can type, press a button, and see content that matches the search query. The query is case insensitive which means, for example: `acme`, `ACME`, `aCme` will all get the same searching results. Also both the leading and end of the whitespaces of a string will be handled which means, for example: 'acme', '&nbsp;&nbsp;acme&nbsp;&nbsp;', '&nbsp;&nbsp;acme' will all get the same searching results.

### Dynamically update results as new data becomes available
Every time the user refresh the searchHome page, it will reload and read/get the data source. So as new data is inserted or becomes available, the searching results will update dynamically.

### Data Display
- The searching results hide some information to be displayed on the page, like `id`, `matching_terms`. These data may be sensitive and will not be exposed to the user.

- Instead of displaying a raw timestamp (e.g., 1996-12-19T16:39:57-08:00), the result shows a date (12/19/1992) which makes more readable and friendly.


## Design
- Serverless: there is no backend/server in this project. Since it's a small project, there will be more steps and time consuming to set up the backend things and design the api. However, the serverless makes the web needs time to load and deal with the data. Since the data set is relative small at this time, it will be fine. If the data set is huge, the backend or the database would be needed.

- Data: While loop all the data sources files, I use a Map to store all the data. The key is every `matching_terms` and the value is objects that have the `matching_terms`. So in this case, many objects may be stored several times since they have multiple `matching_terms`. But the scenario is that the time of searching will be much bigger than new data coming in, which means reading is more than writing. And the map will give constant time for checking the query. It is a space-time tradeoff. 


## Data Sources
- Add attribite `category` in the data sources which will be easy for displaying category while showing the results.

- In the original data sources, there are some records shows `"last_contact": "2019-02-29"`, which is invalid date since there is no 02-29 on the year of 2019. So it has been replaced to `"last_contact": "2019-02-28"`.


## Tech Stack
- React.js
- Semantic UI React
- react-test-renderer


## Deployment


## Getting Started

- Install NodeJs from NodeJs Official Page
- Open Terminal
- Go to your file project
- Run in terminal:

      npm install

- Then:
    
      npm start

- Navigate to http://localhost:3000