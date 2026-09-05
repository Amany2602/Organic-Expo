"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Phone, Send, X, Bot, Sparkles, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "+977 970-8618779";
const WHATSAPP_LINK = "https://wa.me/9779708618779?text=Hello%20Nepal%20Organic%20Expo%20Secretariat%2C%20I%20would%20like%20to%20inquire%20about%20buyer%20passes%2C%20stall%20booking%20and%20product%20sample%20kits.";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actionUrl?: string;
  actionLabel?: string;
}

const QUICK_PROMPTS = [
  { label: "💬 Chat on WhatsApp", query: "Can I connect with the secretariat on WhatsApp?" },
  { label: "📦 Request Sample Kit", query: "How do I request a 5-item organic product sample kit?" },
  { label: "🎪 Stall Booking Rates", query: "What are the exhibition stall rates and inclusions?" },
  { label: "🌏 Buyer Visa Invitation", query: "How to get a Trade Delegation Visa Invitation Letter?" },
];

export function FloatingSecretariatDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [hasUnread, setHasUnread] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Namaste! 🙏 Welcome to Nepal Organic Exposition 2026. How can we assist your sourcing or exhibition delegation today?",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Dynamic Intelligent Bot Response
    setTimeout(() => {
      setIsTyping(false);
      const lower = text.toLowerCase();
      let botReply: Message;

      if (lower.includes("whatsapp") || lower.includes("chat") || lower.includes("contact") || lower.includes("phone")) {
        botReply = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: `You can reach our live Secretariat team directly on WhatsApp at ${WHATSAPP_NUMBER} for instant dispatch, quotes, or stall allocations.`,
          timestamp: "Just now",
          actionUrl: WHATSAPP_LINK,
          actionLabel: "Open WhatsApp Deal Desk (+977 970-8618779)",
        };
      } else if (lower.includes("sample") || lower.includes("kit") || lower.includes("product") || lower.includes("hemp") || lower.includes("tea") || lower.includes("oil")) {
        botReply = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "We provide customizable 5-Item Himalayan Organic Sample Kits (DHL Air Express dispatched) complete with full GC/MS and Eurofins Lab COA reports.",
          timestamp: "Just now",
          actionUrl: "#export-catalog",
          actionLabel: "Open B2B Sample Kit Builder ↗",
        };
      } else if (lower.includes("stall") || lower.includes("booth") || lower.includes("price") || lower.includes("rate") || lower.includes("book")) {
        botReply = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "Stalls start from $450 for Standard Artisan (9m²) to $1,800 for Diamond Custom Pavilions (36m²), with B2B buyer match-making desks included.",
          timestamp: "Just now",
          actionUrl: "#pricing",
          actionLabel: "View All Stall Options & Book ↗",
        };
      } else if (lower.includes("visa") || lower.includes("invite") || lower.includes("delegation") || lower.includes("pass")) {
        botReply = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "Official Trade Delegate Visa Invitation Letters are issued by the Secretariat upon registration for seamless embassy processing.",
          timestamp: "Just now",
          actionUrl: "#contact",
          actionLabel: "Register Trade Delegate ↗",
        };
      } else {
        botReply = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: `Thank you for your inquiry! Our Trade Officers are active 24/7 on WhatsApp at ${WHATSAPP_NUMBER}. Click below to connect immediately.`,
          timestamp: "Just now",
          actionUrl: WHATSAPP_LINK,
          actionLabel: "Connect on WhatsApp (+977 970-8618779) ↗",
        };
      }

      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* =========================================================================
          1. COMPACT MODERN ANIMATED CHAT WINDOW
          ========================================================================= */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-[340px] sm:max-w-[360px] bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_-15px_rgba(24,59,43,0.35)] border border-emerald-900/15 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-5 duration-300 flex flex-col h-[480px]">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-gf-primary via-[#1E4533] to-gf-secondary text-white p-3.5 px-4 flex items-center justify-between shadow-xs shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white">
                  <Bot className="w-4 h-4 text-emerald-300" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-gf-primary animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-white tracking-wide">
                    Expo Secretariat AI
                  </h4>
                  <span className="text-[9px] bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-1.5 py-0.2 rounded-full font-semibold">
                    Live
                  </span>
                </div>
                <p className="text-[10px] text-gf-accent-sage flex items-center gap-1">
                  <span>Desk:</span>
                  <strong className="text-white font-medium">{WHATSAPP_NUMBER}</strong>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer hover:rotate-90"
              aria-label="Close Help Chat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 space-y-3 overflow-y-auto no-scrollbar bg-gf-bg-warm/50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex flex-col max-w-[85%] animate-in fade-in duration-200",
                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                )}
              >
                <div
                  className={cn(
                    "p-2.5 px-3 rounded-2xl text-[12px] leading-relaxed shadow-2xs",
                    msg.sender === "user"
                      ? "bg-gf-secondary text-white rounded-br-xs font-medium"
                      : "bg-white text-gf-primary border border-gf-border rounded-bl-xs"
                  )}
                >
                  {msg.text}
                </div>

                {/* Optional Action Pill Link */}
                {msg.actionUrl && (
                  <a
                    href={msg.actionUrl}
                    target={msg.actionUrl.startsWith("http") ? "_blank" : undefined}
                    rel={msg.actionUrl.startsWith("http") ? "noreferrer" : undefined}
                    onClick={() => {
                      if (!msg.actionUrl?.startsWith("http")) setIsOpen(false);
                    }}
                    className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-full shadow-2xs transition-colors"
                  >
                    <span>{msg.actionLabel}</span>
                    <ArrowRight className="w-3 h-3 text-emerald-600 shrink-0" />
                  </a>
                )}

                <span className="text-[9px] text-gf-text-muted mt-0.5 px-1 font-mono">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 px-3 bg-white border border-gf-border rounded-2xl rounded-bl-xs mr-auto shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-gf-secondary animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gf-secondary animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gf-secondary animate-bounce" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-white border-t border-gf-border/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt.label}
                type="button"
                onClick={() => handleSend(prompt.query)}
                className="whitespace-nowrap text-[10px] font-medium bg-gf-bg-warm hover:bg-gf-bg-tint border border-gf-border text-gf-primary px-2.5 py-1 rounded-full transition-colors cursor-pointer shrink-0 hover:border-gf-secondary/40"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white border-t border-gf-border flex items-center gap-1.5 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about stalls, samples, export..."
              className="flex-1 bg-gf-bg-warm px-3 py-2 rounded-xl text-xs text-gf-primary placeholder:text-gf-text-muted border border-transparent focus:border-gf-secondary focus:bg-white focus:outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-8 h-8 rounded-xl bg-gf-secondary text-white flex items-center justify-center hover:bg-gf-primary disabled:opacity-40 disabled:hover:bg-gf-secondary transition-all cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

      {/* =========================================================================
          2. SLEEK MODERN FLOATING TRIGGER BUTTON
          ========================================================================= */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative group flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-[0_8px_30px_rgba(24,59,43,0.35)] transition-all duration-300 font-semibold text-xs sm:text-sm cursor-pointer border backdrop-blur-md",
          isOpen
            ? "bg-gf-primary text-white border-white/20 scale-95"
            : "bg-gradient-to-r from-gf-primary via-emerald-800 to-gf-secondary text-white hover:shadow-[0_12px_40px_rgba(24,59,43,0.5)] border-emerald-400/30 hover:scale-105"
        )}
        aria-label="Toggle Expo Chat Help Bot"
      >
        {/* Animated Glow Halo */}
        {!isOpen && (
          <span className="absolute -inset-0.5 rounded-full bg-emerald-400/30 blur-sm group-hover:bg-emerald-400/50 transition-all pointer-events-none" />
        )}

        {/* Pulse Dot */}
        <div className="relative flex items-center justify-center shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-300" />
          <span className="absolute w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
        </div>

        <MessageSquare className="w-4 h-4 text-emerald-200 shrink-0" />

        <div className="flex flex-col items-start leading-tight">
          <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">
            {isOpen ? "Close Help Desk" : "Expo Help Desk"}
          </span>
          <span className="text-[9px] text-emerald-200 font-mono hidden sm:inline">
            WhatsApp: {WHATSAPP_NUMBER}
          </span>
        </div>

        {/* Unread Message Notification Badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center shadow-md animate-bounce">
            1
          </span>
        )}
      </button>

    </div>
  );
}
