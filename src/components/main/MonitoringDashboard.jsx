import React from 'react';
import { User } from 'lucide-react';

const MonitoringDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-gray-300 mb-4">Our tool suite</h2>
        <h1 className="text-5xl font-bold mb-16 leading-tight">
          Everything you need to
          <br />
          monitor and evaluate
          <br />
          your AI conversations
        </h1>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Real-Time Monitoring Card */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-3xl p-6">
          <h3 className="text-xl font-semibold mb-4">Real-Time Conversation Monitoring</h3>
          <p className="text-gray-400 mb-6">
            Track live voice calls and chat conversations with real-time monitoring. Observe
            interactions, monitor sentiment, and catch issues before they escalate.
          </p>

          <div className="bg-gray-800 rounded-xl p-4">
            <div className="text-sm text-gray-400 mb-4">Conversation Transcript</div>
            <div className="text-gray-500 text-sm mb-4">Call started • Demo call</div>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <User size={16} className="mt-1" />
                <div>
                  <div className="text-white">
                    Hello! Thank you for calling Roark Bank. How can I assist you today?
                  </div>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-900/50 text-purple-300">
                      neutral
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-green-900/50 text-green-300">
                      calm
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-6">
                <div className="bg-gray-700/30 rounded-xl p-3">
                  <div className="text-sm text-gray-300 mb-1">Account Inquiry</div>
                  <div className="text-white">Hi, I would like to check my account balance.</div>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-900/50 text-purple-300">
                      neutral
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-green-900/50 text-green-300">
                      calm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Transcription Card */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-3xl p-6">
          <h3 className="text-xl font-semibold mb-4">Smart Transcription & Evaluation</h3>
          <p className="text-gray-400 mb-6">
            Automatically transcribe calls and evaluate them with our pass/fail scoring system.
          </p>

          <div className="bg-gray-800 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-yellow-400">#1234 Needs Review</div>
              <div className="text-gray-400">2m 47s</div>
            </div>
            <div className="text-gray-400 mb-4">Evaluate this call:</div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-green-800/30 text-green-400 rounded-lg hover:bg-green-800/50">
                ✓ Pass
              </button>
              <button className="px-4 py-2 bg-red-800/30 text-red-400 rounded-lg hover:bg-red-800/50">
                ✗ Fail
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h4 className="text-lg font-semibold mb-4">Sentiment & Intent Analysis</h4>
            <p className="text-gray-400 mb-4">
              Track customer emotions in real-time and automatically map caller intents.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Account Inquiry</span>
                </div>
                <span className="text-gray-400">10:03 AM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Identity Verification</span>
                </div>
                <span className="text-gray-400">10:04 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Review Card */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-3xl p-6">
          <h3 className="text-xl font-semibold mb-4">Smart Review System</h3>
          <p className="text-gray-400 mb-6">
            Our AI automatically flags calls that need attention, highlighting specific moments where
            protocols weren't followed and suggesting improvements.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <User size={16} className="mt-1" />
                <div>
                  <div className="text-white">
                    Your balance is $5,432.10. Want to see your recent transactions?
                  </div>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-900/50 text-purple-300">
                      neutral
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-green-900/50 text-green-300">
                      calm
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-start gap-2 mb-3">
                <div className="p-1 bg-yellow-500/20 rounded">
                  <span className="text-yellow-500">⚠</span>
                </div>
                <div>
                  <div className="font-medium mb-1">Ask for account</div>
                  <div className="text-sm text-gray-400">
                    Agent should confirm which bank account to check before proceeding.
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Suggested response: Sure, which account would you like to check?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDashboard;