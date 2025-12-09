// frontend/types/css.d.ts
declare module '*.css' {
  // 副作用 import 用なので中身は何でも良いが、とりあえず無害なやつ
  const css: unknown;
  export default css;
}
