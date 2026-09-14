"use client";

import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  return (
    <form className="p-8 rounded-xl bg-surface border border-border">
      <h3 className="text-xl font-semibold mb-6">Send Message</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors"
          placeholder="Project inquiry"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        <span className="flex items-center gap-2">
          <Send size={20} />
          Send Message
        </span>
      </Button>
    </form>
  );
}