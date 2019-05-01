import { Component, render } from 'vreact'

class App extends Component {
  render () {
    return <h1>hello, world</h1>
  }
}

render(<App />, document.getElementById('app'))
