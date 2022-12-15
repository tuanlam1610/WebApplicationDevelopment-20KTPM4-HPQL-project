'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
    let items =
      [{ "ID_NX": "81165038", "tennhaxe": "Youopia", "doangioithieu": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.", "imagepath": "/assests/img/Youopia/", "sdt": "8686392179", "diachi": "516 Algoma Plaza", "email": "fastley0@scientificamerican.com", "website": "bxtnmim.com", "sosaoTB": 3.6 },
      { "ID_NX": "89543639", "tennhaxe": "Cogilith", "doangioithieu": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.", "imagepath": "/assests/img/Cogilith/", "sdt": "1310968421", "diachi": "0 Northwestern Road", "email": "ahext1@ox.ac.uk", "website": "gziztrd.com", "sosaoTB": 4.1 },
      { "ID_NX": "40034764", "tennhaxe": "Aibox", "doangioithieu": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.", "imagepath": "/assests/img/Aibox/", "sdt": "5031240047", "diachi": "9160 Warbler Point", "email": "blorey2@dropbox.com", "website": "ssilxxk.com", "sosaoTB": 2.5 },
      { "ID_NX": "73072106", "tennhaxe": "Viva", "doangioithieu": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.", "imagepath": "/assests/img/Viva/", "sdt": "5743335050", "diachi": "6806 New Castle Avenue", "email": "agarrould3@adobe.com", "website": "sywnroj.com", "sosaoTB": 0.0 },
      { "ID_NX": "02904847", "tennhaxe": "Reallinks", "doangioithieu": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.", "imagepath": "/assests/img/Reallinks/", "sdt": "8334397251", "diachi": "3237 Sherman Junction", "email": "cguiness4@g.co", "website": "ahpehtt.com", "sosaoTB": 2.4 },
      { "ID_NX": "37724587", "tennhaxe": "Tagpad", "doangioithieu": "Fusce consequat. Nulla nisl. Nunc nisl.", "imagepath": "/assests/img/Tagpad/", "sdt": "0388140705", "diachi": "27102 Iowa Way", "email": "fgillyatt5@acquirethisname.com", "website": "npxnifo.com", "sosaoTB": 0.2 },
      { "ID_NX": "88561726", "tennhaxe": "Camido", "doangioithieu": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.", "imagepath": "/assests/img/Camido/", "sdt": "5589309397", "diachi": "64 Scoville Place", "email": "cgheeraert6@marketwatch.com", "website": "eonharw.com", "sosaoTB": 2.0 },
      { "ID_NX": "50856417", "tennhaxe": "Meejo", "doangioithieu": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.", "imagepath": "/assests/img/Meejo/", "sdt": "7772371017", "diachi": "49974 North Center", "email": "jlaphorn7@kickstarter.com", "website": "llgmsfx.com", "sosaoTB": 4.7 },
      { "ID_NX": "71560056", "tennhaxe": "Shufflester", "doangioithieu": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", "imagepath": "/assests/img/Shufflester/", "sdt": "6453827991", "diachi": "2 Darwin Hill", "email": "lsmaling8@usatoday.com", "website": "ihmhylz.com", "sosaoTB": 3.2 },
      { "ID_NX": "84202536", "tennhaxe": "Topiclounge", "doangioithieu": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.", "imagepath": "/assests/img/Topiclounge/", "sdt": "2249117850", "diachi": "263 Sachtjen Road", "email": "whullett9@smugmug.com", "website": "wiueeda.com", "sosaoTB": 3.5 }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('NhaXes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('NhaXes', null, {});
  }
};
