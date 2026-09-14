"use client";

import { motion } from 'framer-motion';
import { services } from '@/data/services';

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SERVICES</h2>
          <div className="w-20 h-1 bg-accent-primary mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-8 rounded-xl bg-surface-elevated border border-border hover:border-accent-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent-primary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-accent-primary text-xl">
                  {service.icon === 'globe' && '🌐'}
                  {service.icon === 'palette' && '🎨'}
                  {service.icon === 'code' && '💻'}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

              <p className="text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}