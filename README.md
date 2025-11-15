<h1>csc372-assignment8</h1>

<p>
  This assignment is an expansion on assignment 5 (the Rock, Paper, Scissors game). 
  This version is implemented using React and Vite.
</p>

<p>
  <a href="https://uncg-my.sharepoint.com/:v:/g/personal/ajcichoski_uncg_edu/IQC_yJHHsTKhRIhLy68KA9NtAREkN635nWxvlP1aNPYaNX4?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=nuAnC7">
    Follow this link for the demo
  </a>
</p>

<hr>

<h2>Rock, Paper, Scissors – React Version</h2>

<p>
  This project is a React implementation of the classic Rock–Paper–Scissors game, 
  created for <strong>CSC 372 – Assignment 8</strong>. The goal of this assignment was to rebuild my earlier 
  JavaScript version of the game using React concepts such as components, props, state, event handling, and hooks.
</p>

<p>
  The app allows the user to select a throw, animates the computer's throw with a timed shuffle, determines the winner, 
  and displays the results on screen. For extra credit, the app also keeps score across rounds and includes a reset option.
</p>

<h3>How to Run This Project</h3>

<h4>Prerequisites</h4>
<ul>
  <li>Node.js 20.19+ or 22.12+</li>
  <li>npm (comes with Node)</li>
</ul>

<h4>Setup Instructions</h4>
<ol>
  <li>Clone or download this repository.</li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Start the development server:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>Open the link provided in your terminal (usually <code>http://localhost:5173</code>) to run the app.</li>
</ol>

<h3>Project Structure</h3>

<p>This app was built using <strong>Vite + React</strong> and is organized into reusable components:</p>

<ul>
  <li><strong>App.jsx</strong> – Root component that manages overall game state and layout</li>
  <li><strong>PlayerThrow.jsx</strong> – Displays and handles the user’s selection of rock, paper, or scissors</li>
  <li><strong>ComputerThrow.jsx</strong> – Animates the computer’s choice for 3 seconds, then reveals the result</li>
  <li><strong>ResultDisplay.jsx</strong> – Shows whether the user won, lost, or tied</li>
  <li><strong>ScoreBoard.jsx</strong> (Extra Credit) – Displays wins, losses, and ties</li>
  <li><strong>ResetButton.jsx</strong> (Extra Credit) – Resets the entire game and score</li>
</ul>

<p>
  All styles are handled via an external CSS file, following the assignment requirement to avoid inline styles.
</p>

<h3>Gameplay Logic</h3>

<ul>
  <li>The user selects a throw by clicking an image.</li>
  <li>The computer’s throw animates by cycling through images for a short period of time.</li>
  <li>At the end of the animation, the computer’s final throw is randomly selected.</li>
  <li>The winner is determined using all nine possible outcome combinations.</li>
  <li>The result is displayed below the throw images.</li>
  <li>For extra credit, the scoreboard updates after each round and the reset button clears both the active round and the score.</li>
</ul>

<p>
  React hooks like <code>useState</code> and <code>useEffect</code> are used to control animation timing, selections, 
  display logic, and score tracking.
</p>

<h3>Styling &amp; Accessibility</h3>

<ul>
  <li>Uses external CSS stylesheets, not inline styles, as required.</li>
  <li>Images include <code>alt</code> attributes for screen-reader compatibility.</li>
  <li>Buttons and images can be clicked and also triggered with keyboard navigation.</li>
  <li>All layout elements use semantic HTML within JSX (<code>nav</code>, <code>div</code>, tables, headings, etc.).</li>
  <li>Colors and spacing are based on the original non-React version from earlier in the semester.</li>
</ul>

<h3>Reflection</h3>

<p>
  This assignment helped reinforce how React manages UI updates compared to traditional JavaScript DOM manipulation. 
  Rebuilding my earlier Rock–Paper–Scissors project in React required me to break down the app into smaller components 
  and think in terms of state and data flow rather than direct DOM access.
</p>

<p>
  Managing the computer’s animation using <code>useEffect</code>, timers, and state was the most challenging part, 
  because it required coordinating asynchronous behavior inside React’s state system. Separating the UI into modular 
  components also made the project more organized and easier to modify.
</p>

<p>
  Overall, this assignment strengthened my understanding of React hooks, component-based design, and how 
  event-driven applications can be structured in a more scalable way.
</p>
