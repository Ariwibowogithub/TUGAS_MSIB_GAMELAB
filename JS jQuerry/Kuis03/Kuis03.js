const listRumah = [ //list penawaran
    { 
        kawasan : { banjir: false, longsor: false, industri: false }, 
        luas : { tanah: 900, bangunan: 450 }, 
        fasilitas : { kolamRenang: true, parkirLuas: true, kebun: true }
    },

    { 
        kawasan : { banjir: false, longsor: true, industri: false }, 
        luas : { tanah: 1000, bangunan: 380 }, 
        fasilitas : { kolamRenang: false, parkirLuas: true, kebun: true } 
    },

    { 
        kawasan : { banjir: false, longsor: false, industri: false }, 
        luas : { tanah: 1000, bangunan: 480 }, 
        fasilitas : { kolamRenang: true, parkirLuas: true, kebun: true } 
    },

    { 
        kawasan : { banjir: true, longsor: false, industri: false }, 
        luas : { tanah: 800, bangunan: 700 }, 
        fasilitas : { kolamRenang: true, parkirLuas: true, kebun: true } 
    },

    { 
        kawasan : { banjir: false, longsor: false, industri: false }, 
        luas : { tanah: 900, bangunan: 600 }, 
        fasilitas : { kolamRenang: true, parkirLuas: true, kebun: true } 
    },

    { 
        kawasan : { banjir: false, longsor: false, industri: false }, 
        luas : { tanah: 900, bangunan: 600 }, 
        fasilitas : { kolamRenang: true, parkirLuas: true, kebun: true } 
    },

    { 
        kawasan : { banjir: false, longsor: false, industri: false }, 
        luas : { tanah: 900, bangunan: 600 }, 
        fasilitas : { kolamRenang: true, parkirLuas: true, kebun: true } 
    },
    
];

function cekKriteria(rumah) {
    let kriteria = true;

    if (rumah.kawasan.banjir||rumah.kawasan.longsor||rumah.kawasan.industri) {
        kriteria = false;
    }
    if (rumah.luas.tanah < 800||rumah.luas.bangunan < 400) {
        kriteria = false;
    }
    if (!rumah.fasilitas.kolamRenang || !rumah.fasilitas.parkirLuas || !rumah.fasilitas.kebun) {
        kriteria = false
    }

    return kriteria;
}

const hasil = []; //array untuk menyimpan hasil

for (let i = 0; i < listRumah.length; i++) {
    const rumah = listRumah[i];
    const kriteria = cekKriteria(rumah);

    //method push untuk mengirim hasil kedalam array
    hasil.push({ Rumah : 'Rumah ke-'+ (i + 1), Kriteria : kriteria? "Memenuhi kriteria":"Tidak memenuhi kriteria"});
}

console.table(hasil);