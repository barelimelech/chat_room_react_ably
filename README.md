This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live Chat Room

This project is a simple live chat room application built with TypeScript, React, and Ably. It allows users to join a chat room with a username and send and receive messages in real-time.

# Features

User authentication with usernames
Real-time messaging using Ably channels
Responsive design for mobile and desktop
Simple and intuitive user interface


# Technologies Used

[TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static typing to the language.
[React](https://react.dev/): A JavaScript library for building user interfaces.
[Ably](https://ably.com/): A real-time messaging platform that provides the infrastructure to build live chat applications.

# Installation

Clone the repository:


```bash
git clone <repository-url>
```

Install dependencies:
```bash
cd live-chat-room
npm install
```

Set up environment variables:

Create a .env.local file in the root directory.
Add your Ably API key and client ID to the .env.local file:


```bash
NEXT_PUBLIC_ABLY_API_KEY=your-api-key
NEXT_PUBLIC_ABLY_CLIENT_ID=your-client-id
```

Run the development server:
npm run dev

```bash
npm run dev
```
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.
To see the live chat and others' messages, open another localhost in a separate browser window or tab.

# Usage
Enter your desired username in the username input field and click "Submit" to join the chat room.
Type your message in the message input field and press "Send" to send it to the chat room.
Your messages will be displayed in real-time along with messages from other users.


Feel free to customize the content according to your project's specific details and requirements. Once you have created your README.md file, you can add it to your Git repository and commit it along with your project code.