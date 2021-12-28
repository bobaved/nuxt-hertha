export default function() {
  return {
    httpEndpoint: 'https://strapi-hertha.herokuapp.com/graphql',
    getAuth: () => `Bearer ${process.env.cmsApiToken}`
  }
}