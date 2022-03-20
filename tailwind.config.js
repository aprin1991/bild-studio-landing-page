module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            'theme-f1': ['"Merriweather"', "serif"],
            'theme-f2': ['"Montserrat"', "serif"],
        },
        fontSize: {
            'xs': '12px',
            'sm': '14px',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
        },
        extend: {
            spacing: {
                '256': '42rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};