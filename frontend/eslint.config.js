// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import unusedImports from "eslint-plugin-unused-imports"; // ← 未使用import削除用(任意)

export default defineConfig([
  // dist はそもそも見ない
  globalIgnores(["dist"]),

  // ★ Storybook 用のルールセットを flat-config で丸ごと適用
  //    *.stories.* や .storybook 配下にだけ自動で効きます
  //    （README にある `flat/recommended` の使い方そのままです）
  ...storybook.configs["flat/recommended"],

  // 通常のアプリコード用設定
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "unused-imports": unusedImports, // ← ここでプラグイン登録
    },
    extends: [
      js.configs.recommended,
      // tseslint の recommended は配列なのでスプレッドしておくと安心
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // デフォルトの unused は切って、unused-imports に任せる
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // 未使用 import をエラー + 自動削除対象に
      "unused-imports/no-unused-imports": "error",

      // 未使用変数もこのプラグイン側で見る場合
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_", // _foo は許可
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
]);
