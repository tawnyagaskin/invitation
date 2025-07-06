// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "Sekar & Rizki Wedding",
    description: "We are getting married and would love for you to be a part of our celebration.",
    address: "Jl. Kasatriyan, Gn. Gempal, Giri Peni, Kec. Wates, Kulon Progo",
    ogImage: "/images/og-image.jpg", 
    favicon: "/images/favicon.ico",
  },

  couple: {
    groomName: "Sekar",
    groomName_full: "Sekar Septi Ardiyati",
    groomName_parents: "Bapak Suparjo & Ibu Sri Riyadiyati",
    brideName: "Rizki",
    brideName_full: "Rizki Nurpadilah",
    brideName_parents: "Bapak Fathul Qorib & Ibu Nurhayati",
  },

  // Event Details
  event: {
    date: "2025-08-10",
    time: "09:00",
    timezone: "WIB",
    dateTime: "2025-08-10T00:00:00Z", // ISO 8601 format
    name: "Lelados Coffee & Space",
    address: "Jl. Kasatriyan, Gn. Gempal, Giri Peni, Kec. Wates, Kulon Progo",
    gift_address: "Jl. Bojong Sari 1 Blok D8 No.12, RT.002/RW.012. Taman Narogong Indah, Bojong Rawalumbu, Kec. Rawalumbu, Kota Bekasi, Jawa Barat 17116",
    time: "09:00 - 12:00 WIB",
    phone: "+62 877 8665 3726",
    maps_url: "https://maps.app.goo.gl/28XyJo3maAuy7SAC9",
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2663962919614!2d110.1721615!3d-7.867167299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7afb227b5401a9%3A0x918e1249251bce41!2sLelados%20Coffee%20%26%20Space!5e0!3m2!1sen!2sid!4v1744602288519!5m2!1sen!2sid",
    latitude: -7.8671673, // Replace with actual coordinates
    longitude: 110.1721615, // Replace with actual coordinates
  },

  eventDetails: [
    {
      title: "Akad Nikah - Rizki & Sekar",
      date: "2025-08-10",
      startTime: "09:00",
      endTime: "10:00",
      timeZone: "Asia/Jakarta",
      location: "Lelados Coffee & Space",
      description: "We invite you to join us in celebrating our wedding ceremony.",
    },
    {
      title: "Resepsi Nikah - Rizki & Sekar",
      date: "2025-08-10",
      startTime: "10:00",
      endTime: "13:00",
      timeZone: "Asia/Jakarta",
      location: "Lelados Coffee & Space",
      description: "We invite you to join us in celebrating our wedding ceremony.",
    },
  ],

  audio: {
    src: "/audio/backsound.mp3",
    title: "Can't Help Falling in Love",
    artist: "Ed Sheeran",
    autoplay: true,
    loop: true,
    toastDuration: 5000,
    pauseOnInactive: true,
    resumeOnReturn: true,
  },

  bankAccounts: [
    {
      bank: "Bank Central Asia",
      accountNumber: "6630838256",
      accountName: "Rizki Nurpadilah",
      logo: "/images/bank-bca.png",
    },
    {
      bank: "Bank Central Asia",
      accountNumber: "5681480316",
      accountName: "Sekar Septi Ardiyati",
      logo: "/images/bank-bca.png",
    },
  ],
  qris: {
    image: "https://ypp.co.id/site/uploads/qris/5f7c6da47a380-qr-code-dana.jpg",
  },
  supabase: {
    url: "https://rnckskkhqvxnipafwzfw.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuY2tza2tocXZ4bmlwYWZ3emZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MDM5NDUsImV4cCI6MjA2MDE3OTk0NX0.8khGIPF81qUmNaJJHjFtN99rpzsqSHcii9DueT0tPsM"
  },
  link: {
    train: "https://booking.kai.id/search?origination=KtdFBl1xjTOORiV8XxSdfw%3D%3D&destination=bsmX3DtqA9GnMnn3iqyPdQ%3D%3D&tanggal=VcUgRvy1KPqohAu%2ByTsKPCTbOEW68sfhrFgA%2BZZK%2FsA%3D&adult=gI55KLCZtUwvlSZfMKs5Wg%3D%3D&infant=N6HiGnWj%2BzrH%2BwounZCuxg%3D%3D&book_type="
  }
};

export default config;
