# Todo List App

A modern and minimalistic Todo List application built with React and Vite. It allows you to keep track of your daily tasks, persist them in the browser, and manage your productivity efficiently. The project features modular and reusable React components with SCSS styling.

## Features

- Add and delete tasks
- Toggle completed state for each task
- Persistent storage with `localStorage`
- Responsive and clean UI
- Modular components for maintainability

## Tech Stack

- **React 19**
- **Vite** (for dev server & build)
- **SCSS** for styling
- **ESLint & Prettier** for code quality

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd todo-list
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open the app:**
   - The app will be running locally at `http://localhost:5173` (default Vite port). 

## Build for Production

```bash
npm run build
```

Preview the built app:
```bash
npm run preview
```

## Project Structure

```
src/
  app/             Main app container and styles
  entities/        Form and item components
  wigets/          TodoList widget
  shared/          Reusable UI and utility code
  shared/utils/    Utility functions (like compareArrs)
public/icons/      SVG icons
```

## Notes
- All tasks are persisted in the browser via localStorage.
- The equality check for tasks uses a custom `compareArrs` utility.
- Styling is done with SCSS modules for encapsulation.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a new Pull Request

## License
[MIT](LICENSE) (add a license file if you want to specify one)

