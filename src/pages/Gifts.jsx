import config from "@/config/config";
import { motion } from "framer-motion";
import { Copy, Gift, CheckCircle, Wallet, Heart, GiftIcon } from "lucide-react";
import { useState } from "react";

export default function Gifts() {
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(text);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <>
      {/* Header + Tombol selalu tampil */}
      <section id="gifts">
        <div className="py-20 text-center">

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, duration: 1.5, type: "spring" }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-sky-200 to-pink-200" />
            <Gift className="w-6 h-6 text-pink-400" />
            <div className="h-px w-16 bg-gradient-to-r from-pink-200 to-sky-200" />
          </motion.div>

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
                Gifts
              </textPath>
            </text>
          </motion.svg>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-sm text-gray-500 mt-4 px-4"
          >
            Kehadiran dan doa restu merupakan karunia yang sangat berarti bagi kami. Namun, jika ingin berbagi kebahagiaan melalui tanda kasih, berikut detailnya
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-4 py-2 mt-6 text-sky-600 border-sky-500 ring-1 text-xs rounded-full hover:bg-sky-400 hover:text-white transition"
            >
              {showDetails ? "Tutup" : "Klik di sini"}
            </button>
          </motion.div>
        </div></section>


      {/* Konten detail ditampilkan hanya jika showDetails true */}
      {showDetails && (
        <section id="gifts-1" className="relative overflow-hidden pb-10">
          {/* Background gradasi */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white" />
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-sky-100/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rounded-full w-96 h-96 bg-sky-100/20 blur-3xl" />

          <div className="container relative z-10 px-4 mx-auto">
            {/* Divider */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-[1px] w-12 bg-sky-200" />
              <Gift className="w-5 h-5 text-sky-400" />
              <div className="h-[1px] w-12 bg-sky-200" />
            </motion.div>

            {/* Bank accounts */}
            <div className="grid max-w-2xl gap-6 mx-auto mt-8">
              {config.bankAccounts.map((account, index) => (
                <motion.div
                  key={account.accountNumber}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="relative group"
                >
                  <div className="absolute inset-0 transition-transform duration-300 transform bg-gradient-to-r from-sky-100/50 to-sky-100/50 rounded-2xl group-hover:scale-105" />
                  <div className="relative p-6 border shadow-lg backdrop-blur-sm bg-white/80 rounded-2xl border-sky-100/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 p-2 bg-white rounded-lg shadow-sm">
                          <img src={account.logo} alt="Bank" className="object-contain w-full h-full" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{account.bank}</h3>
                          <p className="text-sm text-gray-500">{account.accountName}</p>
                        </div>
                      </div>
                      <Wallet className="w-5 h-5 text-sky-400" />
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50/80">
                        <p className="font-mono text-gray-700">{account.accountNumber}</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => copyToClipboard(account.accountNumber)}
                          className="flex items-center space-x-1 text-sky-500 hover:text-sky-600"
                        >
                          {copiedAccount === account.accountNumber ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          <span className="text-sm">
                            {copiedAccount === account.accountNumber ? "Copied!" : "Copy"}
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Alamat pengiriman kado */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="inline-block p-6 border shadow-lg backdrop-blur-sm bg-white/80 rounded-2xl border-sky-100/50">
                <h3 className="mb-4 font-medium text-sky-600">Kirim Kado ke Alamat</h3>
                {/* <div className="text-sm text-gray-600 max-w-md mx-auto">
                  Jl. Bojong Sari 1 Blok D8 No.12, RT.002/RW.012, Taman Narogong Indah, Bojong Rawalumbu,
                  Kec. Rawalumbu, Kota Bekasi, Jawa Barat 17116
                </div> */}
                <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50/80">
                  <p className="font-mono text-gray-700">{config?.event?.gift_address}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard(config?.event?.gift_address)}
                    className="flex items-center space-x-1 text-sky-500 hover:text-sky-600"
                  >
                    {copiedAccount === config?.event?.gift_address ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
