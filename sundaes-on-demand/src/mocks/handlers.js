import { rest } from 'msw'

export const BACKEND_BASE_URL = 'http://localhost:3030/'

export const handlers = [
  rest.get(BACKEND_BASE_URL + 'toppings', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'M&Ms',
          imagePath: '/images/m-and-ms.png',
        },
        {
          name: 'Hot fudge',
          imagePath: '/images/hot-fudge.png',
        },
      ])
    )
  }),
  rest.get(BACKEND_BASE_URL + 'scoops', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Mint chip',
          imagePath: '/images/mint-chip.png',
        },
        {
          name: 'Vanilla',
          imagePath: '/images/vanilla.png',
        },
      ])
    )
  }),
  rest.post(BACKEND_BASE_URL + 'order', (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ orderNumber: 100 }))
  }),
]
