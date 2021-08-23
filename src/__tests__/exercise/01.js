// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

/* !! clean up your environment between each test !! */
beforeEach(() => (document.body.innerHTML = ''))

/* test 1 */
test('counter starts at 0', () => {
  const testDiv = document.createElement('div')
  document.body.append(testDiv)

  ReactDOM.render(<Counter />, testDiv)

  const message = testDiv.querySelector('.count-display')
  expect(message.textContent).toBe('Current count: 0')
})

/* test 2 */
test('counter increments and decrements when the buttons are clicked', () => {
  const testDiv = document.createElement('div')
  document.body.append(testDiv)

  ReactDOM.render(<Counter />, testDiv)

  console.log(testDiv.innerHTML)

  const increment = document.getElementById('increment')
  const decrement = document.getElementById('decrement')
  const message = testDiv.querySelector('.count-display')

  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })

  increment.dispatchEvent(clickEvent)
  expect(message.textContent).toBe('Current count: 1')

  decrement.dispatchEvent(clickEvent)
  expect(message.textContent).toBe('Current count: 0')
})

/* eslint no-unused-vars:0 */
