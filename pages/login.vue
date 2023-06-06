<template>
  <div class="bg-black h-screen flex flex-col justify-center items-center">
    <div class="flex flex-col md:flex-row justify-center items-center h-screen">
      <!-- Login Form -->
      <div
        class="bg-white bg-opacity-80 py-8 px-4 shadow sm:rounded-lg sm:px-10"
      >
        <form
          class="w-full flex flex-col justify-center gap-4 p-6 space-y-2"
          @submit.prevent="login"
        >
          <!-- Title -->
          <h1 class="text-center text-4xl font-extrabold text-grayS-900">
            Sign-in
          </h1>

          <!-- Email Field Input -->
          <input
            class="rounded-md pl-2 py-2"
            type="text"
            placeholder="Email"
            required
            v-model="user.email"
          />
          <!-- Email Field Input -->

          <!-- Password Field Input -->
          <input
            class="rounded-md pl-2 py-2"
            type="password"
            placeholder="Password"
            required
            v-model="user.password"
          />
          <!-- Password Field Input -->

          <!-- Sign in Button -->
          <button
            type="submit"
            class="h-12 text-xl py-2 font-poppins text-white bg-violet-700 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-200"
          >
            Sign In
          </button>
          <!-- Sign in Button -->

          <!-- Links to Signup Page -->
          <nuxt-link to="signup">
            <h1
              class="hover:text-violet-600 active:text-violet-700 focus:outline-none"
            >
              Didn't have an account?
            </h1>
          </nuxt-link>
          <!-- Links to Signup Page -->
        </form>
      </div>
      <!-- Login Form -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // Function to handle the login process
    async login() {
      try {
        // Send a POST request to the authentication API endpoint
        const response = await fetch("http://localhost:1337/api/auth/local", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: this.user.email,
            password: this.user.password,
          }),
        });
        if (response.ok) {
          // If the response is successful, extract the JWT token from the response data
          const data = await response.json();
          // Store the token in the localStorage for future use
          localStorage.setItem("token", data.jwt);
          // Redirect the user to the chatbot page
          this.$router.push("chatbot");
        } else {
          // If the response is not successful, show an alert indicating wrong email or password
          alert("Wrong email or password");
        }
      } catch (error) {
        // If an error occurs during the login process, log the error and show an alert
        console.log(error);
        alert("An error occurred. Please try again.");
      }
    },
  },
};
</script>
