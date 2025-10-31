# chat.ras.sh

💬 AI chat that runs entirely in your browser. No servers, no tracking, complete privacy.

## Overview

A privacy-first chat interface that leverages your browser's built-in AI capabilities. All inference happens locally on your device - your conversations never leave your browser.

**Supported browsers:**
- Chrome 128+ (Gemini Nano)
- Edge 138+ (Phi-4 Mini)

## Features

- **100% Local** - All AI inference runs directly in your browser
- **Complete Privacy** - Zero external API calls, no data collection
- **Smart Suggestions** - Get contextual follow-up questions after each response
- **Streaming Responses** - Real-time AI responses as they generate
- **Modern UI** - Clean, responsive interface with dark mode
- **Model Download Progress** - Visual indicators when downloading models

## Tech Stack

- [TanStack Start](https://tanstack.com/start) - Full-stack React framework
- [@built-in-ai/core](https://github.com/built-in-ai/core) - Browser Built-in AI integration
- [AI SDK](https://ai-sdk.dev/) - Streaming and message handling
- React 19, TypeScript, Tailwind CSS

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open http://localhost:3000 in Chrome 128+ or Edge 138+.

## How It Works

This app uses the experimental Browser Built-in AI APIs that are currently available in Chrome and Edge. On first use, the AI model (Gemini Nano in Chrome or Phi-4 Mini in Edge) will be downloaded and cached locally.

All processing happens on your device using WebGPU for hardware acceleration. No data is sent to external servers.

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx              # Root layout
│   └── index.tsx               # Main chat interface
├── components/
│   ├── chat-empty-state.tsx    # Empty state with suggestions
│   ├── chat-input.tsx          # Message input component
│   ├── chat-messages.tsx       # Message list display
│   ├── header.tsx              # App header
│   └── footer.tsx              # App footer
├── lib/
│   └── client-side-chat-transport.ts  # Browser AI integration
├── hooks/
│   └── use-browser-ai-support.ts      # Browser compatibility check
└── types/
    └── ui-message.ts           # Message type definitions
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm check-types` | TypeScript type checking |
| `pnpm check` | Lint code with Biome |
| `pnpm fix` | Auto-fix linting issues |

## Browser Requirements

This app requires a browser with Built-in AI support:

- **Chrome 128+** with Gemini Nano enabled
- **Edge 138+** with Phi-4 Mini enabled

If your browser doesn't support Built-in AI, you'll see a warning message on the chat interface.

## Privacy & Data

- **No external servers** - All processing happens in your browser
- **No data collection** - Your conversations are never logged or sent anywhere
- **No persistence** - Messages are kept in memory only (refresh to clear)
- **Local model caching** - Downloaded models are cached by the browser

## Development

Built with modern web technologies:

- **React 19** for UI components
- **TanStack Start** for full-stack React
- **AI SDK** for streaming message handling
- **Tailwind CSS** for styling
- **Biome** for linting and formatting

## License

MIT License - see [LICENSE](LICENSE) for details.
