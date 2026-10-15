const soloData = {
  // Destinasi Wisata
  destinations: [
    {
      id: "keraton-surakarta",
      name: "Keraton Surakarta Hadiningrat",
      category: "sejarah",
      categoryLabel: "Sejarah & Cagar Budaya",
      rating: 4.8,
      reviewsCount: 1240,
      image: "assets/images/Keraton Solo Hadiningrat.jpg",
      shortDesc: "Pusat kebudayaan Jawa warisan Wangsa Mataram Islam yang berdiri sejak tahun 1744 oleh Sunan Pakubuwono II.",
      fullDesc: "Keraton Kasunanan Surakarta Hadiningrat adalah istana resmi Kasunanan Surakarta. Kompleks keraton memiliki arsitektur megah perpaduan gaya tradisional Jawa dan sentuhan Eropa abad ke-18. Pengunjung dapat melihat museum pusaka, kereta kencana kebesaran kerajaan, sasana sewaka, serta artefak berharga sejarah Mataram.",
      openHours: "09.00 - 14.00 WIB (Senin - Kamis), 09.00 - 15.00 WIB (Sabtu - Minggu)",
      ticketPrice: "Rp 15.000 (Domestik) / Rp 50.000 (Mancanegara)",
      facilities: ["Museum Pusaka", "Pemandu Wisata Resmi", "Spot Foto Busana Adat", "Toko Suvenir", "Area Parkir Luas"],
      mapsUrl: "https://maps.google.com/?q=Keraton+Surakarta+Hadiningrat",
      address: "Balowarti, Pasar Kliwon, Kota Surakarta, Jawa Tengah 57144",
      highlight: "Warisan Budaya Dunia",
      popular: true
    },
    {
      id: "pura-mangkunegaran",
      name: "Pura Mangkunegaran",
      category: "sejarah",
      categoryLabel: "Sejarah & Cagar Budaya",
      rating: 4.9,
      reviewsCount: 1580,
      image: "assets/images/Pura Mangkunegaran.jpg",
      shortDesc: "Istana kadipaten agung dengan Pendopo ageng terbesar di Nusantara dan taman klasik bergaya Eropa 'Pracima Tuin'.",
      fullDesc: "Pura Mangkunegaran didirikan pada 1757 oleh Raden Mas Said (Pangeran Sambernyawa). Terkenal dengan Pendopo Ageng tanpa paku beratap limasan yang megah. Kini, kompleks ini makin memesona dengan dibukanya Pracima Tuin, taman kerajaan bernuansa kolonial modern yang menyajikan fine dining kuliner khas istana Mangkunegaran.",
      openHours: "08.30 - 15.00 WIB (Setiap Hari)",
      ticketPrice: "Rp 30.000 (Domestik) / Rp 50.000 (Wisman)",
      facilities: ["Pendopo Ageng Terbesar", "Restoran Kerajaan Pracima Tuin", "Perpustakaan Rekso Pustoko", "Toilet Bersih & Mushola", "Spot Foto Estetik"],
      mapsUrl: "https://maps.google.com/?q=Pura+Mangkunegaran+Surakarta",
      address: "Jl. Ronggowarsito No.83, Keprabon, Banjarsari, Kota Surakarta",
      highlight: "Pendopo Terluas di Indonesia",
      popular: true
    },
    {
      id: "de-tjolomadoe",
      name: "De Tjolomadoe",
      category: "modern",
      categoryLabel: "Modern & Heritage",
      rating: 4.7,
      reviewsCount: 2100,
      image: "assets/images/De Tjolomadoe.jpg",
      shortDesc: "Revitalisasi pabrik gula kuno tahun 1861 menjadi landmark seni visual kontemporer, museum mesin raksasa, dan pusat konser.",
      fullDesc: "De Tjolomadoe awalnya adalah pabrik gula megah yang didirikan oleh KGPAA Mangkunegara IV pada tahun 1861. Kini telah bertransformasi menjadi ruang kreatif modern berkelas internasional. Di dalamnya terdapat museum instalasi mesin tebu raksasa bersejarah, galeri pameran seni seni, cafe bergaya vintage-industrial, dan venue konser bergengsi.",
      openHours: "10.00 - 17.00 WIB (Selasa - Minggu, Senin Tutup)",
      ticketPrice: "Rp 35.000 (Tiket Masuk Museum)",
      facilities: ["Museum Mesin Klasik", "Concert Hall", "Cafe & Resto Vintage", "Art Space Galeri", "Free WiFi"],
      mapsUrl: "https://maps.google.com/?q=De+Tjolomadoe+Karanganyar",
      address: "Jl. Adi Sucipto No.1, Paulan Wetan, Malangjiwan, Kec. Colomadu (Solo Barat)",
      highlight: "Ikon Heritage-Industrial",
      popular: true
    },
    {
      id: "taman-balekambang",
      name: "Taman Balekambang Solo",
      category: "alam",
      categoryLabel: "Taman & Alam",
      rating: 4.7,
      reviewsCount: 980,
      image: "https://kabarproperti.id/wp-content/uploads/2024/07/Taman-Balekambang-Surakarta-780x470.jpg",
      shortDesc: "Taman peninggalan Mangkunegara VII dengan skywalk pepohonan rimbun, danau buatan Partini Tuin, dan rusa jinak berkeliaran.",
      fullDesc: "Taman Balekambang dibangun pada tahun 1921 sebagai bentuk kasih sayang KGPAA Mangkunegara VII kepada kedua putrinya, Partini dan Partinah. Pasca revitalisasi megah 2024, taman ini memiliki skywalk spektakuler di atas kanopi pepohonan, gedung teater seni terbuka, amphiteater air, serta area konservasi alam di tengah jantung kota Solo.",
      openHours: "06.00 - 17.00 WIB (Setiap Hari)",
      ticketPrice: "Rp 5.000 (Domestik)",
      facilities: ["Skywalk Kanopi Hutan", "Gedung Kesenian Ketoprak", "Danau Perahu Partini", "Habitat Rusa Jinak", "Jogging Track Alami"],
      mapsUrl: "https://maps.google.com/?q=Taman+Balekambang+Surakarta",
      address: "Jl. Balekambang No.1, Manahan, Kec. Banjarsari, Kota Surakarta",
      highlight: "Skywalk Hijau Tengah Kota",
      popular: true
    },
    {
      id: "solo-safari",
      name: "Solo Safari (Taman Satwa Taru Jurug)",
      category: "alam",
      categoryLabel: "Taman & Rekreasi",
      rating: 4.8,
      reviewsCount: 1740,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAF-B6f5Ghp1o5OrNQcHvams9MKmc_QG5U6FZrsg5eaqVIVfJAUnb1mIEv&s=10",
      shortDesc: "Konservasi satwa modern berstandar safari dunia di tepi Sungai Bengawan Solo dengan interaksi satwa dan restoran singa.",
      fullDesc: "Solo Safari menghadirkan pengalaman berpetualang satwa liar di alam terbuka. Menampilkan satwa endemik Indonesia dan mancanegara dalam habitat tanpa jeruji besi (open barrier). Dilengkapi Makunde Restaurant di mana Anda bisa bersantap sambil melihat singa Afrika secara langsung di balik kaca tebal.",
      openHours: "08.30 - 16.30 WIB (Weekdays) / 08.00 - 16.30 WIB (Weekend)",
      ticketPrice: "Rp 45.000 - Rp 60.000 (Reguler / Premium)",
      facilities: ["Safari Walk & Buggy Car", "Makunde Lion Restaurant", "Satwa Show Edukatif", "Petting Zoo Anak", "Wahana Perahu Bengawan"],
      mapsUrl: "https://maps.google.com/?q=Solo+Safari+Surakarta",
      address: "Jl. Ir. Sutami No.109, Jebres, Kota Surakarta, Jawa Tengah",
      highlight: "Wisata Keluarga Terfavorit",
      popular: true
    },
    {
      id: "pasar-gede",
      name: "Pasar Gede Hardjonagoro",
      category: "belanja",
      categoryLabel: "Belanja & Budaya",
      rating: 4.8,
      reviewsCount: 3200,
      image: "assets/images/pasargede.jpg",
      shortDesc: "Pasar tradisional tertua di Solo karya arsitek Belanda Thomas Karsten, surga jajanan tradisional dan rempah Nusantara.",
      fullDesc: "Berdiri sejak 1930, Pasar Gede adalah simbol toleransi dan denyut nadi ekonomi Kota Solo yang bersebelahan langsung dengan Klenteng Tien Kok Sie. Di pasar berarsitektur Indisch ini, Anda bisa menikmati kuliner legendaris seperti Dawet Telasih Bu Dermi, Lenjongan, Timlo, serta buah-buahan segar dan jamu herbal khas keraton.",
      openHours: "06.00 - 18.00 WIB (Kuliner malam buka hingga 23.00 WIB)",
      ticketPrice: "Gratis (Umum)",
      facilities: ["Pusat Jajanan Tradisional", "Sentra Rempah & Bumbu", "Klenteng Bersejarah", "Akses Batik Solo Trans", "Atm Center"],
      mapsUrl: "https://maps.google.com/?q=Pasar+Gede+Hardjonagoro+Solo",
      address: "Jl. Urip Sumoharjo, Sudiroprajan, Kec. Jebres, Kota Surakarta",
      highlight: "Pusat Kuliner Tradisional",
      popular: true
    },
    {
      id: "kampung-batik-laweyan",
      name: "Kampung Batik Laweyan",
      category: "belanja",
      categoryLabel: "Seni & Belanja",
      rating: 4.7,
      reviewsCount: 1420,
      image: "https://cdn0-production-images-kly.akamaized.net/xdtw_QWd9Rb-ME3wBtfRE7nHCfA=/0x78:1500x923/1280x720/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3058940/original/088189100_1582534720-Laweyan.jpg",
      shortDesc: "Kawasan saudagar batik kuno abad ke-14 dengan gang-gang berdinding tinggi artistik dan ratusan workshop batik tulis.",
      fullDesc: "Laweyan adalah salah satu kampung tertua di Surakarta yang menjadi basis Serikat Dagang Islam (SDI) tempo dulu. Arsitektur rumah para juragan batik memadukan gaya Jawa, Eropa, dan Tionghoa dengan benteng privasi tinggi. Pengunjung bisa mengikuti kursus kilat membatik (workshop canting) dan membeli kain batik langsung dari pengrajin.",
      openHours: "08.00 - 20.00 WIB (Tergantung showroom batik)",
      ticketPrice: "Gratis masuk kawasan (Workshop Batik Rp 50.000)",
      facilities: ["Ratusan Butik Batik Tulis & Cap", "Workshop Edukasi Membatik", "Caffe Heritage Nyaman", "Spot Foto Nuansa Vintage", "Homestay Arsitektur Klasik"],
      mapsUrl: "https://maps.google.com/?q=Kampung+Batik+Laweyan+Solo",
      address: "Kecamatan Laweyan, Kota Surakarta, Jawa Tengah 57148",
      highlight: "Pusat Batik Tertua di Solo",
      popular: false
    },
    {
      id: "museum-radya-pustaka",
      name: "Museum Radya Pustaka",
      category: "sejarah",
      categoryLabel: "Sejarah & Museum",
      rating: 4.6,
      reviewsCount: 650,
      image: "https://asset.kompas.com/crops/WiHiyo1_jn23tw3gW5DeoeGbu7A=/0x0:0x0/1200x800/data/photo/2022/09/01/63109648d8777.jpg",
      shortDesc: "Museum tertua di Indonesia (berdiri 1890) menyimpan naskah kuno beraksara Jawa, arca perunggu, dan koleksi wayang langka.",
      fullDesc: "Didirikan oleh KRA Sosrodiningrat IV pada masa Pakubuwono IX, Museum Radya Pustaka terletak di kawasan Sriwedari. Menyimpan ribuan manuskrip serat babad kuno, arca batu era Hindu-Buddha, aneka senjata pusaka keris, serta kotak musik emas peninggalan Raja Napoleon Bonaparte.",
      openHours: "09.00 - 15.00 WIB (Selasa - Minggu, Senin Tutup)",
      ticketPrice: "Rp 10.000 (Umum) / Rp 5.000 (Pelajar)",
      facilities: ["Pustaka Naskah Kuno", "Koleksi Wayang Lengkap", "Pemandu Edukasi", "Taman Sriwedari Asri", "Akses Dekat Halte BST"],
      mapsUrl: "https://maps.google.com/?q=Museum+Radya+Pustaka+Surakarta",
      address: "Jl. Slamet Riyadi No.275, Sriwedari, Kec. Laweyan, Kota Surakarta",
      highlight: "Museum Tertua di Indonesia",
      popular: false
    }
  ],

  // Kuliner Khas Solo
  culinary: [
    {
      id: "selat-solo",
      name: "Selat Solo Mbak Lies",
      category: "makanan",
      rating: 4.8,
      priceRange: "Rp 20.000 - Rp 35.000",
      bestTime: "Makan Siang (10.00 - 16.00)",
      image: "assets/images/Selat Solo.jpg",
      shortDesc: "Steak khas Jawa adaptasi kuliner bangsawan Belanda: daging empuk dengan buncis, wortel, kentang goreng, telur pindang, dan kuah kecap rempah segar dingin.",
      location: "Serengan, Kota Surakarta",
      mapsUrl: "https://maps.google.com/?q=Selat+Mbak+Lies+Solo",
      mustTry: "Selat Bistik Daging Sapi & Es Degan Kopyor"
    },
    {
      id: "timlo-sastro",
      name: "Timlo Sastro Pasar Gede",
      category: "makanan",
      rating: 4.7,
      priceRange: "Rp 15.000 - Rp 30.000",
      bestTime: "Sarapan & Siang (06.30 - 15.30)",
      image: "assets/images/timlosastro.png",
      shortDesc: "Sup kaldu ayam bening gurih berisi irisan sosis solo goreng, telur pindang kecokelatan, ati ampela, dan suwiran ayam kampung empuk.",
      location: "Belakang Pasar Gede, Solo",
      mapsUrl: "https://maps.google.com/?q=Timlo+Sastro+Pasar+Gede+Solo",
      mustTry: "Timlo Komplit Spesial + Kerupuk Kulit"
    },
    {
      id: "tengkleng-klewer",
      name: "Tengkleng Klewer Bu Edi",
      category: "makanan",
      rating: 4.9,
      priceRange: "Rp 35.000 - Rp 60.000",
      bestTime: "Makan Siang (12.30 - 15.00)",
      image: "assets/images/tengkleng.png",
      shortDesc: "Olahan legendaris tulang iga, sumsum, dan jeroan kambing berkuah gulai encer gurih rempah pedas segar disajikan di atas pincuk daun pisang.",
      location: "Bawah Gapura Pasar Klewer, Solo",
      mapsUrl: "https://maps.google.com/?q=Tengkleng+Bu+Edi+Pasar+Klewer",
      mustTry: "Tengkleng Pincuk Sumsum Tulang Kambing"
    },
    {
      id: "serabi-notosuman",
      name: "Serabi Notosuman Ny. Lydia",
      category: "snack",
      rating: 4.9,
      priceRange: "Rp 3.500 - Rp 4.000 / biji (Rp 35.000 / kardus)",
      bestTime: "Pagi - Sore (05.30 - 17.00)",
      image: "assets/images/serabi.jpg",
      shortDesc: "Kudapan legendaris sejak 1923 berbahan tepung beras dan santan kental gurih, digulung dengan daun pisang. Tekstur bagian tengahnya luar biasa lumer.",
      location: "Jl. Mohammad Yamin No.28, Notosuman, Solo",
      mapsUrl: "https://maps.google.com/?q=Serabi+Notosuman+Ny+Lydia",
      mustTry: "Serabi Cokelat Lumer & Serabi Putih Original"
    },
    {
      id: "nasi-liwet-wongso",
      name: "Nasi Liwet Wongso Lemu",
      category: "makanan",
      rating: 4.7,
      priceRange: "Rp 25.000 - Rp 45.000",
      bestTime: "Malam Hari (16.00 - 01.00)",
      image: "assets/images/nasiliwet.jpg",
      shortDesc: "Nasi gurih dimasak santan dengan topping sayur labu siam pedas manis, suwiran ayam kampung, telur pindang, dan gumpalan areh santan gurih.",
      location: "Jl. Teuku Umar, Keprabon, Solo",
      mapsUrl: "https://maps.google.com/?q=Nasi+Liwet+Wongso+Lemu",
      mustTry: "Nasi Liwet Komplit Dada Ayam & Telur Areh"
    },
    {
      id: "dawet-telasih",
      name: "Es Dawet Telasih Bu Dermi",
      category: "minuman",
      rating: 4.8,
      priceRange: "Rp 12.000 / mangkuk",
      bestTime: "Pagi - Siang (08.00 - 15.00)",
      image: "https://thumb.viva.co.id/media/frontend/thumbs3/2017/12/15/5a335ccc929eb-dawet-telasih-bu-dermi_665_374.jpg",
      shortDesc: "Pelepas dahaga legendaris Pasar Gede berisikan cendol hijau, bubur sumsum lembut, ketan hitam manis, biji selasih kenyal, disiram santan es batu dan sirup gula.",
      location: "Dalam Los Pasar Gede Blok D, Solo",
      mapsUrl: "https://maps.google.com/?q=Dawet+Telasih+Bu+Dermi+Pasar+Gede",
      mustTry: "Es Dawet Campur Komplit Segar"
    }
  ],

  // Akomodasi & Penginapan di Solo
  accommodations: [
    {
      id: "the-royal-surakarta-heritage",
      name: "The Royal Surakarta Heritage - MGallery",
      category: "mewah",
      categoryLabel: "Mewah & Bintang 5",
      type: "Bintang 5 Luxury Heritage",
      rating: 4.8,
      reviewsCount: 2450,
      priceRange: "Mulai Rp 780.000 / malam",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Hotel bintang 5 bernuansa keraton Jawa dengan ukiran kayu jati mewah, koleksi ornamen wayang & batik di setiap sudut.",
      fullDesc: "The Royal Surakarta Heritage menghadirkan kemewahan berkelas dunia yang dipadukan secara harmonis dengan keagungan budaya Jawa. Berlokasi strategis di Jl. Slamet Riyadi dekat Keraton dan Pasar Gede, hotel ini menyuguhkan kolam renang bernuansa klasik, Srikandi Spa, serta interior berukir megah peraih piagam rekor MURI.",
      area: "Pasar Kliwon (Dekat Keraton)",
      address: "Jl. Slamet Riyadi No.6, Kp. Baru, Kec. Pasar Kliwon, Kota Surakarta",
      facilities: ["Kolam Renang Semi-Indoor", "Srikandi Spa Tradisional", "Restoran Srikandi & Lounge", "Wi-Fi Cepat", "Akses 5 Menit ke Keraton", "Pusat Kebugaran"],
      mapsUrl: "https://maps.google.com/?q=The+Royal+Surakarta+Heritage+Solo",
      popular: true
    },
    {
      id: "alila-solo",
      name: "Alila Solo",
      category: "mewah",
      categoryLabel: "Mewah & Bintang 5",
      type: "Bintang 5 Modern Landmark",
      rating: 4.9,
      reviewsCount: 4800,
      priceRange: "Mulai Rp 1.250.000 / malam",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Gedung tertinggi di Jawa Tengah dengan kolam renang outdoor spektakuler, rooftop bar Agra, dan fasilitas modern kontemporer.",
      fullDesc: "Alila Solo adalah ikon arsitektur perkotaan modern di Kota Surakarta. Memadukan desain kontemporer dengan motif batik Parang khas Solo, hotel ini menawarkan kamar luas berpemandangan panorama kota & Gunung Merapi, kolam renang bertingkat, serta Agra Rooftop Lounge tertinggi di Solo.",
      area: "Laweyan (Slamet Riyadi)",
      address: "Jl. Slamet Riyadi No.562, Jajar, Kec. Laweyan, Kota Surakarta",
      facilities: ["Agra Rooftop Bar & Lounge", "Kolam Renang Outdoor Mewah", "Spa Alila Berstandar Dunia", "Pusat Kebugaran 24 Jam", "Ballroom Grand Alila", "Valet Parking"],
      mapsUrl: "https://maps.google.com/?q=Alila+Solo",
      popular: true
    },
    {
      id: "roemahkoe-heritage",
      name: "Roemahkoe Heritage Hotel",
      category: "heritage",
      categoryLabel: "Heritage & Butik",
      type: "Boutique Heritage Hotel",
      rating: 4.7,
      reviewsCount: 890,
      priceRange: "Mulai Rp 450.000 / malam",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Bangunan bersejarah tahun 1938 peninggalan saudagar batik, menghadirkan kedamaian tropis dan kuliner resep keraton.",
      fullDesc: "Berada tepat di tengah Kampung Batik Laweyan, Roemahkoe Heritage Hotel menempati rumah saudagar batik yang didirikan tahun 1938 dengan gaya arsitektur Art Deco dan Indische. Dilengkapi Restoran Laras yang menyajikan kuliner otentik peninggalan keraton Solo serta suasana taman halaman dalam yang sejuk dan asri.",
      area: "Kampung Batik Laweyan",
      address: "Jl. Dr. Rajiman No.501, Bumi, Kec. Laweyan, Kota Surakarta",
      facilities: ["Restoran Masakan Khas Keraton", "Taman Tropis Syahdu", "Galeri Batik Bersejarah", "Wi-Fi Gratis", "Tur Jalan Kaki Laweyan", "Parkir Area"],
      mapsUrl: "https://maps.google.com/?q=Roemahkoe+Heritage+Hotel+Solo",
      popular: true
    },
    {
      id: "swiss-belhotel-solo",
      name: "Swiss-Belhotel Solo",
      category: "strategis",
      categoryLabel: "Strategis & Dekat Stasiun",
      type: "Bintang 4 Modern City",
      rating: 4.7,
      reviewsCount: 1950,
      priceRange: "Mulai Rp 620.000 / malam",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Pilihan terbaik di pusat kota, hanya 5 menit dari Stasiun Solo Balapan dan dekat Masjid Raya Sheikh Zayed.",
      fullDesc: "Swiss-Belhotel Solo menawarkan kenyamanan premium di lokasi paling strategis Kota Bengawan. Sangat ideal bagi wisatawan keluarga maupun pebisnis karena kemudahan aksesnya ke Stasiun Balapan, Terminal Tirtonadi, dan kemegahan Masjid Raya Sheikh Zayed. Fasilitas mencakup kolam renang outdoor, spa, dan restoran prasmanan internasional.",
      area: "Banjarsari (Dekat Stasiun Balapan)",
      address: "Jl. Ahmad Yani No.45, Gilingan, Kec. Banjarsari, Kota Surakarta",
      facilities: ["Kolam Renang Dewasa & Anak", "Swiss-Cafe Restaurant", "Shuttle ke Stasiun & Masjid Zayed", "Spa & Sauna", "Pusat Kebugaran", "Akses Kursi Roda"],
      mapsUrl: "https://maps.google.com/?q=Swiss-Belhotel+Solo",
      popular: false
    },
    {
      id: "the-sunan-hotel-solo",
      name: "The Sunan Hotel Solo",
      category: "mewah",
      categoryLabel: "Mewah & Bintang 4",
      type: "Bintang 4 Cultural Hotel",
      rating: 4.6,
      reviewsCount: 2200,
      priceRange: "Mulai Rp 550.000 / malam",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Hotel legendaris bernuansa keramahan Jawa dengan kolam renang semi-olimpiade, ballroom megah, dan sentuhan budaya.",
      fullDesc: "The Sunan Hotel Solo telah lama menjadi tuan rumah berbagai perhelatan nasional dan kenegaraan di Solo. Mengusung konsep keramahan Solo (Solo Hospitality), hotel ini menyuguhkan pengalaman kuliner Nusantara di Narendra Restaurant, kolam renang tropis berukuran semi-olimpiade, dan hiburan musik di Musro Lounge.",
      area: "Kerten / Manahan",
      address: "Jl. Ahmad Yani No.40, Kerten, Kec. Laweyan, Kota Surakarta",
      facilities: ["Kolam Renang Semi-Olimpiade", "Narendra Restaurant", "Musro Lounge & Bar", "Kebugaran & Aerobik", "Kids Playground", "Ruang Rapat Lengkap"],
      mapsUrl: "https://maps.google.com/?q=The+Sunan+Hotel+Solo",
      popular: false
    },
    {
      id: "solia-zigna-laweyan",
      name: "Solia Zigna Kampung Batik Laweyan",
      category: "heritage",
      categoryLabel: "Heritage & Butik",
      type: "Bintang 4 Lifestyle Hotel",
      rating: 4.8,
      reviewsCount: 1600,
      priceRange: "Mulai Rp 520.000 / malam",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Hotel berkonsep lifestyle heritage di jantung kampung batik, dilengkapi infinity rooftop pool dan kedai kopi kuno 1911.",
      fullDesc: "Solia Zigna memadukan estetika heritage Kampung Batik Laweyan dengan gaya hidup modern generasi kini. Memiliki Canting Londo Kitchen yang ternama, kafe vintage Kuno 1911, dan kolam renang infinity di rooftop dengan pemandangan cakrawala kota Solo dan senja yang memesona.",
      area: "Laweyan",
      address: "Jl. Dr. Rajiman No.525, Laweyan, Kota Surakarta",
      facilities: ["Infinity Rooftop Swimming Pool", "Canting Londo Kitchen", "Kuno 1911 Cafe", "Dekat Sentra Batik Tradisional", "Wi-Fi Cepat", "Kamar Modern Smart TV"],
      mapsUrl: "https://maps.google.com/?q=Solia+Zigna+Kampung+Batik+Laweyan",
      popular: false
    }
  ],

  // Sejarah & Garis Waktu
  historyTimeline: [
    {
      year: "1745",
      title: "Bedhol Keraton ke Desa Sala",
      desc: "Akibat rusaknya Keraton Kartasura pasca peristiwa Geger Pecinan, Sri Susuhunan Pakubuwono II memindahkan pusat Kerajaan Mataram Islam ke tepian Bengawan Solo, tepatnya Desa Sala, yang kelak diresmikan menjadi Surakarta Hadiningrat."
    },
    {
      year: "1755",
      title: "Perjanjian Giyanti (Palihan Nagari)",
      desc: "Perjanjian bersejarah yang membagi Mataram Islam menjadi dua kekuasaan agung: Kasunanan Surakarta di bawah Pakubuwono III dan Kasultanan Yogyakarta di bawah Sultan Hamengkubuwono I."
    },
    {
      year: "1757",
      title: "Perjanjian Salatiga & Lahirnya Mangkunegaran",
      desc: "Pangeran Sambernyawa (Raden Mas Said) mendirikan Kadipaten Mangkunegaran (Mangkunegara I). Kota Solo kini menjadi satu-satunya kota dengan dua pusat istana kerajaan dinasti Mataram yang hidup berdampingan secara harmonis."
    },
    {
      year: "1911",
      title: "Lahirnya Sarekat Dagang Islam (SDI)",
      desc: "Haji Samanhudi mendirikan SDI di Kampung Batik Laweyan Solo. Menjadi motor pergerakan kemerdekaan dan kebangkitan ekonomi pribumi Indonesia menghadapi monopoli perdagangan kolonial."
    },
    {
      year: "Kini",
      title: "The Spirit of Java & Kota Kreatif Dunia",
      desc: "Surakarta bertransformasi menjadi magnet pariwisata heritage dunia, pusat konservasi batik, dan kota modern tanpa meninggalkan keluhuran adiluhung budaya Jawa."
    }
  ],

  // Filosofi Batik Solo
  batikPhilosophy: [
    {
      name: "Batik Parang Rusak",
      philosophy: "Melambangkan deburan ombak karang samudra yang tak kenal lelah menghantam rintangan.",
      meaning: "Mengajarkan keteguhan hati manusia dalam memerangi hawa nafsu diri sendiri serta konsistensi menegakkan kebenaran moral.",
      usage: "Dahulu merupakan busana larangan (khusus keluarga raja keraton)."
    },
    {
      name: "Batik Sidomukti",
      philosophy: "Berasal dari kata 'Sido' (menjadi/terlaksana) dan 'Mukti' (kemuliaan & kebahagiaan sejati).",
      meaning: "Harapan agar pemakainya memperoleh kelapangan rezeki, kedamaian batin, dan derajat mulia yang barokah.",
      usage: "Dipakai pengantin pada upacara pernikahan adat Jawa Surakarta."
    },
    {
      name: "Batik Truntum",
      philosophy: "Bermotif taburan bintang di pekatnya malam, diciptakan oleh Kanjeng Ratu Beruk.",
      meaning: "Simbol cinta kasih yang bersemi kembali (tumaruntum), ketulusan tanpa pamrih, dan bimbingan orang tua kepada anak.",
      usage: "Dikenakan oleh orang tua mempelai pengantin."
    },
    {
      name: "Batik Kawung",
      philosophy: "Bentuk empat lonjong simetris menyerupai buah kolang-kaling yang merekah.",
      meaning: "Simbol keadilan, kesucian batin, dan pengendalian hawa nafsu sedulur papat lima pancer dalam tata susila Jawa.",
      usage: "Melambangkan kebijaksanaan para abdi dalem dan pemimpin."
    }
  ],

  // Transportasi
  transportation: {
    toSolo: [
      {
        mode: "Pesawat Terbang",
        hub: "Bandara Internasional Adi Soemarmo (SOC)",
        desc: "Melayani rute langsung dari Jakarta (CGK/HLP), Denpasar, dan kota besar lainnya. Terkoneksi langsung dengan Kereta Bandara menuju Stasiun Solo Balapan (hanya 20 menit)."
      },
      {
        mode: "Kereta Api",
        hub: "Stasiun Solo Balapan & Solo Jebres",
        desc: "Dilewati kereta eksekutif lintas Jawa (Argo Lawu, Argo Dwipangga, Lodaya) serta KRL Commuter Line Yogya - Solo dengan jadwal padat setiap 30-40 menit."
      },
      {
        mode: "Bus Antarkota",
        hub: "Terminal Bus Terpadu Tirtonadi",
        desc: "Terminal bus percontohan nasional bertaraf bandara dengan jembatan layang (skybridge) langsung menuju Stasiun Balapan. Melayani bus dari seluruh penjuru Sumatera, Jawa, dan Bali."
      },
      {
        mode: "Kendaraan Pribadi / Mobil",
        hub: "Tol Trans Jawa (Keluar GT Colomadu / Gondangrejo)",
        desc: "Akses super cepat via Tol Trans Jawa (Ruas Solo-Ngawi / Semarang-Solo). Jakarta ke Solo dapat ditempuh dalam ±5-6 jam berkendara nyaman."
      }
    ],
    inSolo: [
      {
        name: "Batik Solo Trans (BST)",
        type: "Bus Rapid Transit (BRT)",
        info: "Memiliki 6 koridor utama dan 6 feeder angkutan kota. Armada bus ber-AC modern, pembayaran cashless (kartu e-money & QRIS). Tarif gratis/sangat murah bersubsidi Pemkot."
      },
      {
        name: "KRL Commuter Line Solo - Yogya",
        type: "Kereta Listrik Modern",
        info: "Menghubungkan Stasiun Palur - Jebres - Solo Balapan - Purwosari hingga Stasiun Tugu Yogyakarta. Sangat efisien, bebas macet, beroperasi dari pagi hingga malam."
      },
      {
        name: "Sepur Kluthuk Jaladara",
        type: "Kereta Uap Wisata Kuno 1921",
        info: "Kereta uap ulin uap legendaris buatan Jerman berbahan bakar kayu jati, melintasi rel tengah kota di Jalan Slamet Riyadi yang menjadi ikon wisata unik satu-satunya di Indonesia."
      },
      {
        name: "Becak Wisata Tradisional",
        type: "Angkutan Wisata Santai",
        info: "Tersedia di sekitar Keraton, Pasar Gede, dan Mangkunegaran. Cocok untuk menikmati angin sepoi-sepoi dan jalanan teduh Kota Solo sambil berbelanja."
      }
    ]
  },

  // Itinerary
  itineraries: [
    {
      id: "1-hari",
      title: "1 Hari: One Day Classic Heritage & Kuliner",
      target: "Pelancong singkat yang ingin menikmati mahakarya Solo dalam satu hari penuh.",
      steps: [
        { time: "07.30 - 09.00", activity: "Sarapan Timlo Sastro & Minum Es Dawet Telasih di Pasar Gede." },
        { time: "09.30 - 12.00", activity: "Menjelajahi Museum Keraton Surakarta Hadiningrat & Pagelaran Sasana Sewaka." },
        { time: "12.30 - 13.45", activity: "Makan siang kuliner segar Selat Solo Mbak Lies di Serengan." },
        { time: "14.15 - 16.30", activity: "Mengeksplorasi kemegahan Pura Mangkunegaran & foto di taman Pracima Tuin." },
        { time: "17.00 - 18.30", activity: "Beli oleh-oleh Serabi Notosuman Ny. Lydia yang baru matang." },
        { time: "19.00 - 21.00", activity: "Makan malam Nasi Liwet Wongso Lemu Keprabon & nongkrong santai di Koridor Gatot Subroto (Gatsu Art Street)." }
      ]
    },
    {
      id: "2-hari",
      title: "2 Hari: Culture, Batik Hunting & Industrial Arts",
      target: "Wisatawan akhir pekan yang menyukai perpaduan sejarah, belanja kerajinan, dan spot foto estetik.",
      steps: [
        { time: "Hari 1 Pagi", activity: "City tour Keraton Surakarta, berburu kain di Pasar Klewer & makan Tengkleng Bu Edi." },
        { time: "Hari 1 Sore", activity: "Menikmati sore di Skywalk Hutan Kota Taman Balekambang dan berinteraksi dengan rusa." },
        { time: "Hari 1 Malam", activity: "Menonton pentas Wayang Orang Sriwedari (gedung kesenian tertua)." },
        { time: "Hari 2 Pagi", activity: "Wisata Kampung Batik Laweyan: ikut workshop canting & jalan di gang heritage berdinding tinggi." },
        { time: "Hari 2 Siang", activity: "Meluncur ke De Tjolomadoe: museum mesin tebu raksasa abad ke-19 dan pameran seni." },
        { time: "Hari 2 Sore", activity: "Beli roti Mandarin Orion dan jajanan tradisional di Pasar Gede sebelum pulang." }
      ]
    },
    {
      id: "3-hari",
      title: "3 Hari: The Ultimate Solo Raya Adventure",
      target: "Eksplorasi mendalam wisata kota, satwa safari, hingga keindahan alam lereng Gunung Lawu.",
      steps: [
        { time: "Hari 1", activity: "Eksplorasi Warisan Keraton Surakarta, Mangkunegaran Pracima Tuin, dan surga kuliner legendaris." },
        { time: "Hari 2", activity: "Pagi petualangan di Solo Safari (makan di Makunde resto), sore di De Tjolomadoe, malam kulineran Galabo." },
        { time: "Hari 3", activity: "Trip pegunungan Karanganyar: Candi Cetho berkabut, Kebun Teh Kemuning, dan santap sate kelinci lereng Lawu." }
      ]
    }
  ],

  // Galeri Multimedia
  gallery: [
    {
      id: "gal-1",
      title: "Pendopo Ageng Pura Mangkunegaran",
      category: "arsitektur",
      image: "assets/images/Pura Mangkunegaran.jpg",
      caption: "Pendopo megah tanpa paku dengan langit-langit bergambar lukisan Kumudawati pelindung marabahaya."
    },
    {
      id: "gal-2",
      title: "Gerbang Keraton Surakarta",
      category: "arsitektur",
      image: "assets/images/Keraton Solo Hadiningrat.jpg",
      caption: "Kori Kamandungan Keraton Kasunanan Surakarta Hadiningrat berornamen warna biru laut dan emas."
    },
    {
      id: "gal-3",
      title: "Proses Membatik Tulis Tradisional",
      category: "budaya",
      image: "assets/images/membatik.jpg",
      caption: "Ketelitian tangan pengrajin Kampung Laweyan menorehkan malam panas dengan canting tembaga."
    },
    {
      id: "gal-4",
      title: "Pabrik Gula Kuno De Tjolomadoe",
      category: "arsitektur",
      image: "assets/images/De Tjolomadoe.jpg",
      caption: "Perpaduan arsitektur kolonial abad ke-19 yang direvitalisasi menjadi pusat kesenian modern."
    },
    {
      id: "gal-5",
      title: "Jajanan Tradisional Pasar Gede",
      category: "kuliner",
      image: "assets/images/jajanpasar.jpg",
      caption: "Warna-warni lenjongan, getuk, tiwul, klepon dan bubur sumsum dengan lumuran kinca gula jawa."
    },
    {
      id: "gal-6",
      title: "Kanopi Hijau Taman Balekambang",
      category: "alam",
      image: "https://kabarproperti.id/wp-content/uploads/2024/07/Taman-Balekambang-Surakarta-780x470.jpg",
      caption: "Hutan kota peninggalan Mangkunegara VII dengan suasana sejuk dan pepohonan beringin berusia ratusan tahun."
    }
  ],

  // Ulasan Awal dari Pengunjung (Form Community Board)
  initialReviews: [
    {
      id: "rev-1",
      name: "Raditya Danu Pratama",
      email: "raditya@email.com",
      category: "Sejarah & Keraton",
      placeName: "Pracima Tuin Mangkunegaran",
      rating: 5,
      date: "2026-08-15",
      message: "Tempatnya luar biasa indah! Terasa seperti bangsawan Jawa makan di taman kerajaan. Pelayanannya sangat ramah dan makanannya otentik."
    },
    {
      id: "rev-2",
      name: "Siti Nurhaliza",
      email: "siti.n@email.com",
      category: "Kuliner Khas",
      placeName: "Selat Mbak Lies Serengan",
      rating: 5,
      date: "2026-08-28",
      message: "Dekorasi restorannya sangat unik penuh piring keramik antik, dan kuah selatnya menyegarkan sekali di siang hari terik."
    },
    {
      id: "rev-3",
      name: "Aris Munandar",
      email: "aris.m@email.com",
      category: "Taman & Alam",
      placeName: "Skywalk Taman Balekambang",
      rating: 5,
      date: "2026-09-02",
      message: "Skywalk-nya bersih, asri, dan aman untuk keluarga. Anak-anak sangat senang bisa memberi makan kawanan rusa yang ramah."
    }
  ]
};

// Global export untuk browser & node
if (typeof window !== 'undefined') {
  window.soloData = soloData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = soloData;
}
