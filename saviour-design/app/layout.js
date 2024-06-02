// app/layout.js
'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ZCOOL_KuaiLe, Poppins, Shojumaru ,Inter , Manrope} from 'next/font/google';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..



const manrope = Manrope({
  subsets: ['latin'],
  weight: '400',
})
const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})
const zcool = ZCOOL_KuaiLe({
  weight: '400',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const shojumaru = Shojumaru({
  weight: '400',
  subsets: ['latin'],
});

const theme = extendTheme({
  fonts: {
    zcool: zcool.style.fontFamily,
    poppins: poppins.style.fontFamily,
    shojumaru: shojumaru.style.fontFamily,
    inter: inter.style.fontFamily,
    manrope: manrope.style.fontFamily,
  },
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      // Customize options if needed
      duration: 1100, // Animation duration in milliseconds
      offset: 100, // Offset from the element's position to trigger animation
     
      anchorPlacement: 'top-bottom',
    });
    // Refresh animations on new page load
    AOS.refresh();
  }, []);
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
          
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
