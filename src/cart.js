import fulfillAPIRequest from 'react-storefront/props/fulfillAPIRequest'
import createAppData from './utils/createAppData'

export default async function cart(req, res) {
  const products = []

  return fulfillAPIRequest(req, {
    appData: createAppData,
    pageData: () =>
      Promise.resolve({
        title: 'My Cart',
        breadcrumbs: [
          {
            text: 'Home',
            href: '/',
          },
        ],
        cart: {
          items: products.map((item, i) => ({
            ...item,
            quantity: 1,
          })),
        },
      }),
  })
}
