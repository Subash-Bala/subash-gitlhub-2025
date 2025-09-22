import reactLogo from './assets/react.svg'
import gitlabLogo from './assets/gitlab.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://gitlab.com" target="_blank">
          <img src={gitlabLogo} className="logo" alt="GitLab logo" />
        </a>
      </div>
      <h1>Learn GitLab CI/CD at ClickOps</h1>
      <div className="card">
        <h2>AWS DevOps Program:2025</h2>
        <p>
          Dive into the world of CI/CD and learn the effective ways to integrate it into your pipeline with Subash
        </p>
        <p>
          Hint: Edit <code>src/App.jsx</code> to make changes to this page.
        </p>
      </div>
      <p className="read-the-docs">
        Created by Subash 
      </p>
      <p className="read-the-docs">
        Application version: 1
      </p>
    </>
  )
}

export default App
