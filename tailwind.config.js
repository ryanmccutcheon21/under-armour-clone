module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'UAHOVR': "url('https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FSS22_Run_HOVR_Sonic5_Site_7_5_W%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75')",
        'Curry': "url('https://underarmour.scene7.com/is/image/Underarmour/FW22_CURRY_CurryFlow10_ISI_Site_2_1?qlt=75&fmt=jpg&wid=1440&op_sharpen=1&')",
        "Curry-Item": "url('https://underarmour.scene7.com/is/image/Underarmour/3025620-001_DEFAULT?rp=standard-30pad%7CcartFullDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=208&hei=232&size=188%2C232')",
        "Curry-Sesame": "url('https://underarmour.scene7.com/is/image/Underarmour/FW21_CURRY_Curry9_CLP_Site_5_4_4?qlt=75&fmt=jpg&wid=708&')"
      }
    },
  },
  plugins: [],
}