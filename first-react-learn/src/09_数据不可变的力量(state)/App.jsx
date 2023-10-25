import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super()

    this.state = {
      books: [
        { name: "1", price: 1, count: 1},
        { name: "2", price: 1, count: 2},
        { name: "3", price: 1, count: 3},
        { name: "4", price: 1, count: 4}
      ]
    }
  }

  render() {
    const  { books } = this.state
    return (
      <div>
        <h2>列表</h2>
        <ul>
          {
            books.map((item, index) => {
              return <li key={index}>
                {item.name} - {item.price}
                <button>+1</button>
              </li>
            })            
          }
        </ul>
      </div>
    )
  }
}

export default App