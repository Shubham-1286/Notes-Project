# Notes Project

A simple notes app built with React and Vite. It allows users to add notes with a heading and description, display them in a responsive notes panel, and remove notes one-by-one.

## Key Features

- Add note items with a heading and description
- Display notes in a card-style grid
- Delete individual notes
- Built with React 19 and Vite for fast development
- Uses Tailwind-style utility classes for layout and styling

## Project Structure

- src/App.jsx — Main application component with note form and notes display
- src/components/Cards.jsx — A reusable card component placeholder (currently unused in App.jsx)
- src/main.jsx — Application entry point
- src/index.css — Global styles and Tailwind import
- package.json — Project metadata, dependencies, and scripts

## Technologies Used

- React 19
- Vite
- Lucide React for icons
- ESLint for linting

## Setup Instructions

1. Clone the repository:

`ash
git clone https://github.com/Shubham-1286/Notes-Project
cd notes-project
`

2. Install dependencies:

`ash
npm install
`

3. Start the development server:

`ash
npm run dev
`

4. Open the local URL shown in the console (usually http://localhost:5173/).

## Available Scripts

- 
pm run dev — Start the Vite development server
- 
pm run build — Build the production bundle
- 
pm run preview — Preview the production build locally
- 
pm run lint — Run ESLint across the project

## Usage

- Enter a title in the "Enter Notes Heading" field
- Enter details in the "Enter Details" textarea
- Click Add Notes
- Existing notes appear on the right side
- Click Delete to remove a note

## Notes and Improvements

- The current app stores notes only in memory, so notes are lost after a page refresh
- There is no external backend or persistent database
- Future improvements could include:
  - localStorage support for persistence
  - editing existing notes
  - note categories or tags
  - improved validation and error handling

## Contribution

Feel free to fork this repository and submit pull requests for UI improvements, feature enhancements, or bug fixes.

## License

This project is open source and can be used freely. Add a license file if you want to specify license terms.
