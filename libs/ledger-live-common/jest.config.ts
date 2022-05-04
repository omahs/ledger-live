export default {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  testEnvironment: "node",
  coverageDirectory: "./coverage/",
  coverageReporters: ["json", "lcov", "clover"],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["src/__tests__"],
  modulePathIgnorePatterns: [
    "<rootDir>/benchmark/.*",
    "<rootDir>/cli/.yalc/.*",
  ],
  testPathIgnorePatterns: [
    "benchmark/",
    "tools/",
    "mobile-test-app/",
    "lib/",
    "lib-es/",
    ".yalc",
    "cli/",
    "test-helpers/",
  ],
  moduleNameMapper: {
    "^@polkadot/networks/(.*)": "@polkadot/networks/$1.js",
    "^@polkadot/networks$": "@polkadot/networks/cjs/index.js",
    "^@polkadot/types/codec$": "@polkadot/types/cjs/codec/index.js",
    "^@polkadot/types/primitive$": "@polkadot/types/cjs/primitive/index.js",
    "^@polkadot/types/augment$": "@polkadot/types/cjs/augment/index.js",
    "^@polkadot/types/metadata$": "@polkadot/types/cjs/metadata/index.js",
    "^@polkadot/types/metadata/decorate$":
      "@polkadot/types/cjs/metadata/decorate/index.js",
    "^@polkadot/types/types$": "@polkadot/types/cjs/types/index.js",
    "^@polkadot/types/(.*)/(.*)": "@polkadot/types/$1/$2.js",
    "^@polkadot/types/(.*).js$": "@polkadot/types/$1.js",
    "^@polkadot/types/(.*)": "@polkadot/types/$1.cjs",
    "^@polkadot/types$": "@polkadot/types/cjs/index.js",
    "^@polkadot/types-known/(.*)": "@polkadot/types-known/$1.js",
    "^@polkadot/types-known$": "@polkadot/types-known/cjs/index.js",
    "^@polkadot/util/(.*).js$": "@polkadot/util/$1.js",
    "^@polkadot/util$": "@polkadot/util/cjs/index.js",
    "^@polkadot/util-crypto$": "@polkadot/util-crypto/cjs/index.js",
    "^@polkadot/wasm-crypto$": "@polkadot/wasm-crypto/cjs/index.js",
    "^@polkadot/wasm-crypto-asmjs/(.*)": "@polkadot/wasm-crypto-asmjs/$1.js",
    "^@polkadot/wasm-crypto-asmjs$": "@polkadot/wasm-crypto-asmjs/cjs/index.js",
    "^@polkadot/wasm-crypto-wasm/(.*)": "@polkadot/wasm-crypto-wasm/$1.js",
    "^@polkadot/wasm-crypto-wasm$": "@polkadot/wasm-crypto-wasm/cjs/index.js",
    "^@polkadot/x-global$": "@polkadot/x-global/cjs/index.js",
    "^@polkadot/x-randomvalues$": "@polkadot/x-randomvalues/cjs/node.js",
    "^@polkadot/x-textdecoder$": "@polkadot/x-textdecoder/cjs/node.js",
    "^@polkadot/x-textencoder$": "@polkadot/x-textencoder/cjs/node.js",
    "^@polkadot/x-bigint/(.*)": "@polkadot/x-bigint/$1.js",
    "^@polkadot/x-bigint$": "@polkadot/x-bigint/cjs/index.js",
    "^@polkadot/x-noble-secp256k1$": "@polkadot/x-noble-secp256k1/cjs/index.js",
    "^@polkadot/x-noble-hashes/(.*)": "@polkadot/x-noble-hashes/$1.js",
    "^@polkadot/x-noble-hashes$": "@polkadot/x-noble-hashes/cjs/index.js",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@polkadot|@babel/runtime/helpers/esm/)",
  ],
  moduleDirectories: ["node_modules", "cli/node_modules"],
};
