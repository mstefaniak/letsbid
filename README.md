# To start

`yarn` and then `yarn start`

# To mock API

`yarn api-mock`


# Front-end Test Task
## Task

Develop SPA which should manage merchants. A user can interact with:
 - list of merchants (better with pagination)
 - adding merchant (any library which can help in creating forms is allowed but not required)
 - merchant editing
 - merchant removing
 - sorted history of bids for each merchant

Front-end part should be developed as SPA with ES6, React and Redux.
You can also use TypeScript to develop this task, but it is not required
In the folder you can find an example seed on which you can start to prepare app
IMPORTANT - you can freely modify what's inside that seed to adjust it to your code - you can also use some different react app starter - it's up to you.
Back-end API should be mocked.
Also array of bids which will be assigned to newly created merchant can be randomized somehow.

## Data structure example
`Bid {
  id: string,
  carTitle: string,
  amount: number,
  created: string
}`

`Merchant {
  id: string,
  firstname: string,
  lastname: string,
  avatarUrl: string,
  email: string,
  phone: string,
  hasPremium: boolean,
  bids: Array<Bid>
}`
