import React, { Component } from 'react'
import ColorList from './components/ColorList'
import ColorForm from './components/ColorForm'
import ColorMixer from './components/ColorMixer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <main>
      <div className="jumbotron jumbotron-fluid bg-light text-dark border-bottom">
        <div className="container">
          <h1 className="display-4">Color Mixer React App</h1>
          <p className="lead">Install a JSX syntax highlighter package in your text editor to get started!</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h2 className="h4 text-center mb-4">Colors</h2>
            <ColorList />
          </div>
          <div className="col">
            <h2 className="h4 text-center mb-4">Mix Result</h2>
            <ColorMixer />
          </div>
          <div className="col-3">
            <h2 className="h4 text-center mb-4">Add a Color</h2>
            <ColorForm />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
