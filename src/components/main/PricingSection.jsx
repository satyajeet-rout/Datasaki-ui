import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingToggle = ({ billing, setBilling }) => (
  <div className="inline-flex rounded-lg p-1 bg-gray-100">
    <button
      onClick={() => setBilling('monthly')}
      className={`px-4 py-2 rounded-lg ${
        billing === 'monthly' 
          ? 'bg-emerald-500 text-white' 
          : 'text-gray-600'
      }`}
    >
      Monthly
    </button>
    <button
      onClick={() => setBilling('annually')}
      className={`px-4 py-2 rounded-lg ${
        billing === 'annually' 
          ? 'bg-emerald-500 text-white' 
          : 'text-gray-600'
      }`}
    >
      Annually
    </button>
  </div>
);

const PricingCard = ({ 
  title, 
  description, 
  price, 
  features, 
  cta, 
  recommended = false 
}) => (
  <div 
    className={`p-6 rounded-xl relative bg-white
      ${recommended ? 'border-2 border-emerald-500' : 'border border-gray-200'}`}
  >
    {recommended && (
      <span className="absolute -top-3 right-4 text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
        Recommended
      </span>
    )}
    
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    
    <div className="mb-6">
      <div className="flex items-baseline">
        {price === 'Custom' ? (
          <span className="text-4xl font-bold">Custom</span>
        ) : (
          <>
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-gray-600 ml-2">/month/user</span>
          </>
        )}
      </div>
    </div>

    <button className={`w-full py-2 rounded-lg mb-8 font-medium
      ${recommended 
        ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
        : 'border border-gray-300 hover:bg-gray-50 text-gray-800'}`}
    >
      {cta}
    </button>

    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex gap-3">
          <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PricingSection = () => {
  const [billing, setBilling] = useState('monthly');

  const plans = [
    {
      title: "MinusX Lite",
      price: "0",
      description: "Great if you're just exploring MinusX or like tinkering with things.",
      cta: "Try now!",
      features: [
        "No credit card needed!",
        "Works in Jupyter, Metabase, PostHog and Sheets",
        "Up to 50 requests /week",
        "Limited advanced models"
      ]
    },
    {
      title: "MinusX Pro",
      price: "49",
      description: "Perfect for those who want an AI data science intern sitting in their browser 24/7.",
      cta: "Start Trial",
      recommended: true,
      features: [
        "Everything in Lite",
        "7 day free trial",
        "Up to 1000 requests /week",
        "Best-in-class models",
        "24/7 support, CEO's personal number",
        "Personalization and memory",
        "Early access to new app-integrations and advanced features"
      ]
    },
    {
      title: "MinusX Enterprise",
      price: "Custom",
      description: "For serious org-wide workloads with deep integrations and dedicated support.",
      cta: "Contact Us",
      features: [
        "Everything in Pro",
        "Access control and audit logs",
        "Org-wide sharing and collaboration",
        "Dedicated support w/ Forward Deployed Engineers",
        "Custom/in-house tool integrations",
        "Custom models, advanced privacy features",
        "Integration with Slack, Teams, etc."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-500">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pricing</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Simple, no-nonsense pricing. Pay for intelligence, 24/7 support, and 
            early access to everything we're working on!
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <PricingToggle billing={billing} setBilling={setBilling} />
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;