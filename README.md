# Stream - Video Conferencing Application

## Introduction
Stream is a modern video conferencing application built with Next.js and TypeScript. It provides a seamless and secure platform for real-time video meetings, screen sharing, and collaboration. The application offers features similar to popular platforms like Zoom while maintaining high performance and user privacy.

## Features

### Core Features
- **Secure Authentication** - User authentication powered by Clerk
- **Real-time Video Conferencing** - High-quality video meetings using getstream
- **Screen Sharing** - Share your screen during meetings
- **Meeting Recording** - Record meetings for future reference
- **Chat Functionality** - Real-time chat during meetings

### Meeting Controls
- Camera and microphone controls
- Meeting recording options
- Emoji reactions
- Screen sharing capabilities
- Audio settings management
- Grid layout customization
- Participant management
  - Pin/unpin participants
  - Mute/unmute controls
  - Video permissions

### Meeting Management
- **Quick Meetings** - Start instant meetings
- **Scheduled Meetings** - Plan future meetings
- **Personal Meeting Rooms** - Dedicated spaces for hosts
- **Meeting History** - Access past meeting recordings
- **Join via Link** - Easy meeting access through shareable links

## Tech Stack
- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Authentication**: Clerk
- **Video SDK**: getstream
- **UI Components**: shadcn
- **Styling**: Tailwind CSS

## Screenshots

![Home Page](/public/screenshots/Home.png)
![Meeting Page](/public/screenshots/Meeting.png)
![Recordings](/public/screenshots/Recordings.png)

## Getting Started

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/stream.git
cd stream
```

2. Install dependencies
```bash
npm install # or yarn install
```

### Obtaining API Keys

#### Clerk Authentication Keys
1. Go to [clerk.dev](https://clerk.dev) and sign up for an account
2. Create a new application
3. Navigate to API Keys in the dashboard
4. Copy the `Publishable Key` and `Secret Key`

#### GetStream Video SDK Keys
1. Visit [getstream.io](https://getstream.io) and create an account
2. Create a new project and select "Video & Audio" product
3. Go to the Dashboard > Project Settings
4. Copy the `API Key` and `API Secret`

### Configuration

1. Create a `.env.local` file in the root directory and add:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```

2. Run the development server
```bash
npm run dev # or yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser
