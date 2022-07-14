Backend Assignment | FamPay

Project Goal
To make an API to fetch latest videos sorted in reverse chronological order of the publishing date-time from YouTube for a given search query in paginated response

Basic Functionalities
constantly fetch data in the background every 10 sec
GET API, /videos for fetching videos supporting options like sorting and pagination

Development

Clone the project
git clone https://github.com/nalin1182/famProject.git

Basic requirement
install node and mongodb
 
npm install
To install all the packages

node index.js 
To start the server 

API END POINT 
http://localhost:5000/api/videos/data?q=football&pageNo=1