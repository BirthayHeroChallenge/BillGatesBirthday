"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Calendar, Star, Gift, Play, Users, Globe } from "lucide-react";
import { ParallaxSection, ParallaxElement } from "@/components/ParallaxSection";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const BillGatesLanding: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-28T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Background */}
      <ParallaxSection
        className="min-h-screen"
        backgroundImage="/bill-gates.webp"
        speed={0.05}
        direction="up"
        overlay={true}
      >
        <ParallaxElement speed={0.1} direction="down">
          <div className="relative z-10 flex flex-col justify-center items-center min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Header Section */}
              <div className="mb-12">
                <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight drop-shadow-lg">
                    BILL GATES
                  </h1>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-400 mb-6 md:mb-8 drop-shadow-lg">
                  70TH BIRTHDAY
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium tracking-wide drop-shadow-lg mb-8 md:mb-12 px-4">
                  TO HONOR THE LEGACY OF SERVICE TO HUMANITY
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 max-w-xs sm:max-w-2xl mx-auto px-4 sm:px-0">
                <Card className="p-3 sm:p-4 md:p-6 text-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-1 sm:mb-2">
                    {timeLeft.days.toString().padStart(3, "0")}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 tracking-wider">
                    DAYS
                  </div>
                </Card>

                <Card className="p-3 sm:p-4 md:p-6 text-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-1 sm:mb-2">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 tracking-wider">
                    HOURS
                  </div>
                </Card>

                <Card className="p-3 sm:p-4 md:p-6 text-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-1 sm:mb-2">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 tracking-wider">
                    MINUTES
                  </div>
                </Card>

                <Card className="p-3 sm:p-4 md:p-6 text-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-1 sm:mb-2">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 tracking-wider">
                    SECONDS
                  </div>
                </Card>
              </div>

              {/* Date Banner */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-6 text-white text-center shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="w-8 h-8" />
                    <span className="text-xl md:text-2xl font-bold tracking-wide">
                      TUESDAY, OCTOBER 28, 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxElement>
      </ParallaxSection>

      {/* YouTube Video Embed */}
      <div id="journey" className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            The Impact Story
          </h3>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Bill Gates' extraordinary legacy of generosity and innovation has
            profoundly transformed humanity, leaving an enduring positive impact
            that spans decades.
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/gV2oGIPNBOM"
                title="Bill Gates: My new deadline: 20 years to give away virtually all my wealth"
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* About This Celebration Section */}
      <ParallaxSection
        className="relative"
        speed={0.03}
        direction="up"
        overlay={false}
      >
        <div id="about" className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              About This Celebration
            </h3>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                The celebration of Bill Gates' 70th birthday honors his
                significant legacy of generosity and innovation that has
                positively impacted humanity for decades.
              </p>
              <p className="mb-6">
                The celebrations are being organized by friends and volunteers
                who are inspired by his significant philanthropic impact around
                the world. This special event serves as a heartfelt tribute to
                the lives he has influenced and the positive changes he
                continues to inspire.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* What to Expect Section */}
      <div id="events" className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-16">
            Exciting news is on the horizon!
          </h3>

          <div className="space-y-8">
            {/* Pre-Birthday Events */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Event 1 */}
              <Card className="p-6 bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-xl">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold">1st</span>
                  </div>
                  <h5 className="text-lg font-bold mb-3">
                    Pre-Birthday Tribute Event
                  </h5>
                  <div className="space-y-2">
                    <p className="text-white/90 font-semibold">
                      Friday, 18th July 2025
                    </p>
                  </div>
                </div>
              </Card>

              {/* Event 2 */}
              <Card className="p-6 bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-xl">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold">2nd</span>
                  </div>
                  <h5 className="text-lg font-bold mb-3">
                    Pre-Birthday Tribute Event
                  </h5>
                  <div className="space-y-2">
                    <p className="text-white/90 font-semibold">
                      Friday, 22nd August 2025
                    </p>
                  </div>
                </div>
              </Card>

              {/* Event 3 */}
              <Card className="p-6 bg-gradient-to-br from-green-400 to-blue-500 text-white shadow-xl">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold">3rd</span>
                  </div>
                  <h5 className="text-lg font-bold mb-3">
                    Pre-Birthday Tribute Event
                  </h5>
                  <div className="space-y-2">
                    <p className="text-white/90 font-semibold">
                      Friday, 12th September 2025
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Birthday Event */}
            <div className="mt-12">
              <Card className="p-8 md:p-12 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white shadow-2xl">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Heart className="w-8 h-8 text-yellow-300 fill-current" />
                    <h4 className="text-2xl md:text-3xl font-bold">
                      Bill Gates Birthday
                    </h4>
                    <Heart className="w-8 h-8 text-yellow-300 fill-current" />
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-3xl md:text-4xl font-bold mb-2">
                      TUESDAY, OCTOBER 28, 2025
                    </p>
                    <p className="text-xl text-white/90">
                      The Main Celebration
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Tributes Section */}
      {/* <ParallaxSection
        className="relative"
        speed={0.02}
        direction="down"
        overlay={false}
      >
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-16">
              Tributes
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">WB</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    Warren Buffett
                  </h3>
                  <p className="text-sm text-slate-500">
                    Investor & Philanthropist
                  </p>
                </div>
                <blockquote className="text-slate-700 italic leading-relaxed">
                  "Bill's commitment to improving lives around the world is
                  unmatched. His vision and generosity have created lasting
                  change that will benefit generations to come. Happy 70th to a
                  true friend and partner in giving."
                </blockquote>
              </Card>

              <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">MG</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    Melinda Gates
                  </h3>
                  <p className="text-sm text-slate-500">
                    Philanthropist & Co-founder
                  </p>
                </div>
                <blockquote className="text-slate-700 italic leading-relaxed">
                  "Working alongside Bill for decades has shown me his
                  unwavering dedication to solving the world's most pressing
                  challenges. His optimism and determination continue to inspire
                  millions. Celebrating 70 years of making a difference."
                </blockquote>
              </Card>

              <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">SJ</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    Satya Nadella
                  </h3>
                  <p className="text-sm text-slate-500">CEO, Microsoft</p>
                </div>
                <blockquote className="text-slate-700 italic leading-relaxed">
                  "Bill's legacy extends far beyond technology. His passion for
                  empowering every person and organization on the planet
                  continues to guide us. Thank you for showing us how innovation
                  can serve humanity. Happy 70th Birthday!"
                </blockquote>
              </Card>
            </div>

            <div id="tributes" className="text-center mt-12">
              <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-xl max-w-2xl mx-auto">
                <h4 className="text-2xl font-bold mb-4">Share Your Tribute</h4>
                <p className="text-white/90 mb-6">
                  Join thousands of others in celebrating Bill Gates' incredible
                  journey and impact on the world.
                </p>
                <button
                  onClick={() => {
                    const notification = document.createElement("div");
                    notification.className =
                      "fixed top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-800 px-6 py-4 rounded-lg shadow-xl transform transition-all duration-500 z-50 max-w-sm";
                    notification.innerHTML = `
                      <div class="flex items-center gap-3">
                        <div class="p-2 bg-blue-100 rounded-full">
                          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <p class="font-medium">The testimonial feature is coming soon! We're excited to hear your message for Bill. Stay tuned! 🎉</p>
                      </div>`;
                    document.body.appendChild(notification);
                    setTimeout(() => {
                      notification.style.opacity = "0";
                      setTimeout(() => notification.remove(), 500);
                    }, 5000);
                  }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Add Your Message
                </button>
              </Card>
            </div>
          </div>
        </div>
      </ParallaxSection> */}

      <div className="py-12 bg-white border-t border-gray-200">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-8">
          Great things are coming!
        </h3>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-600 mb-8">
            Join friends and volunteers in honoring Bill Gates' legacy of
            generosity and innovation that has positively impacted humanity for
            decades.
          </p>

          {/* New CTA Section */}
          <div className="mt-8 space-y-6">
            <p className="text-xl font-semibold">Stay tuned for updates</p>
            <button
              className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              onClick={() => {
                const notification = document.createElement("div");
                notification.className =
                  "fixed top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-800 px-6 py-4 rounded-lg shadow-xl transform transition-all duration-500 z-50 max-w-sm";
                notification.innerHTML = `
                  <div class="flex items-center gap-3">
                    <div class="p-2 bg-blue-100 rounded-full">
                      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <p class="font-medium">Coming soon! We'll notify you when tributes are open. Stay tuned! 🎉</p>
                  </div>`;
                document.body.appendChild(notification);
                setTimeout(() => {
                  notification.style.opacity = "0";
                  setTimeout(() => notification.remove(), 500);
                }, 5000);
              }}
            >
              Join the celebration
            </button>
            <p className="text-lg text-slate-600 italic mt-6">
              To Honor the Legacy of Service to Humanity!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-12 md:py-16 px-4">
            <div className="space-y-4 md:space-y-6">
              {/* Quick Links */}
              <div>
                <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#journey"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Bill's Journey
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      About the Celebration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#events"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Events Schedule
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tributes"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Share a Tribute
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/BillGates/"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://x.com/BillGates"
                  className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/williamhgates/"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/thisisbillgates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/billgates"
                  className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
              <p className="text-slate-400 text-sm">
                Follow the celebration on our socials!
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
              <div className="text-slate-400 text-sm">
                &copy; 2025 Bill Gates 70th Birthday Celebration. All rights
                reserved.
              </div>

              <div className="text-slate-400 text-sm">
                Made with{" "}
                <Heart className="w-4 h-4 text-red-500 fill-current inline mx-1" />{" "}
                for humanity
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BillGatesLanding;
