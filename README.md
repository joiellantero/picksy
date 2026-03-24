# Name Roulette Web

Name Roulette Web is an open-source web app that picks a random name from a list — fairly and instantly.

[![Visit - webapp](https://img.shields.io/badge/Visit-webapp-2ea44f?style=for-the-badge&logo=vercel)](https://nameroulette.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

---

## Features

- **Random name picker** — instantly draws a name from your list with a confetti celebration
- **Participants list** — add names manually (one per line) or upload a `.txt` / `.csv` file
- **Winner prompt** — customise the message shown when a name is drawn
- **Remove after chosen** — optionally remove a name from the pool after it's picked
- **Light / dark mode** — toggle from the nav on desktop, or the bottom dock on mobile
- **Animated bottom dock** — mobile-first navigation with smooth framer-motion transitions
- **Fully client-side** — no data is ever sent to a server; everything runs in the browser
- **State persistence** — theme, names list, winner message, and behavior settings are all saved to `localStorage` via Recoil

## Tech Stack

| Library | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Tailwind CSS | 3 | Styling |
| Recoil | 0.7 | State management + localStorage persistence |
| Framer Motion | 11 | Animated bottom dock and transitions |
| React Router DOM | 6 | Client-side routing |
| Headless UI | 1.7 | Accessible modal / dialog |
| react-canvas-confetti | 2 | Winner confetti animation |

## Getting Started

### Run locally

```shell
# 1. Clone the repo
git clone https://github.com/joiellantero/name-roulette-web.git
cd name-roulette-web

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app will be available at `http://localhost:3000`.

### Build for production

```shell
npm run build
```

### Deploy

Works out of the box with [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any static hosting provider — just point it at the `build/` folder.

## Customization

Theme colors (indigo / violet brand palette, dark background, animations) are defined in `tailwind.config.js`. Update the values there to retheme the app.

## File Upload Notes

The file input accepts `.txt` and `.csv` files. Due to a [Chromium bug on macOS](https://bugs.chromium.org/p/chromium/issues/detail?id=646941), some text-like files (`.py`, `.js`, etc.) may pass the browser's `accept` filter. This is handled defensively in `FileUpload.js` by re-validating the file extension before reading it.

## Contributors

All contributions are welcome! Feel free to open issues or pull requests.

## Support

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/joiel)

## License

This project is licensed under the **[PolyForm Noncommercial License 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/)**.

**In Summary:**
- ✅ Free to use, study, and modify for personal or open-source projects
- ✅ Free to share and redistribute non-commercially
- ❌ Cannot be used for commercial purposes
- ❌ Cannot be used in any way that generates revenue or monetary compensation
