# Student-Mentor-Guidance-System
  
In these trying times of the COVID-19 pandemic, Students may go through hardships to cope up with their studies and
teachers may find it difficult to handle a lot of students simultaneously. So, our proposed system makes this task easier for
teachers/mentors and allocates them an equal amount of students depending upon the strength of the class. The total
number of students in the class or an organization gets distributed equally to the mentors of respective subjects.

## Technologies Used:
  
  ### Backend:
      
      Framework: Spring Boot
      ORM Tool: Hibernate (Spring Data JPA)
      Database: MySql
      Build Tool: Maven
      Language: Java
      
  ### Frontend:
      
      Library: ReactJS
      Language: HTML, CSS, JavaScript, ES6
      
      
  ## How to import & use project?
      
   ### Backend API
   
      1. Import as a Maven project using STS or Eclipse IDE.
      2. In src/main/resources/application.properties, change your port numbers (if required) and change database username & password
           spring.datasource.url=jdbc:mysql://localhost:(Your Port No)/(Your Database Name)?useSSL=false&allowPublicKeyRetrieval=true
           spring.datasource.username=(Your MySql Username)
           spring.datasource.password=(Your MySql Password)
      3. Create database named in the spring.datasource.url link.
      4. Run project as SpringBoot Application or Java Application.
      
   ### Front End ReactJs
   
      1. Create react app using "npx create-react-app (Your App Name)" command in the terminal.
      2. Copy "src" folder from SMGS-FrontEnd-React to replace your "src" folder (You need to install some React dependencies) which can be found in my                               "package.json" file).
      3. Now change directory to your React app using (cd "Your App Name") command.
      4. Now use "npm start" command to start React App. By default, app will start on port no. 3000. You can change it if required.
      5. Server & App must be up & running. 
# Student-Mentor-Management-System
# 1
