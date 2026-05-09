"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// EVENT DATA — edit this array to add/remove/change events
// ─────────────────────────────────────────────────────────────────────────────

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  color: string;
  description: string;
  cta?: { label: string; href: string };
  // For one-off events: set month (1-12), day, year
  date?: { month: number; day: number; year: number };
  // For recurring: set recurring type and optional recurringDay (0=Sun…6=Sat)
  recurring?: "daily" | "weekly" | "weekdays";
  recurringDay?: number;
}

const EVENTS: CalendarEvent[] = [
  {
    id: "happy-hour",
    title: "HAPPY HOUR",
    time: "4:00 PM – 7:00 PM",
    color: "#D4AF37",
    description:
      "Weekday deals all night long. $5 drafts, $8 well drinks, $12 beer + shot combo all day.",
    recurring: "weekdays",
  },
  {
    id: "trivia-night",
    title: "TRIVIA NIGHT",
    time: "8:00 PM",
    color: "#FF2D55",
    description:
      "Test your knowledge. Win glory. Drink themed shots whether you win or lose.",
    cta: { label: "FOLLOW FOR SCHEDULE", href: "https://www.instagram.com/barcelonabarnyc/" },
    recurring: "weekly",
    recurringDay: 3, // Wednesday
  },
  {
    id: "dart-league",
    title: "DART LEAGUE NIGHT",
    time: "7:00 PM",
    color: "#A084CF",
    description:
      "Barcelona Bar competes in the New York Dart League. Walk in and watch — or join the team.",
    recurring: "weekly",
    recurringDay: 4, // Thursday
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

const MONTH_NAMES = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
];

const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay(); // 0=Sun
}

function getEventsForDate(day: number, month: number, year: number): CalendarEvent[] {
  const jsDay = new Date(year, month, day).getDay(); // 0=Sun
  const isWeekday = jsDay >= 1 && jsDay <= 5;

  return EVENTS.filter((event) => {
    if (event.date) {
      return (
        event.date.month === month + 1 &&
        event.date.day === day &&
        event.date.year === year
      );
    }
    if (event.recurring === "daily") return true;
    if (event.recurring === "weekdays") return isWeekday;
    if (event.recurring === "weekly") return event.recurringDay === jsDay;
    return false;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// CALENDAR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function EventsCalendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOffset = getFirstDayOfMonth(currentMonth, currentYear);

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const selectedEvents =
    selectedDay !== null
      ? getEventsForDate(selectedDay, currentMonth, currentYear)
      : [];

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
    setSelectedDay(null);
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
    setSelectedDay(null);
  }

  // Build grid cells: null = padding cell before month starts
  const cells: (number | null)[] = [
    ...Array(firstDayOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // Pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="bg-[#141414] border border-[#2A2A2A]">
      {/* Month navigation */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A2A2A]">
        <button
          onClick={prevMonth}
          aria-label="Previous month"
          className="p-2 text-[#8A8178] hover:text-[#FF2D55] transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-[#F5F0E8]">
          {MONTH_NAMES[currentMonth]} {currentYear}
        </h3>

        <button
          onClick={nextMonth}
          aria-label="Next month"
          className="p-2 text-[#8A8178] hover:text-[#FF2D55] transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Day-of-week header */}
      <div className="grid grid-cols-7 border-b border-[#2A2A2A]">
        {DAY_LABELS.map((d) => (
          <div
            key={d}
            className="font-[family-name:var(--font-bebas)] text-center text-xs tracking-widest text-[#8A8178] py-3"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {cells.map((day, idx) => {
          if (day === null) {
            return (
              <div
                key={`pad-${idx}`}
                className="aspect-square border-r border-b border-[#1E1E1E] bg-[#0F0F0F]"
              />
            );
          }

          const events = getEventsForDate(day, currentMonth, currentYear);
          const selected = selectedDay === day;
          const todayCell = isToday(day);

          return (
            <button
              key={day}
              onClick={() => setSelectedDay(selected ? null : day)}
              className={`relative aspect-square border-r border-b border-[#1E1E1E] flex flex-col items-center justify-start pt-2 px-1 transition-all duration-200 group
                ${selected ? "bg-[#1E1E1E]" : "hover:bg-[#1A1A1A]"}
                ${todayCell ? "ring-1 ring-inset ring-[#FF2D55]" : ""}
              `}
            >
              {/* Day number */}
              <span
                className={`font-[family-name:var(--font-bebas)] text-sm leading-none mb-1.5
                  ${selected ? "text-[#F5F0E8]" : todayCell ? "text-[#FF2D55]" : "text-[#8A8178] group-hover:text-[#F5F0E8]"}
                  transition-colors duration-200
                `}
              >
                {day}
              </span>

              {/* Event dots */}
              <div className="flex flex-wrap gap-0.5 justify-center max-w-full">
                {events.slice(0, 3).map((ev) => (
                  <span
                    key={ev.id}
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: ev.color }}
                  />
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Event detail panel */}
      <AnimatePresence>
        {selectedDay !== null && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#2A2A2A]"
          >
            <div className="px-6 py-5">
              <p className="font-[family-name:var(--font-bebas)] text-xs tracking-[0.3em] text-[#8A8178] mb-4">
                {MONTH_NAMES[currentMonth]} {selectedDay}, {currentYear}
              </p>

              {selectedEvents.length === 0 ? (
                <p className="text-[#8A8178] text-sm italic">
                  No events scheduled. Walk in anytime — shots are always on the menu.
                </p>
              ) : (
                <div className="space-y-4">
                  {selectedEvents.map((ev) => (
                    <div
                      key={ev.id}
                      className="flex gap-4 items-start"
                    >
                      {/* Color bar */}
                      <div
                        className="w-1 self-stretch rounded-full shrink-0 mt-0.5"
                        style={{ backgroundColor: ev.color }}
                      />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span
                            className="font-[family-name:var(--font-bebas)] text-lg tracking-wide"
                            style={{ color: ev.color }}
                          >
                            {ev.title}
                          </span>
                          <span className="text-[#8A8178] text-xs">{ev.time}</span>
                        </div>
                        <p className="text-[#8A8178] text-sm leading-relaxed">
                          {ev.description}
                        </p>
                        {ev.cta && (
                          <a
                            href={ev.cta.href}
                            target={ev.cta.href.startsWith("http") ? "_blank" : undefined}
                            rel={ev.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-block mt-2 font-[family-name:var(--font-bebas)] text-xs tracking-widest border px-4 py-1.5 transition-all duration-200 hover:text-[#0A0A0A]"
                            style={{
                              borderColor: ev.color,
                              color: ev.color,
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.backgroundColor = ev.color;
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                            }}
                          >
                            {ev.cta.label}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 px-6 py-4 border-t border-[#2A2A2A]">
        {EVENTS.map((ev) => (
          <div key={ev.id} className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: ev.color }}
            />
            <span className="font-[family-name:var(--font-bebas)] text-xs tracking-wider text-[#8A8178]">
              {ev.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
