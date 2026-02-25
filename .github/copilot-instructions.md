# Copilot Instructions for English Grammar Book

## Project Overview
This project is an English grammar book focused on teaching the usage of the verb "to be" through various examples and exercises. The content is structured in HTML files, with styles defined in CSS and JavaScript for navigation.

## Architecture
- **Main Components**: The project consists of HTML files for different grammar topics (e.g., `to-be.html`, `pronouns.html`, `articles.html`).
- **Data Flow**: Each topic file contains structured content that includes explanations, examples, and exercises. The layout is consistent across files, promoting a uniform learning experience.
- **Styling**: CSS is used for styling, with variables defined for colors and spacing to maintain a cohesive design.

## Developer Workflows
- **Building and Testing**: The project does not have a formal build process, as it is primarily HTML/CSS/JS. Ensure that all links between files are functional and that the layout is responsive.
- **Debugging**: Use browser developer tools to inspect elements and debug JavaScript functionality. Pay attention to console errors that may arise from navigation scripts.

## Project-Specific Conventions
- **HTML Structure**: Each topic file follows a similar structure:
  - Header with navigation links
  - Main content divided into sections with titles and examples
  - Use of semantic HTML elements (e.g., `<h2>`, `<div>`, `<table>`) for clarity and accessibility.
- **CSS Variables**: Utilize CSS variables for colors and spacing to ensure consistency across styles.

## Integration Points
- **External Dependencies**: The project relies on local assets (CSS and JS files) located in the `assets/` directory. Ensure these files are correctly linked in each HTML file.
- **Cross-Component Communication**: Navigation between topics is handled through links in the header, allowing users to move seamlessly between different grammar sections.

## Examples of Patterns
- **Conjugation Display**: The `to-be.html` file demonstrates how to present verb conjugations using a grid layout for clarity.
- **Example Lists**: Each section includes example sentences that illustrate the grammatical rules being taught, formatted consistently for easy reading.

## Conclusion
This document serves as a foundational guide for AI agents to navigate and contribute to the English Grammar Book project effectively. For any updates or additional patterns discovered, please refer to this document for revisions.
