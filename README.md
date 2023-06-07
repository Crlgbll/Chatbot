**NUXT2-TAILWINDCSS**

This project is a Web Chat Bot Application built with Nuxt.js version 2.16.3 that uses Strapi as a backend for authentication. The login system contains two components - Signup and Login. The Signup component allows users to create a new account while the Login component allows existing users to log in. It integrates the OpenAi GPT 3.5-turbo API for the Chat Bot to function.

**Project Setup**
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


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

If the login is successful, you will be redirected to the Chat Bot page.

**Chat Bot Page**

The Chat Bot page displays a welcome message and the username of the authenticated user. As an authenticated user, you have the previledge to prompt a message and the Bot will answer any questions you will ask.

If you try to access the Chat Bot page without being authenticated, you will be redirected to the login page.
















