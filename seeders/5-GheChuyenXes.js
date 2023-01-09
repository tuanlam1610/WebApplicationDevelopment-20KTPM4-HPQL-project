'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let items =
    [//Xe giường nằm
      {
      "IDChuyenXe": 1,
      "viTriGhe": "A01",
      "trangThaiGhe": true
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A02",
      "trangThaiGhe": true
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A03",
      "trangThaiGhe": true
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A04",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A05",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A06",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A07",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A08",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A09",
      "trangThaiGhe": false
    },
    {
      "IDChuyenXe": 1,
      "viTriGhe": "A10",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A11",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A12",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A13",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A14",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A15",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A16",
      "trangThaiGhe": false
    },  {
      "IDChuyenXe": 1,
      "viTriGhe": "A17",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A18",
      "trangThaiGhe": false
    },{
      "IDChuyenXe": 1,
      "viTriGhe": "B01",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B02",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B03",
      "trangThaiGhe": false
    },
    {
      "IDChuyenXe": 1,
      "viTriGhe": "B04",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B05",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B06",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B07",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B08",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B09",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B10",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B11",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B12",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B13",
      "trangThaiGhe": false
    },
    {
      "IDChuyenXe": 1,
      "viTriGhe": "B14",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B15",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B16",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B17",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "B18",
      "trangThaiGhe": false
    },
    //Xe giường nằm đôi
    {
      "IDChuyenXe": 10,
      "viTriGhe": "A01",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A02",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A03",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A04",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A05",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A06",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A07",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A08",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A09",
      "trangThaiGhe": false
    },
    {
      "IDChuyenXe": 10,
      "viTriGhe": "A10",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A11",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "A12",
      "trangThaiGhe": false
    },{
      "IDChuyenXe": 10,
      "viTriGhe": "B01",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B02",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B03",
      "trangThaiGhe": false
    },
    {
      "IDChuyenXe": 10,
      "viTriGhe": "B04",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B05",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B06",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B07",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B08",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B09",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B10",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B11",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 10,
      "viTriGhe": "B12",
      "trangThaiGhe": false
    },

    //Xe Ghế ngồi
    {
      "IDChuyenXe": 6,
      "viTriGhe": "A01",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A02",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A03",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A04",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A05",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A06",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A07",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A08",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A09",
      "trangThaiGhe": false
    },
    {
      "IDChuyenXe": 6,
      "viTriGhe": "A10",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A11",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A12",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A13",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A14",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A15",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A16",
      "trangThaiGhe": false
    },  {
      "IDChuyenXe": 6,
      "viTriGhe": "A17",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A18",
      "trangThaiGhe": false
    },{
      "IDChuyenXe": 6,
      "viTriGhe": "A19",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A20",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A21",
      "trangThaiGhe": false
    },
    {
      "IDChuyenXe": 6,
      "viTriGhe": "A22",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A23",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A24",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A25",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A26",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A27",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A28",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A29",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A30",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A31",
      "trangThaiGhe": false
    },
    {
      "IDChuyenXe": 6,
      "viTriGhe": "A32",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A33",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A34",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A35",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A36",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A37",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A38",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A39",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A40",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A41",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A42",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A43",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A44",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 6,
      "viTriGhe": "A45",
      "trangThaiGhe": false
    }
  ];
    
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('GheChuyenXes', items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('GheChuyenXes', null, {});
  }
};
