import type { Config } from "@jest/types";
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverageFrom: ["src/**/*.{ts, js}"],
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  coveragePathIgnorePatterns: ["server.ts"],
};

export default config;
