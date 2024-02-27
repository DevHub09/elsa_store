import React from 'react';
import Layout from '../components/layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className='row contactus m-2 mt-3'>
        <div className='col-md-6'>
          <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
          <p className='text-justify mt-2'>Ask for any query and info about the product feel free to call anytime.</p>
          <p className='mt-3'><BiMailSend/>: www.help@ecommerceapp.com</p>
          <p className='mt-3'><BiPhoneCall/>: 043678789</p>
          <p className='mt-3'><BiSupport/>: 1800-7655-6555</p>
        </div>
        <div className='col-md-6'>
          <img src='/images/contactus1.jpg' alt='contactus' style={{ width: "100%" }} />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

