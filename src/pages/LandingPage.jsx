import React from 'react';
import Title_Header from '../components/landing_page/title_header';
import Feature_Cards from '../components/landing_page/feature_cards';
import Reason_Text from '../components/landing_page/reason_text';
import Ready_Button from '../components/landing_page/ready_button';
import Footer_Lice from '../components/landing_page/footer_lice';

const LandingPage = () => {
  return (
    <div>
      <Title_Header />
      <Feature_Cards />
      <Reason_Text />
      <Ready_Button />
      <Footer_Lice />
    </div>
  );
};

export default LandingPage;
