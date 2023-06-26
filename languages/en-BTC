/*!
 * numbro.js language configuration
 * language : English
 * locale: NA
 * author : BitGatitio : https://github.com/bitGatito
 */

module.exports = {
    languageTag: "en-BTC",
    delimiters: {
        thousands: ",",
        decimal: "."
    },
    abbreviations: {
        thousand: "k",
        million: "m",
        billion: "b",
        trillion: "t"
    },
    ordinal: number => {
        let b = number % 10;
        return (~~(number % 100 / 10) === 1) ? "th" : (b === 1) ? "st" : (b === 2) ? "nd" : (b === 3) ? "rd" : "th";
    },
    currency: {
        symbol: "₿",
        position: "prefix",
        code: "BTC"
    },
    currencyFormat: {
        thousandSeparated: true,
        totalLength: 4,
        spaceSeparated: false,
        spaceSeparatedCurrency: false,
        average: true
    },
    formats: {
        fourDigits: {
            totalLength: 4,
            spaceSeparated: false,
            average: true
        },
        fullWithTwoDecimals: {
            output: "currency",
            thousandSeparated: true,
            spaceSeparated: false,
            mantissa: 2
        },
        fullWithTwoDecimalsNoCurrency: {
            mantissa: 2,
            thousandSeparated: true
        },
        fullWithNoDecimals: {
            output: "currency",
            thousandSeparated: true,
            spaceSeparated: false,
            mantissa: 0
        }
    }
};
