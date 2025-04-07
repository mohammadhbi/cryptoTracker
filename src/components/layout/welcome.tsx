function Landing() {
    return (
      <div>
        <div className="light-theme-scroll-bar page-adaptive-layout min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-8">
          <div className="register-code-wrapper max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left/Content Column */}
            <div className="md:col-span-2">
              {/* Header Section */}
              <div className="h5-show md:hidden mb-6">
                <div className="head-view-wrapper flex items-center space-x-4">
                  <div className="img-box flex items-center space-x-2">
                    <img
                      src="https://static-app.bb-os.com/avatar/20230901/avatar_3.png"
                      alt="Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="dialog-box bg-base-300 p-3 rounded-lg shadow-md">
                    <p className="text text-base-content">
                      Join Mmd Xchange and claim <span className="text-primary font-bold">6800+ USDT</span> welcome gift
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="new-invite-register-wrapper font-inter relative">
                <img
                  src="https://bin.bb-os.com/accounts_nuxt/loading-ske-pc-light.8453de22.jpg"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-10"
                />
                <div className="new-invite-register-container relative z-10 p-6">
                  <div className="inner-container">
                    <div className="content-wrapper">
                      {/* Desktop Header */}
                      <div className="pc-show hidden md:block mb-8">
                        <div className="head-view-wrapper flex items-center space-x-4 justify-center">
                          <div className="img-box flex items-center space-x-3">
                            <img
                              src="https://static-app.bb-os.com/avatar/20230901/avatar_3.png"
                              alt="Avatar"
                              className="w-16 h-16 rounded-full"
                            />
                            <p className="name text-lg text-base-content font-semibold">ma***9@gmail.com</p>
                          </div>
                          <div className="dialog-box bg-base-300 p-4 rounded-lg shadow-md">
                            <p className="text text-base-content text-lg">
                              Join Mmd Xchange and claim <span className="text-primary font-bold">6800+ USDT</span> welcome gift
                            </p>
                          </div>
                        </div>
                      </div>
  
                      {/* Welcome Gift Section */}
                      <div className="new-invite-benefit-wrapper">
                        <div className="new-invite-benefit bg-base-100 p-6 rounded-xl shadow-lg">
                          <div className="title mb-6 text-center">
                            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-error to-warning">
                              6800+ USDT
                            </span>{' '}
                            <span className="text-3xl font-extrabold text-base-content">Welcome Gift</span>
                          </div>
                          <ul className="benefit-list flex flex-wrap justify-center gap-6">
                            {[
                              { img: "https://static-app.bb-os.com/fe-common/assets/imgs/register-reward1.svg", amount: "30 USDT", detail: "Max Sign-up Reward" },
                              { img: "https://static-app.bb-os.com/fe-common/assets/imgs/register-reward2.svg", amount: "500 USDT", detail: "Max Deposit Reward" },
                              { img: "https://static-app.bb-os.com/fe-common/assets/imgs/register-reward3.svg", amount: "500 USDT", detail: "Max Trade Reward" },
                            ].map((reward, index) => (
                              <li
                                key={index}
                                className="item font-rubik w-52 bg-base-200 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                              >
                                <img src={reward.img} alt="" className="w-14 h-14 mx-auto mb-3" />
                                <div>
                                  <p className="text-xl font-bold text-primary">{reward.amount}</p>
                                  <p className="text-sm text-base-content/70">{reward.detail}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
  
                      {/* Honor Content */}
                      <div className="honor-content-wrapper mt-8">
                        <div className="honor-content text-center">
                          <h3 className="title text-2xl font-bold text-base-content mb-6">
                            Join Mmd Xchange and Start Your Crypto Trading Journey!
                          </h3>
                          <ul className="copytrading flex flex-wrap justify-center gap-8">
                            {[
                              { desc: "Cumulative Signups", num: "20M+" },
                              { desc: "Supported Languages", num: "18+" },
                              { desc: "Elite Traders", num: "20,000+" },
                            ].map((stat, index) => (
                              <li key={index} className="text-center">
                                <div className="num-desc text-base-content/70">{stat.desc}</div>
                                <div className="num font-rubik text-xl font-bold text-primary">{stat.num}</div>
                              </li>
                            ))}
                          </ul>
                          <div className="trading-opportunity mt-8 space-y-6">
                            {[
                              {
                                img: "https://bin.bb-os.com/accounts_nuxt/security3.22a3bf38.svg",
                                info: "Awards and Achievements",
                                detail: "Awarded TradingView's Best Crypto Broker/Exchange for three consecutive years, 2021-2023. 100% reserve of funds to ensure your assets are safe and secure.",
                              },
                              {
                                img: "https://bin.bb-os.com/accounts_nuxt/security1.509ee313.svg",
                                info: "Remarkable User Service",
                                detail: "Dedicated 24/7 support, with an average response time of under 1 minute. VIP users enjoy exclusive access to a dedicated account manager.",
                              },
                              {
                                img: "https://bin.bb-os.com/accounts_nuxt/security4.398393f6.svg",
                                info: "Elite Traders",
                                detail: "Supports various trading methods, including Perpetual Futures, Standard Futures, leverage, and spot trading. Copy top traders and earn profits with ease.",
                              },
                            ].map((item, index) => (
                              <div key={index} className="security-list-item flex items-start space-x-4 p-4 bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="img-box">
                                  <img src={item.img} alt="" className="w-12 h-12" />
                                </div>
                                <div className="item-right">
                                  <p className="info text-lg font-semibold text-base-content">{item.info}</p>
                                  <p className="detail text-sm text-base-content/70">{item.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
  
                      {/* Sponsor Banner */}
                      <div className="sponsor-ship mt-8 bg-base-300 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between">
                        <div className="content-left text-center md:text-left">
                          <div className="content-text">
                            <img
                              src="https://static-app.bb-os.com/fe-common/assets/imgs/ship-logo.png"
                              alt="Chelsea FC Logo"
                              className="w-20 mx-auto md:mx-0 mb-2"
                            />
                            <p className="text1 text-base-content font-semibold">
                              OFFICIAL CRYPTO EXCHANGE PARTNER OF CHELSEA FC
                            </p>
                          </div>
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
              </div>
            </div>
  
            {/* Right/Register Column */}
            <div className="reg-container md:sticky md:top-8">
              <div className="register-form bg-base-100 p-6 rounded-xl shadow-lg">
                <p className="form-title text-2xl font-bold text-base-content mb-4">Create an Account</p>
                <ul className="form-tabs flex justify-center gap-4 mb-6">
                  <li className="tab-item btn btn-sm btn-primary">Email</li>
                  <li className="tab-item btn btn-sm btn-outline">Phone</li>
                </ul>
                <div className="form-item form-email">
                  <input
                    type="text"
                    placeholder="Please enter email"
                    className="input input-bordered w-full mb-4"
                  />
                </div>
                <div className="form-item form-password">
                  <input
                    type="password"
                    placeholder="Please enter a password"
                    className="input input-bordered w-full mb-4"
                  />
                </div>
                <div className="form-item form-invite">
                  <input
                    type="text"
                    placeholder="Referral Code (Optional)"
                    className="input input-bordered w-full mb-4"
                  />
                </div>
                <div className="check-box flex items-center mb-4">
                  <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                  <p className="text-sm text-base-content">
                    I have read and agree to the{' '}
                    <a href="#360033286474" className="link link-primary">Customer Agreement</a> and{' '}
                    <a href="#360034388413" className="link link-primary">Privacy Policy</a>
                  </p>
                </div>
                <button className="btn btn-primary btn-lg w-full mb-4">Sign Up</button>
                <div className="login-enter text-center">
                  <span className="has-account text-base-content/70">Already have an account?</span>{' '}
                  <a href="https://bingx.com/en/accounts/login/" className="link link-primary">Log In</a>
                </div>
                <div className="third-party mt-6">
                  <div className="divider">Or</div>
                  <div className="flex flex-col gap-4">
                    <button className="btn btn-outline flex items-center justify-center gap-2">
                      <img
                        src="https://bin.bb-os.com/accounts_nuxt/google.54b8222d.svg"
                        alt="Google"
                        className="w-6 h-6"
                      />
                      Continue with Google
                    </button>
                    <button className="btn btn-outline flex items-center justify-center gap-2">
                      <img
                        src="https://bin.bb-os.com/accounts_nuxt/apple.078e50f6.svg"
                        alt="Apple"
                        className="w-6 h-6 invert"
                      />
                      Continue with Apple
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Landing;