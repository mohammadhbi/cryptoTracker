import SignUp from "../auth/SignUp";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left/Content Column */}
        <div className="md:col-span-2">
          {/* Header Section (Mobile) */}
          <div className="md:hidden mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://static-app.bb-os.com/avatar/20230901/avatar_3.png"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="bg-gray-800 p-3 rounded-lg shadow-md">
                <p>
                  Join Mmd Xchange and claim <span className="text-cyan-400 font-bold">6800+ USDT</span> welcome gift
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative font-inter">
            <img
              src="https://bin.bb-os.com/accounts_nuxt/loading-ske-pc-light.8453de22.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-10"
            />
            <div className="relative z-10 p-6">
              {/* Header Section (Desktop) */}
              <div className="hidden md:block mb-8">
                <div className="flex items-center space-x-4 justify-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://static-app.bb-os.com/avatar/20230901/avatar_3.png"
                      alt="Avatar"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-lg font-semibold">ma***9@gmail.com</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="text-lg">
                      Join Mmd Xchange and claim <span className="text-cyan-400 font-bold">6800+ USDT</span> welcome gift
                    </p>
                  </div>
                </div>
              </div>

              {/* Welcome Gift Section */}
              <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg mb-8">
                <div className="text-center mb-6">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                    6800+ USDT
                  </span>{' '}
                  <span className="text-3xl font-extrabold">Welcome Gift</span>
                </div>
                <ul className="flex flex-wrap justify-center gap-6">
                  {[
                    { img: "https://static-app.bb-os.com/fe-common/assets/imgs/register-reward1.svg", amount: "30 USDT", detail: "Max Sign-up Reward" },
                    { img: "https://static-app.bb-os.com/fe-common/assets/imgs/register-reward2.svg", amount: "500 USDT", detail: "Max Deposit Reward" },
                    { img: "https://static-app.bb-os.com/fe-common/assets/imgs/register-reward3.svg", amount: "500 USDT", detail: "Max Trade Reward" },
                  ].map((reward, index) => (
                    <li
                      key={index}
                      className="w-52 bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <img src={reward.img} alt="" className="w-14 h-14 mx-auto mb-3" />
                      <div>
                        <p className="text-xl font-bold text-cyan-400">{reward.amount}</p>
                        <p className="text-sm text-gray-400">{reward.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Section */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-6">Start Your Crypto Journey with Mmd Xchange</h3>
                <ul className="flex flex-wrap justify-center gap-8">
                  {[
                    { desc: "Cumulative Signups", num: "20M+" },
                    { desc: "Supported Languages", num: "18+" },
                    { desc: "Elite Traders", num: "20,000+" },
                  ].map((stat, index) => (
                    <li key={index} className="text-center">
                      <div className="text-gray-400">{stat.desc}</div>
                      <div className="text-xl font-bold text-cyan-400">{stat.num}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features Section */}
              <div className="space-y-6 mb-8">
                {[
                  {
                    img: "https://bin.bb-os.com/accounts_nuxt/security3.22a3bf38.svg",
                    info: "Awards and Achievements",
                    detail: "Best Crypto Broker/Exchange 2021-2023 by TradingView. 100% fund reserves for security.",
                  },
                  {
                    img: "https://bin.bb-os.com/accounts_nuxt/security1.509ee313.svg",
                    info: "Remarkable User Service",
                    detail: "24/7 support with <1 min response time. VIPs get dedicated account managers.",
                  },
                  {
                    img: "https://bin.bb-os.com/accounts_nuxt/security4.398393f6.svg",
                    info: "Elite Traders",
                    detail: "Perpetual Futures, leverage, and spot trading. Copy top traders effortlessly.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img src={item.img} alt="" className="w-12 h-12" />
                    <div>
                      <p className="text-lg font-semibold">{item.info}</p>
                      <p className="text-sm text-gray-400">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sponsor Banner */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left">
                  <img
                    src="https://static-app.bb-os.com/fe-common/assets/imgs/ship-logo.png"
                    alt="Chelsea FC Logo"
                    className="w-20 mx-auto md:mx-0 mb-2"
                  />
                  <p className="font-semibold">OFFICIAL CRYPTO EXCHANGE PARTNER OF CHELSEA FC</p>
                </div>
                <img
                  src="https://static-app.bb-os.com/fe-common/assets/imgs/home-ship.jpg"
                  alt="Chelsea FC"
                  className="w-full md:w-1/2 rounded-lg mt-4 md:mt-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right/SignUp Column */}
        <div className="md:sticky md:top-8">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default Landing;