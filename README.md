# SNHU-CS465-Fullstack-Travlr

#Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).


Why did the backend use a NoSQL MongoDB database?

We used a NoSQL Mongo database because of the ease of modifying the schema as we added functionality and scaled our software as we added additional tables. As we change the functionality of the application, we can simply change the structure of the databse without having to unload and reload the entire database as we would have to with a SQL database.  

#Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

#Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

  Methods in a full stack application are the main process by which we provide functionality and dynamic display on the webpage. The Methods sent through HTTP/HTTPS requests can be used to intereact with both the database as well as the actual webpage. Any method passed through a request will be fulfilled by the various functions that we have built out in our software. Endpoints are the point at which an API allows you to communicate between two pieces of software, in our case we had a Login, Register, Add Trip and Update Trip endpoint, at which we could perform various functions. Protecting these functions from access from the outside is important, as we have access to the database through these functions. Which is why our Endpoints are protected by an authorization request which should be supplied by the user's browser or software when accessing these API Endpoints. 

#Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

  Previous to this, I have never used a full stack to do any significant programming. This project, truly did take me from the start to finish in terms of developing a fully functional SPA, with API endpoints and database access. THe course has also helped me figure out what parts of programming I might be interested in in the future, as the back-end development was quite interesting.  The biggest skils I have developed while creating this project has to be that I've gained a better understanding of how to fix issues I encounter, from applications not running correctly, to how linking different components should be done.
