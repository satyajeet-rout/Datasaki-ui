import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is minusx a new platform?",
      answer: "No! MinusX works in your existing analytics tools like Jupyter notebooks, Metabase, etc. Given an instruction, MinusX operates the app - by clicking and typing, just like you would - to analyze your data and answer queries."
    },
    {
      question: "How is my data handled?",
      answer: "We store all metadata on your browser. This includes table schemas, code, queries, and a sample of query outputs. This is used to set the context for your instruction and sent to the LLM. You can find a non legal-speak overview of the data we collect in our",
      link: {
        text: "privacy policy",
        url: "#"
      }
    },
    {
      question: "What can this do, over LLM chat apps?",
      answer: "MinusX seamlessly integrates with existing tools. This means that you never have to get out of your workflow to answer questions. MinusX also has complete context of the app you're using, and can choose the right action for the right context."
    }
  ];

  return (
    <div className="w-full mx-auto px-12 py-20 bg-gray-300 border rounded-md ">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-4">FAQs</h1>
          <p className="text-gray-600 text-lg mb-4">
            Have a different question and can't find the answer you're looking for?
          </p>
          
          {/* Discord Button */}
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026 13.83 13.83 0 001.226-1.963.074.074 0 00-.041-.104 13.175 13.175 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
            </svg>
            Join minusx Discord
          </button>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
                {faq.link && (
                  <a 
                    href={faq.link.url}
                    className="text-gray-600 underline hover:text-gray-900 ml-1"
                  >
                    {faq.link.text}
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;