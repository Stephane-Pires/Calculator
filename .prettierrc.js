module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    importOrder: [
        '^next',
        '^@prisma/(.*)$',
        '^@apollo/(.*)$',
        '^@graphql/(.*)$',
        '^@utils/(.*)$',
        '^@lib/(.*)$',
        '^@chakra-ui/(.*)$',
        '^@components/(.*)$',
        '^@styles/(.*)$',
        '^@custom-types/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
}
