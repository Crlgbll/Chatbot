<template>
  <div class="bg-black ">
    <navbarAuth /> <!-- Placeholder for a navigation bar component -->
    <div class="flex flex-col md:flex-row justify-center items-center h-screen">
      <div class="w-full md:w-3/4 h-60 md:h-full md:rounded-l-xl bg-black">
        <!-- Chat bot UI -->
        <div class="chat-container p-4 relative">
          <!-- Iterate over each message and display it in the chat container -->
          <div class="top-line"></div>
          <div class="right-line"></div>
          <div
            v-for="message in messages"
            :key="message.id"
            :class="{
              'user-message': message.isUserMessage,
              'bot-message': !message.isUserMessage,
            }"
            class="message mb-4"
          >
            <div class="message-content p-2 rounded-lg">
              {{ message.content }} <!-- Display the content of each message -->
            </div>
          </div>
        </div>
        <div class="shadow-line"></div>
      </div>

      <!-- Form for sending a new message -->
      
      <form
        class="w-full md:w-1/3 h-full flex flex-col justify-center gap-4 p-6 bg-black shadow-lg rounded-r-xl"
        @submit.prevent="sendMessage" > <!-- Handle form submission -->
        <img class="h-30 w-30" src="../assets/images/ask-anything-logo-zip-file/png/logo-white.png" alt="">
       
        <input
          class="rounded-md pl-2 py-2 shadow-sm"
          type="text"
          placeholder="Your message"
          v-model="newMessage" /> <!-- Bind the input value to the 'newMessage' data property -->
        <button
          type="submit"
          class="h-12 text-xl py-2 font-poppins text-white bg-purple-600 rounded-lg hover:bg-purple-700 active:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [], // Array to store chat messages
      newMessage: "", // Holds the value of the input field for a new message
    };
  },
  methods: {
    async sendMessage() {
      const userInput = this.newMessage.trim();
      if (userInput === "") {
        return; // If the user input is empty, exit the method
      }

      // Add user's message to the chat UI
      this.messages.push({
        id: Date.now(),
        content: userInput,
        isUserMessage: true,
      });

      try {
        // Send user's message to the chat bot API
        const response = await this.$axios.$post("api/chat", {
          message: userInput,
        });

        // Add chat bot's response to the chat UI
        this.messages.push({
          id: Date.now(),
          content: response.message,
          isUserMessage: false,
        });
      } catch (error) {
        console.error("Failed to query the chat bot:", error);
        let errorMessage = "An error occurred while fetching the chat bot response.";
        if (error.response && error.response.data && error.response.data.error) {
          errorMessage = error.response.data.error;
        }
        this.messages.push({
          id: Date.now(),
          content: errorMessage,
          isUserMessage: false,
        });
      }

      // Clear the input field
      this.newMessage = "";
    },
  },
};
</script>


<style>
.message {
  max-width: 80%;
}

.user-message {
  align-self: flex-end;
  background-color: blue;
  color: white;
  border-radius: 10px;
}

.bot-message {
  align-self: flex-start;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
}

.bg-black {
  background-color: #000;
}

.chat-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
}

.top-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: slategrey;
}

.right-line {
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background-color: slategrey;
  transform: translateY(2px);
}

.message-content {
  padding: 0.5rem;
}

.rounded-l-xl {
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.rounded-r-xl {
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

</style>
