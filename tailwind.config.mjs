/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        HT: {
          main: "#EA0029",
          sub: "#06141F"
        },

        LG: {
          main: '#C30452',
          sub: '#000000'
        },
        OB: {
          main: '#010039',
          sub: '#ef1c26'
        },
        LT: {
          main: '#041E42',
          sub: '#D00F31'
        },
        SS: {
          main: '#074CA1',
          sub: '#C0C0C0'
        },
        HH: {
          main: '#F04E00',
          sub: '#07111F'
        },
        SK: {
          main: '#CE0E2D',
          sub: '#ffb81c'
        },
        NC: {
          main: '#315288',
          sub: '#AF917B',
          sub_text: '#00275A'
        },
        KT: {
          main: '#000000',
          sub: '#EB1C24'
        },
        WO: {
          main: '#570514',
          sub: '#B07F4A'
        },

        kbo: '#002561'
      },

      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif']
      },
    },
  },
  // 정적으로 파악하지 못하는 클래스를 명시적으로 지정해두기
  safelist: [
    { pattern: /text-(HT|LG|OB|LT|SS|HH|SK|NC|KT|WO)-main/ },
  ],
  plugins: [],
};
