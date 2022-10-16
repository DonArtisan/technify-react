module.exports = {
  customScalars: {
    Date: 'string',
    DateTime: 'string',
    JSON: 'Record<string, any>',
    URL: 'string',
  },
  excludes: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  language: 'javascript',
  schema: `./schema/schema.graphql`,
  src: `./src`,
};
