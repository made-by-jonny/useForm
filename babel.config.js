module.exports = process.env.NODE_ENV === 'test' ? {
    presets: [
        ["@babel/preset-env", { targets: { node: 'current' } }],
        "@babel/preset-react"
    ],
} : {
    // Configuration suitable for your targets.
    // Possibly including `@babel/plugin-transform-runtime`.
}