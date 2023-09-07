# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. 
How can I fix this mistake? 
What is the name of the foreign key? 
Would the foreign key be on the Cohort model or the Student model?

Your answer: First I would need to check that Student belongs_to Cohort since Cohort is the parent model and Student is the child. Doing this will insure that the association is established. Since I forgot to include the FK in when setting up my rows and columns I would need to add it by creating a migration. I would be able to do that in the rails console using the following: 
rails generate migration add_column_foreign_key_to_student. A new file would be made where the necessary changes can be done inside a change method.
I would name the foreign key cohort_id:integer to follow naming convention.
The foreign key would be on the Student model since it belongs_to the Cohort model. The Cohort model is the parent model, therefore it has the primary key.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: The second and third routes and that is because we want to make it dynamic and allow the data to be ever changing to suit our needs. 

Researched answer: Show, Create, Update, and Destroy
Passing params allows us to add more info to our program by passing a value into the controller instead of hardcoding it, making it more dynamic. We are also able to have better URL routes making our page more accessible.


3. Name three rails generator commands. What is created by each?

Your answer:

rails new app_name -d postgresql -T :
This creates and names the new app we are building and our empty database. 

rails db:create :
this creates our database

rails g model ModelName key:value key:value etc :
This generates the new Model and allows us to add as many key:value pairs that make up the rows and columns of our database. The key will be the instance of a class, our sub-classes and the value is going to be the form of data we'll be recording.

Researched answer:

rails new app_name -d postgresql -T :
rails new app_name is the command that will generate our new app folder and Rails directory structure while rails new app_name -d postgresql -T replaces the default database with postgres instead of the default SQL database.

rails db:create : This creates our empty database, which can be confirmed when you see created database 'appName_development'
Created database 'appName_test'

rails g model ModelName key:value key:value etc :
This generates the new Model, which is always uppercase, and allows us to add as many key:value pairs, the key is always lowercase, that make up the rows and columns of our database. The key will be the instance of a class showing as a column, and the value is going to be the form of data we'll be recording as our arguments. 


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? 
What action would each of the controller methods perform?

action: "GET" location: /students
'student#index'
This action will display all the students in the database.

action: "POST" location: /students
student#create'
This will allow us to create new students in the database.

action: "GET" location: /students/new
'student#new'
This is where you would see the form displayed for our new students to be entered.

action: "GET" location: /students/2
'student#show'
This action would retrieve the student with the ID:2

action: "GET" location: /students/2/edit
'student#edit'
This would allow us to edit the student the ID:2

action: "PATCH" location: /students/2
'student#update'
This would update our student with the ID:2

action: "DELETE" location: /students/2
'student#delete'
Byyeee! This action would delete our student with the ID:2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

Story 1 
As a developer, I must first create an app for my database to live.
rails new To_Do -d pstgresql -T

Story 2
As a developer, I need to be able to generate my Model and a list of my tasks that need completed, the estimated time to complete the task, and the real time to complete the task.
rails g model ToDoList task:string estimated_completion_time:integer actual_completion_time:integer

Story 3
As a developer, I can see all of my tasks on my list.
INDEX

Story 4
As a developer, I CREATE a task on to my list as needed.

Story 5
As a developer, I can SHOW any specific task.

Story 6
As a developer, I can EDIT the estimated completion time of any of my tasks.

Story 7
As a developer, I can UPDATE my actual completion time.

Story 8
As a developer, I can see a form to enter a NEW task to my list.

Story 9
As a developer, I can do the best part of any to do list and DELETE a task once it is completed.

Story 10
As a developer, I can rearrange my tasks in order of importance.