module.exports = {
  moduleFileExtensions: [
    "js",
    "vue"
  ],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1"
  },
  modulePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress"
  ],
  testURL: "http://localhost",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest"
  }
}