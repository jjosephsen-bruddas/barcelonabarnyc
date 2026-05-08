"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const hours = [
  { day: "MONDAY", time: "4:00 PM – 2:00 AM" },
  { day: "TUESDAY", time: "4:00 PM – 4:00 AM" },
  { day: "WEDNESDAY", time: "4:00 PM – 4:00 AM" },
  { day: "THURSDAY", time: "4:00 PM – 4:00 AM" },
  { day: "FRIDAY", time: "4:00 PM – 4:00 AM" },
  { day: "SATURDAY", time: "3:00 PM – 4:00 AM" },
  { day: "SUNDAY", time: "1:00 PM – 2:00 AM" },
];

const today = new Date().getDay(); // 0=Sun, 1=Mon...
const dayMap = [6, 0, 1, 2, 3, 4, 5]; // map JS day to hours array index
const todayIndex = dayMap[today];

export default function FindUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-[#0A0A0A] border-t border-[#2A2A2A]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-3">
            HELL&apos;S KITCHEN · NYC
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none">
            FIND THE BAR
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="text-[#FF2D55] mt-1 shrink-0" size={20} />
              <div>
                <p className="font-[family-name:var(--font-bebas)] text-sm tracking-widest text-[#8A8178] mb-1">
                  ADDRESS
                </p>
                <p className="text-[#F5F0E8] text-lg leading-relaxed">
                  923 8th Avenue
                  <br />
                  Hell&apos;s Kitchen, New York, NY 10019
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="text-[#FF2D55] mt-1 shrink-0" size={20} />
              <div>
                <p className="font-[family-name:var(--font-bebas)] text-sm tracking-widest text-[#8A8178] mb-1">
                  PHONE
                </p>
                <a
                  href="tel:+12122453212"
                  className="text-[#F5F0E8] text-lg hover:text-[#FF2D55] transition-colors"
                >
                  (212) 245-3212
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex gap-4">
              <ExternalLink className="text-[#FF2D55] mt-1 shrink-0" size={20} />
              <div>
                <p className="font-[family-name:var(--font-bebas)] text-sm tracking-widest text-[#8A8178] mb-1">
                  INSTAGRAM
                </p>
                <a
                  href="https://www.instagram.com/barcelonabarnyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E8] text-lg hover:text-[#FF2D55] transition-colors"
                >
                  @barcelonabarnyc
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock className="text-[#FF2D55] mt-1 shrink-0" size={20} />
              <div className="flex-1">
                <p className="font-[family-name:var(--font-bebas)] text-sm tracking-widest text-[#8A8178] mb-3">
                  HOURS
                </p>
                <div className="space-y-2">
                  {hours.map((h, i) => (
                    <div
                      key={h.day}
                      className={`flex justify-between text-sm py-2 border-b border-[#1E1E1E] ${
                        i === todayIndex
                          ? "text-[#FF2D55] font-medium"
                          : "text-[#8A8178]"
                      }`}
                    >
                      <span className="font-[family-name:var(--font-bebas)] tracking-wider">
                        {h.day}
                        {i === todayIndex && (
                          <span className="ml-2 text-xs text-[#FF2D55]">TODAY</span>
                        )}
                      </span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[#8A8178] text-xs mt-3 italic">
                  Happy Hour weekdays 4–7 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[500px] bg-[#141414] border border-[#2A2A2A] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.9878!3d40.7659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b8fb3083%3A0xa0f9aef176042a5c!2sBarcelona+Bar!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barcelona Bar NYC location map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
