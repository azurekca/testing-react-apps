// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login'

const buildLoginForm = build('user', {
  fields: {
    //passing in a callback function to fake ensures new data is generated every time we use this, otherwise we would get the same value each time we called buildLoginForm
    username: fake(faker => faker.internet.userName()),
    password: fake(faker => faker.internet.password()),
  },
})

test('submitting the form calls onSubmit with username and password', () => {
  const mock = jest.fn()

  render(<Login onSubmit={mock} />)

  const {username, password} = buildLoginForm()
  console.log(username, password)
  const {username: u, password: p} = buildLoginForm()
  console.log(u, p)

  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)

  const button = screen.getByRole('button', {name: /submit/i})
  userEvent.click(button)

  expect(mock).toHaveBeenCalledWith({username, password})
  expect(mock).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
