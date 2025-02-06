'use client';
import React, { useState } from 'react';
import FAQestion from '../Components/FAQestion';
import Image from 'next/image';
import Intro from '../Components/intro';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaInfoCircle } from "react-icons/fa";

export default function FAQPage() {
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What services do you provide?',
      answer: 'We provide comprehensive engineering solutions including design, analysis, and consulting services.'
    },
    {
      question: 'How can I contact your team?',
      answer: 'You can reach out to us via the contact form on this page or email us directly at contact@engineering.com.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We specialize in civil, mechanical, and electrical engineering, serving a wide range of industries.'
    },
    {
      question: 'How construction and building works?',
      answer: 'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      question: 'Excepteur sint occaecat cupidatat iusmod tempor incid idun?',
      answer: 'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      question: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt?',
      answer: 'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted: ', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <div className="container mx-auto px-6 py-24 w-full flex flex-col lg:flex-row items-start justify-center gap-10">
      {/* Left Section - Image & Form */}
      <div className='flex flex-col items-start w-full lg:w-[35%] gap-6'>
        <Image src={'/faq-1.jpg'} alt='FAQ image' width={500} height={500} className='w-full rounded-lg shadow-md' />
        <div className='w-full bg-white p-6 rounded-lg shadow-lg'>
          <h2 className="text-2xl font-bold mb-4 text-yellow-700">Ask a Question</h2>
          {isSubmitted ? (
            <div className="text-green-600 font-medium">Thank you for your question! We`&apos;`ll get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email', 'question'].map((field) => (
                <div key={field} className='w-full flex flex-col gap-2'>
                  <label htmlFor={field} className="text-sm font-medium capitalize">{field}</label>
                  <Input
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${field}`}
                    required
                    className='border rounded-md px-3 py-2'
                  />
                </div>
              ))}
              <Button type="submit" className="w-full bg-yellow-700 text-white py-2 rounded-md hover:bg-yellow-800 transition">Submit</Button>
            </form>
          )}
        </div>
      </div>

      {/* Right Section - FAQ */}
      <div className='flex flex-col items-start w-full lg:w-[65%] gap-6'>
        <Intro title={'Important FAQ'} desc={'Most Important FAQ about us ... and if you want to ask a question send to us'} />
        <div className="w-full bg-white p-6 flex items-start flex-col gap-9 rounded-lg shadow-lg">
          <div className='flex items-center flex-row gap-2'>
            <span className="text-yellow-700 text-2xl"><FaInfoCircle/></span>
            <h1 className="text-2xl font-bold text-yellow-700">FAQ</h1>
          </div>
          <div className="flex flex-col w-full gap-5">
            {faqData.map((faq, index) => (
              <FAQestion key={index} faq={faq} />
            )).slice(0, 3)}
          </div>
        </div>
        <div className="w-full bg-white p-6 flex items-start flex-col gap-9 rounded-lg shadow-lg">
          <div className='flex items-center flex-row gap-2'>
            <span className="text-yellow-700 text-2xl"><FaInfoCircle/></span>
            <h1 className="text-2xl font-bold text-yellow-700">More FAQ</h1>
          </div>
          <div className="flex flex-col w-full gap-5">
            {faqData.map((faq, index) => (
              <FAQestion key={index} faq={faq} />
            )).slice(3, faqData.length)}
          </div>
        </div>
      </div>
    </div>
  );
}