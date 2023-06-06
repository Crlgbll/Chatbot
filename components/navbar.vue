<template>
  <div class="h-14 w-full bg-black/90  flex justify-between items-center px-4 shadow-white">
    <nuxt-link to="/">
      <div class="h-14 w-60 flex items-center">
        <img
          class="h-12 w-30"
          src="../assets/images/ask-anything-logo-zip-file/png/logo-white-cut.png"
          alt=""
        />
      </div>
    </nuxt-link>
    <div class="h-14 flex items-center font-bold">
      <ul class="flex py-3 justify-end text-lg items-center space-x-2">
        <nuxt-link to="login">
          <button
            class="hover:text-violet-700 duration-300 border-2 border-violet-500 outline-2 rounded-md px-2 text-white"
          >
            <li>Log In</li>
          </button>
        </nuxt-link>
        <nuxt-link to="signup">
          <button
            class="hover:text-violet-700 duration-300 border-2 border-violet-500 outline-2 rounded-md px-2 text-white"
          >
            <li>Sign Up</li>
          </button>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>
