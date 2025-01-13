import type { ConfigAPI } from "@babel/core";

export default function (api: ConfigAPI) {
  api.cache.forever();

  return {
    presets: ["next/babel"],
    plugins: [
      [
        "styled-components",
        {
          ssr: true,
          displayName: true,
          preprocess: false,
        },
      ],
    ],
  };
}
