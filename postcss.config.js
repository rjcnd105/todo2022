module.exports = {
    plugins:
        {
            'tailwindcss/nesting': require('postcss-nesting'),
            tailwindcss: {},
            'postcss-flexbugs-fixes': {},
            'postcss-preset-env': {
                features: { 'nesting-rules': false },
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 1,
            },
            'rusksack-css': {}
        }
}