/*!
 * numbro.js language configuration
 * language : English
 * locale: NA
 * author : BitGatitio : https://github.com/bitGatito
 */

module.exports = {
    languageTag: "x-bitcoin",
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
    ordinal: function() {
        return ".";
    },
    currency: {
        symbol: "₿",
        position: "prefix",
        code: "BTC"
    }
};
