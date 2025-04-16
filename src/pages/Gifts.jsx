import config from "@/config/config";
import { motion } from "framer-motion";
import { Copy, Gift, CreditCard, CheckCircle, Wallet, Building2, MapPin } from "lucide-react";
import { useState } from "react";
export default function Gifts() {
  const [copiedAccount, setCopiedAccount] = useState(null);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(text);
    setTimeout(() => setCopiedAccount(null), 2000);
  };
  return (
    <>
      <section id="gifts" className="relative min-h-screen overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-rose-100/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rounded-full w-96 h-96 bg-pink-100/20 blur-3xl" />

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
              className="inline-block font-medium text-rose-500 text-4xl"
            >
              Kado
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-sm text-gray-500 "
            >
              Kehadiran dan doa restu merupakan karunia yang sangat berarti bagi kami. Namun, jika ingin berbagi kebahagiaan melalui tanda kasih, berikut detailnya:
            </motion.h2>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-rose-200" />
              <Gift className="w-5 h-5 text-rose-400" />
              <div className="h-[1px] w-12 bg-rose-200" />
            </motion.div>

            {/* Message Container */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-md mx-auto space-y-4"
            >

            </motion.div>


          </motion.div>

          {/* Bank Accounts Grid */}
          <div className="grid max-w-2xl gap-6 mx-auto">
            {config.bankAccounts.map((account, index) => (
              <motion.div
                key={account.accountNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="relative group"
              >
                <div className="absolute inset-0 transition-transform duration-300 transform bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-2xl group-hover:scale-105" />
                <div className="relative p-6 border shadow-lg backdrop-blur-sm bg-white/80 rounded-2xl border-rose-100/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 p-2 bg-white rounded-lg shadow-sm">
                        {/* <Building2 className="w-full h-full text-rose-500" /> */}
                        <img src={account.logo} alt="Bank" className="object-contain w-full h-full" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{account.bank}</h3>
                        <p className="text-sm text-gray-500">{account.accountName}</p>
                      </div>
                    </div>
                    <Wallet className="w-5 h-5 text-rose-400" />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50/80">
                      <p className="font-mono text-gray-700">{account.accountNumber}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => copyToClipboard(account.accountNumber)}
                        className="flex items-center space-x-1 text-rose-500 hover:text-rose-600"
                      >
                        {copiedAccount === account.accountNumber ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        <span className="text-sm">{copiedAccount === account.accountNumber ? "Copied!" : "Copy"}</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Digital Wallet QR */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-6 border shadow-lg backdrop-blur-sm bg-white/80 rounded-2xl border-rose-100/50">
              <h3 className="mb-4 font-medium text-rose-600">Kirim Kado ke Alamat</h3>
              <div className="flex flex-col items-center justify-center w-full h-full text-gray-400">
                <p className="py-2 text-xs text-muted-foreground">Anda dapat mengirimkan kado dengan alamat berikut:</p>
                <br />
                <div className="flex items-start space-x-4">
                  {/* <MapPin className="w-5 h-5 mt-1 text-rose-500" /> */}
                  <div className="flex-col items-start">
                    <p className="flex-1 text-gray-600 text-sm">Jl. Bojong Sari 1 Blok D8 No.12, RT.002/RW.012, Taman Narogong Indah, Bojong Rawalumbu, Kec. Rawalumbu, Kota Bekasi, Jawa Barat 17116</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
