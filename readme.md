# Rolling Project
React + Node + MongoDB

## Part 1
### Client Side
Create a trivia quiz  
Add a form with 10 questions. Each question should have 4 possible answers  
Add a submit button
### Server Side
Serve the client-side application using express.static middleware

## Part 2
### Server Side
1. Add an API endpoint for submitting answers. The response should include a score
2. Add an API endpoint for getting the high scores
### Client Side
On submitting a quiz - send the answers to the server and show the user her score.   
If the score is in the top ten, open a form and ask the player to enter his/her name.  
Submitting the name should add the player’s name and score to a highscore array

## Part 3
### Client Side
Create a leaderboard page which displays the top ten highest scores
### Server Side
1. Add an api for for managing the quiz. The area should allow adding, removing, editing questions and answers (including setting the correct answer).  
Restrict access to these api endpoint to users with role admin.  
The admin user should have username “admin” and  password “Admin!234”.  
Note that this will require you to implement a login route.
2. Create a MongoDB collection for storing: 
- Users
- Questions
- Scores


