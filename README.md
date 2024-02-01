# Vapi Integration Starter Template

This starter template is designed to help you quickly integrate Vapi into your project. It showcases a bot that assists authors in defining characters for their stories, demonstrating the ease of integrating Vapi to manipulate the frontend, display backend results, and leverage other capabilities.

## Features

- **Real-time Interaction**: Interact with the bot in real-time to refine character traits and details.
- **Message Handling**: Send and receive messages to and from the bot, handling different message types.
- **Audio Level Visualization**: Visual feedback on the audio level during bot interaction.
- **Event Handling**: Start, stop, and toggle bot calls with proper event management.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up your `.env` file with the required Vapi tokens.
4. Run the development server with `npm run dev`.

## Integration Points

- **Vapi SDK**: Integrated via `vapi.sdk.ts` to manage the Vapi instance.
- **React Hooks**: `useVapi.ts` to encapsulate Vapi logic within React components.
- **Event Listeners**: Set up listeners for various Vapi events like speech start/end, call start/end, and message updates.
- **Message Components**: Render messages and transcripts in real-time as they are received from the bot.
- **Character Details**: Edit and save character details, which are then sent as messages to the bot for processing.

## Project Structure

- `src/`: Source files for the application.
- `src/features/Assistant/`: Components and hooks related to Vapi integration.
- `src/features/Character/`: Components for character details and manipulation.
- `src/lib/`: Shared types and utility functions.
- `src/components/ui/`: Reusable UI components.

## Customization

You can customize the bot's behavior and appearance by modifying the `character.assistant.ts` and the corresponding React components.
