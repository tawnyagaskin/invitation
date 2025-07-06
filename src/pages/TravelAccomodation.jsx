// import { motion } from 'framer-motion'
// import { MapPin, Train, Clock, Ticket } from 'lucide-react'
// import config from '@/config/config'

// export default function TravelAccommodation() {
//   return (
//     <>
//       {/* Travel Accommodation Section */}
//       <section id="travel" className="min-h-screen relative overflow-hidden bg-gradient-to-b to-white via-sky-50/20 from-[#D8B4FE]/10">
//         {/* Decorative Background Elements */}
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           transition={{ delay: 0.5 }}
//           className="flex items-center justify-center gap-4 mt-6"
//         >
//           <div className="h-[1px] w-12 bg-sky-200" />
//           <div className="text-sky-400">
//             <Train className="w-4 h-4" fill="currentColor" />
//           </div>
//           <div className="h-[1px] w-12 bg-sky-200" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 container mx-auto px-4 py-28"
//         >
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center space-y-4 mb-16"
//           >
//             <motion.svg
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               viewBox="0 0 500 120"
//               className="w-full h-28"
//             >
//               <defs>
//                 <path
//                   id="curve"
//                   d="M 100,100 A 150,60 0 0,1 400,100"
//                   fill="transparent"
//                 />
//               </defs>
//               <text
//                 fontSize="28"
//                 fontFamily="serif"
//                 fill="#0EA5E9"
//                 className="italic font-light"
//               >
//                 <textPath href="#curve" startOffset="50%" textAnchor="middle">
//                   Travel & Accommodation
//                 </textPath>
//               </text>
//             </motion.svg>
//           </motion.div>

//           {/* Travel Information Grid */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="max-w-2xl mx-auto"
//           >
//             {/* Location and Map */}
//             <div className="grid place-items-center max-w-6xl gap-8 mx-auto md:grid-row-2">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//                 className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg border-8 border-white"
//               >
//                 <iframe
//                   src={config.event.maps_embed}
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="w-72 h-72"
//                 ></iframe>
//               </motion.div>

//               {/* Venue and Travel Details */}
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="space-y-6"
//               >
//                 <div className="p-8 px-16 text-center">
//                   <h3 className="mb-6 font-serif italic text-2xl text-sky-700">Near Wates Station</h3>

//                   <div className="space-y-4">
//                     <div className="flex items-start space-x-4">
//                       <MapPin className="w-5 h-5 text-sky-700" />
//                       <p className="flex-1 text-gray-600">Event location is conveniently located near Wates Station, Yogyakarta.</p>
//                     </div>

//                     <motion.a
//                       href={config.event.maps_url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="flex items-center justify-center gap-1.5 bg-sky-700 text-white py-2 rounded-lg hover:bg-sky-600 transition-colors text-sm"
//                     >
//                       <MapPin className="w-3.5 h-3.5" />
//                       <span>View Map</span>
//                     </motion.a>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Train Route Information */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="mt-12 p-6 border bg-sky-50/50 rounded-xl border-sky-100"
//             >
//               <h4 className="text-lg font-semibold text-sky-700 mb-4">Recommended Train Routes</h4>
//               <div className="space-y-6">
//                 <div>
//                   <h5 className="font-medium text-sky-600 flex items-center gap-2">
//                     <Train className="w-5 h-5" />
//                     KRL Route: Pasar Senen to Wates Station
//                   </h5>
//                   <p className="text-gray-600 mt-2">Travel conveniently from Jakarta to Wates Station, Yogyakarta, with the following recommended trains:</p>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <h6 className="font-medium text-sky-600 flex items-center gap-2">
//                       <Clock className="w-5 h-5" />
//                       Convenient Options
//                     </h6>
//                     <ul className="list-disc list-inside text-gray-600">
//                       <li>Bogowonto: Comfortable and reliable service.</li>
//                       <li>Progo: Known for punctuality and convenience.</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <h6 className="font-medium text-sky-600 flex items-center gap-2">
//                       <Ticket className="w-5 h-5" />
//                       Affordable Option
//                     </h6>
//                     <ul className="list-disc list-inside text-gray-600">
//                       <li>Bengawan: Budget-friendly travel option.</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </section>
//     </>
//   )
// }
import { motion } from 'framer-motion'
import { MapPin, Train, Hotel } from 'lucide-react'
import config from '@/config/config'

export default function TravelAccommodation() {
  return (
    <>
      <section id="travel" className="min-h-screen bg-gradient-to-b to-[#D8B4FE]/10 via-sky-50/20 from-white py-16">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-4"
        >
          <div className="h-[1px] w-10 bg-sky-300" />
          <Train className="w-5 h-5 text-sky-700" />
          <div className="h-[1px] w-10 bg-sky-300" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 py-20"
        >

          <motion.svg
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewBox="0 0 480 100"
            className="w-full h-28"
          >
            <defs>
              <path
                id="curve"
                d="M 100,100 A 150,60 0 0,1 400,200"
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
                Travel & Accommodation
              </textPath>
            </text>
          </motion.svg>


          {/* Train and Hotel Lists */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mt-12 gap-6 "
          >
            {/* Train Routes */}
            <div className="p-4">
              <div className="relative inline-block w-full text-center">
                <span className="absolute top-[8px] left-1/3 text-2xl font-[NewYork] text-gray-700 opacity-10 select-none pointer-events-none">
                  Train Routes
                </span>
                <span className="relative text-2xl text-sky-700 font-[NewYork] ">
                  Train Routes
                </span>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 text-lg font-[NewYork] text-gray-600 font-thin tracking-wide ">
                <span className='pt-4'>St. Pasar Senen</span>
                <div className="w-[0.5px] h-4 bg-sky-700 rounded-full" />
                <span className=''>St. Wates</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='flex flex-col items-center justify-center'
              >
                <button
                  onClick={() => {
                    window.open(config.link.train, '_blank');
                  }}
                  target='_blank'
                  className="px-4 py-2 mt-6 text-sky-600 border-sky-500 ring-1 text-xs rounded-full hover:bg-sky-400 hover:text-white transition"
                >
                  <div className='flex flex-row items-center justify-center gap-2'>
                    <Train size={12} />  Buy ticket
                  </div>
                </button>
                <span className='text-[9px] mt-1 italic text-muted-foreground text-center'>
                  Please make sure change the departure station and date according to your needs
                </span>

              </motion.div>

            </div>

            {/* Hotels */}
            <div className="p-6 mt-8">
              <div className="relative inline-block w-full text-center">
                <span className="absolute top-[8px] left-1/3 text-2xl font-[NewYork] text-gray-700 opacity-10 select-none pointer-events-none">
                  Nearby Hotels
                </span>
                <span className="relative text-2xl text-sky-700 font-[NewYork] ">
                  Nearby Hotels
                </span>
              </div>

              <span className='text-[9px] mt-1 italic text-muted-foreground relative inline-block w-full text-center'>
                These hotels are the closest to the venue location
              </span>

              <div className="flex flex-col justify-center gap-2 text-lg text-center font-[NewYork] text-gray-600 font-thin tracking-wide ">
                <span className='pt-4'>Swiss-Belhotel Airport Yogyakarta</span>
                <span className=''>Griya Tetirah Syariah</span>
                <span className=''>Hotel Andono near YIA</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}