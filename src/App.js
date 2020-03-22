import React from 'react';
import Header from './components/sections/Header.js'
import MainContentSection from './components/sections/MainContentSection.js'
import JoinFormSection from './components/sections/JoinFormSection.js'
import ContactSection from './components/sections/ContactSection.js'
import Footer from './components/sections/Footer.js'


function App() {
  return (
    <>
      <Header />
      <MainContentSection />
      <JoinFormSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
