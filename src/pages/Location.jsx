import config from "@/config/config";
import { Clock, Navigation as NavigationIcon, MapPin, CalendarCheck, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/formatEventDate";

export default function Location() {
  return (
    <>
      {/* Location section */}
      <section
        id="location"
        className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-pink-100/20 blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 py-20 mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 space-y-4 text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block font-medium text-sky-500"
            >
              Lokasi Acara
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl text-gray-800 md:text-5xl"
            >
              Lokasi
            </motion.h2>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-sky-200" />
              <MapPin className="w-5 h-5 text-sky-400" />
              <div className="h-[1px] w-12 bg-sky-200" />
            </motion.div>
          </motion.div>

          {/* Location Content */}
          <div className="grid items-center max-w-6xl gap-8 mx-auto md:grid-row-2">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border-8 border-white"
            >
              <iframe
                src={config.event.maps_embed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>

            {/* Venue Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
                <h3 className="mb-6 font-serif text-2xl text-gray-800">{config.event.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 mt-1 text-sky-500" />
                    <p className="flex-1 text-gray-600">{config.event.address}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <CalendarCheck className="w-5 h-5 text-sky-500" />
                    <p className="text-gray-600">{formatDate(config.event.dateTime)}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-sky-500" />
                    <p className="text-gray-600">{config.event.time}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-sky-500" />
                    <p className="text-gray-600">{config.event.phone}</p>
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
        </div>
      </section>
    </>
  );
}
