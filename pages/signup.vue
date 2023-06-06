<template>
  <!-- Sign-up page -->
  <div class="bg-black">
    <div class="flex flex-col md:flex-row justify-center items-center h-screen">
      <div
        class="bg-white bg-opacity-80 py-8 px-4 shadow sm:rounded-lg sm:px-10"
      >
        <!-- Sign-up form -->
        <form
          class="w-full h-full flex flex-col justify-center gap-4 p-6 space-y-1"
          @submit.prevent="signup"
        >
          <!-- Title -->
          <h1 class="text-center text-4xl font-extrabold text-grayS-900">
            Sign-Up
          </h1>
          <!-- Username input -->
          <input
            class="rounded-md pl-2 py-2"
            type="text"
            placeholder="Username"
            required
            v-model="user.username"
          />
          <!-- Email input -->
          <input
            class="rounded-md pl-2 py-2"
            type="email"
            placeholder="Email"
            required
            v-model="user.email"
          />
          <!-- Password input -->
          <input
            class="rounded-md pl-2 py-2"
            type="password"
            placeholder="Password"
            required
            v-model="user.password"
          />
          <!-- Confirm password input -->
          <input
            class="rounded-md pl-2 py-2"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <!-- Sign-up button -->
          <button
            type="submit"
            class="h-12 text-xl py-2 font-poppins text-white bg-violet-700 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-200"
          >
            Sign Up
          </button>
          <!-- Link to login page -->
          <nuxt-link to="login">
            <h1
              class="hover:text-violet-600 active:text-violet-700 focus:outline-none cursor-pointer"
            >
              Already have an account?
            </h1>
          </nuxt-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // Function to handle the sign-up process
    async signup() {
      try {
        // Send a POST request to the sign-up API endpoint
        const response = await fetch(
          "http://localhost:1337/api/auth/local/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: this.user.username,
              email: this.user.email,
              password: this.user.password,
            }),
          }
        ).then(() => this.$router.push("login"));
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
@media only screen and (min-width: 768px) {
  .h-screen {
    height: calc(109vh - 4rem);
  }
  form {
    max-width: 400px;
  }
}
</style>
