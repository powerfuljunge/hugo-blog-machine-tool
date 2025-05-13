module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // ← ここに変更
    require('autoprefixer')
  ]
}
