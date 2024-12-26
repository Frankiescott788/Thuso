```markdown
# Thuso Web Application

Thuso is an innovative project designed to assist blind individuals with navigation and object detection. The project was presented at the GeekLucha Annual Hackathon, where it proudly took 3rd place. It combines a physical bot called Thuso with a web application for monitoring and managing the bots remotely. The goal is to make everyday tasks safer and more manageable for visually impaired people.

## Overview

- **Thuso Bot**: A physical robot designed to assist blind people in navigating their surroundings and detecting obstacles.
- **Web Application**: A centralized platform for monitoring the bot's performance, real-time location, and providing administrative control to oversee the assistance provided to users.

## Objective

To enhance the safety and mobility of blind individuals by providing them with a tool that can navigate spaces and detect obstacles, while allowing a web-based system to monitor and manage the bot’s activity.

## Features

- **Navigation Assistance**: Thuso provides audio cues to guide users through their environment.
- **Object Detection**: The bot detects obstacles and informs the user to avoid collisions.
- **Real-Time Monitoring**: The web application enables administrators to track the bot’s status, location, and activities in real-time.
- **User Management**: Allows operators to monitor and control multiple bots remotely.
- **Feedback System**: Users can report issues or request help via the web application, which can then be addressed by the monitoring team.

## Technologies Used

- **Frontend**: React, Tailwind CSS (for the web application)
- **Backend**: Firebase
- **Bot Technology**: Sensors and embedded systems for object detection and navigation
- **Additional Tools**:
  - WebSocket for real-time communication between the bot and the web application
  - Leaflet API (for navigation-related features)

## Installation

To run the Thuso web application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/username/thuso-web.git
    cd thuso-web
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Access the web application at [http://localhost:3000](http://localhost:3000).

## How It Works

- **User Registration**: Blind users can sign up for the service and link their Thuso bot to their account.
- **Navigation**: The Thuso bot guides the user through the environment by providing audio cues and alerts when obstacles are detected.
- **Monitoring**: The web application serves as the central hub for administrators to monitor the bot’s activity, track its location, and respond to requests for assistance.
- **Real-Time Feedback**: The bot communicates with the web application to send real-time updates on its current status and surroundings.

## Impact

- **Improved Mobility**: Empower blind individuals by enhancing their ability to navigate public and private spaces independently.
- **Increased Safety**: Detecting obstacles and preventing collisions reduces the risk of accidents and injuries.
- **Centralized Monitoring**: Administrators can oversee multiple bots in real-time, ensuring that assistance is always available.
- **Accessibility**: The solution makes daily activities more accessible and manageable for blind individuals.

## Future Work

- **Scalability**: Increase the number of bots available to cover more regions and improve accessibility.
- **Advanced Object Detection**: Improve the bot's object detection capabilities using machine learning and AI.
- **Mobile App**: Develop a mobile app to allow users and administrators to access the system on-the-go.

## Acknowledgments

This project was presented at the GeekLucha Annual Hackathon, where it earned 3rd place. We thank the organizers and fellow participants for their support and inspiration.
```
