**NUXT2-TAILWINDCSS**

This project is a web application built with Nuxt.js version 2.16.3 that uses Strapi as a backend for authentication. The login system contains two components - Signup and Login. The Signup component allows users to create a new account while the Login component allows existing users to log in.

**Project Setup**

**Prerequisites**

Before getting started, ensure that you have the following installed:

#Node.js 14.x or later
#NPM 6.x or later

**Installing Dependencies**

#Clone the repository to your local machine.
  
        git clone <https://github.com/Crlgbll/frontend>

#Navigate to the project directory using your terminal.

        cd <project_directory>
  
Replace <project_directory> with the name of the directory where you cloned the repository.

#Run npm install to install the required dependencies.

        npm install

**Nuxt.js Configuration**

Nuxt.js configuration can be found in the nuxt.config.js file in the root directory of the project. Here are some key settings you may want to modify:

 #head: Defines the default meta tags and other information that will be included in the head section of each page.
 
 #loading: Defines the loading bar that appears when a page is loading.
 
 #modules: Defines the Nuxt.js modules to be used in the project. Some commonly used modules include @nuxtjs/axios, @nuxtjs/auth, @nuxtjs/pwa, and @nuxtjs/google-  analytics.
 
 #build: Defines the build options for the project, such as the transpiler, minification, and postcss plugins.
 
**Running the Project**

  #Run npm run dev to start the development server.
  
      npm run dev
  
  #Open your browser and navigate to http://localhost:3000.
  
  #Building the Project
  
  #Run npm run build to build the production version of the project.
  
      npm run build
  
  #Run npm run start to start the production server.
  
      npm run start
  
**Usage**

Here are some key features of this project:

**Sign up**

Navigate to the sign-up page by clicking the **"Sign up"** link in the navigation bar.

Enter a username, email address, and password.

Click the **"Sign up"** button to submit the form.

**Login**

Navigate to the login page by clicking the "Login" link in the navigation bar.

Enter the email address and password used during registration.

Click the **"Sign in"** button to submit the form.

If the login is successful, you will be redirected to the home page.

**Home page**

The home page displays a welcome message and the username of the authenticated user.

If you try to access the home page without being authenticated, you will be redirected to the login page.
















