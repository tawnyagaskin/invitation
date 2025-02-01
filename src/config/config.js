// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "Sekar & Rizki Wedding",
    description: "We are getting married and would love for you to be a part of our celebration.",
    address: "Jl. Kasatriyan, Gn. Gempal, Giri Peni, Kec. Wates, Kulon Progo",
    ogImage: "/images/og-image.jpg", // OpenGraph image for social media
    favicon: "/images/favicon.ico",
  },

  couple: {
    groomName: "Rizki",
    brideName: "Sekar",
  },

  // Event Details
  event: {
    date: "2025-07-26",
    time: "08:00",
    timezone: "WIB",
    dateTime: "2025-07-26T08:00:00Z", // ISO 8601 format
    name: "Lelados Coffee & Space",
    address: "Jl. Kasatriyan, Gn. Gempal, Giri Peni, Kec. Wates, Kulon Progo",
    time: "08:00 - 13:00 WIB",
    phone: "+62 877 8665 3726",
    maps_url: "https://maps.app.goo.gl/8pPobSKBzDr7ZzACA",
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.266396366737!2d110.16958657500584!3d-7.867167292154887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7afb227b5401a9%3A0x918e1249251bce41!2sLelados%20Coffee%20%26%20Space!5e0!3m2!1sen!2sid!4v1738410947469!5m2!1sen!2sid",
    latitude: -7.8671673, // Replace with actual coordinates
    longitude: 110.1695866, // Replace with actual coordinates
  },

  eventDetails: [
    {
      title: "Akad Nikah",
      date: "2025-07-26",
      startTime: "08:0",
      endTime: "10:00",
      timeZone: "Asia/Jakarta",
      location: "Lelados Coffee & Space",
      description: "We invite you to join us in celebrating our wedding ceremony.",
    },
    {
      title: "Resepsi Nikah",
      date: "2025-07-26",
      startTime: "10:00",
      endTime: "12:00",
      timeZone: "Asia/Jakarta",
      location: "Lelados Coffee & Space",
      description: "We invite you to join us in celebrating our wedding ceremony.",
    },
  ],

  audio: {
    src: "/audio/backsound.mp3",
    title: "Fulfilling Humming",
    artist: "Nasheed",
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
};

export default config;
