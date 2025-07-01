import EventCards from '@/components/EventsCard'
import config from '@/config/config'
import { formatDate } from '@/lib/formatEventDate'
import { motion } from 'framer-motion'
import { CalendarCheck, CalendarHeart, Clock, ExternalLink, Heart, MapPin, Phone } from 'lucide-react'

export default function Events() {
  return (<>
    {/* Event Section */}
    <section id="event" className="min-h-screen relative overflow-hidden bg-gradient-to-b to-white via-sky-50/20 from-[#D8B4FE]/10">
      {/* Decorative Background Elements */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-4 mt-6"
      >
        <div className="h-[1px] w-12 bg-sky-200" />
        <div className="text-sky-400">
          <CalendarHeart className="w-4 h-4" fill="currentColor" />
        </div>
        <div className="h-[1px] w-12 bg-sky-200" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 py-28"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >

          <motion.svg
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewBox="0 0 500 120"
            className="w-full h-28"
          >
            <defs>
              <path
                id="curve"
                d="M 100,100 A 150,60 0 0,1 400,100"
                fill="transparent"
              />
            </defs>
            <text
              fontSize="28"
              fontFamily="serif"
              fill="#0EA5E9"
              className="italic font-light"
            >
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Wedding Event
              </textPath>
            </text>
          </motion.svg>

        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <EventCards events={config.eventDetails} />

          {/* LOCATION CONTENT */}
          <div className="grid place-items-center max-w-6xl gap-8 mx-auto md:grid-row-2">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg border-8 border-white"
            >
              <iframe
                src={config.event.maps_embed}
                width="50%"
                height="50%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-72 h-72 "
              ></iframe>
            </motion.div>

            {/* Venue Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-8 px-16 text-center">
                <h3 className="mb-6 font-serif italic text-2xl text-sky-700">{config.event.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <p className="flex-1 text-gray-600">{config.event.address}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="items-center justify-center w-full gap-2 pt-4">
                    {/* <motion.a
                        href={config.event.maps_embed}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-1.5 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors text-sm"
                    >
                        <NavigationIcon className="w-3.5 h-3.5" />
                        <span>Directions</span>
                    </motion.a> */}

                    <motion.a
                      href={config.event.maps_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-1.5 bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition-colors text-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Map</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              {/* <div className="p-4 border bg-sky-50/50 rounded-xl border-sky-100">
                <p className="text-sm text-sky-600">
                </p>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Pattern */}
    </section>
  </>)
}