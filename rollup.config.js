import postcss from 'rollup-plugin-postcss';

export default {
  plugins: [
    postcss({
      extract: true,
      modules: true,
    }),
  ],
};
