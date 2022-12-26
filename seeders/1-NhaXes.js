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
      [{ "ID_NX": "1", "tennhaxe": "Phương Trang", "doangioithieu": 'Công ty Phương Trang được thành lập năm 2001. Trải qua 20 năm phát triển đặt khách hàng làm trọng tâm, chúng tôi tự hào trở thành doanh nghiệp vận tải nòng cốt đóng góp tích cực vào sự phát triển chung của ngành vận tải nói riêng và nền kinh tế đất nước nói chung. Luôn cải tiến mang đến chất lượng dịch vụ tối ưu nhất dành cho khách hàng, Công ty Phương Trang được ghi nhận qua nhiều danh hiệu danh giá như “Top 5 Công ty Uy tín ngành Vận Tải và Logistics" "Top 50 Nhãn hiệu nổi tiếng Việt Nam”, “Sản phẩm và Dịch vụ Chất lượng Châu Á” “Top 10 Thương hiệu chất lượng Châu Á.....',
      "imagepath": "/assests/img/Garage/PhuongTrang.png", "sdt": "02838386852", "diachi": "Số 1 Tô Hiến Thành, phường 3, thành phố Đà Lạt, tỉnh Lâm Đồng, Việt Nam", "email": "hotro@futa.vn", "website": "futabus.vn", "sosaoTB": 0 },
      { "ID_NX": "2", "tennhaxe": "Toàn Thắng", "doangioithieu": "Công ty TNHH TOÀN THẮNG là một trong những công ty hàng đầu về uy tín chất lượng với hơn 500 xe ô tô đời mới được sản xuất năm 2019 – 2020 thiết kế sắc sảo, an toàn, không gian nội thất rộng rãi thoải mái,… Chúng tôi có kinh nghiệm trong việc cung cấp dịch vụ cho thuê xe đi công tác, du lịch…. ….từ 4 chỗ đến 47 chỗ. Thêm vào đó, chúng tôi cung cấp nhân lực, thiết bị, và nhà ở cho các khu công nghiệp, các dự án lớn chủ yếu là cho các công ty nước ngoài, nhà thầu rộng khắp 64 tỉnh thành.",
      "imagepath": "/assests/img/Garage/ToanThang.png", "sdt": "19006968", "diachi": "439 Bình Giã, P.Nguyễn An Ninh, TP.Vũng Tàu.", "email": "khanh.tran@toanthangcar.com", "website": "toanthangcar.com", "sosaoTB": 0 },
      { "ID_NX": "3", "tennhaxe": "Hoa Mai", "doangioithieu": "Xe khách Hoa Mai có chất lượng phục vụ ổn định, thân thiện, và được nhiều hành khách tin dùng để tham quan, du lịch Vũng Tàu, đặc biệt là các kỳ nghỉ, lễ tết. Nhà xe Hoa Mai tin chắc rằng sự tận tâm phục vụ của mình sẽ làm hài lòng mọi quý khách. Hoa Mai với chất lượng dịch vụ tiên tiến, hiện đại là một trong những lựa chọn hàng đầu của hành khách.", 
      "imagepath": "/assests/img/Garage/HoaMai.png", "sdt": "0909200200", "diachi": "47 Trưng Nhị, P.1, Tp.Vũng Tàu", "email": "hoamai.limousine@gmail.com", "website": "hoamaicar.com", "sosaoTB": 0 },
      { "ID_NX": "4", "tennhaxe": "Sao Việt", "doangioithieu": "Xe Sao Việt đi Sapa có trang thiết bị hiện đại, dàn xe giường nằm mới đẹp, các tuyến đường tập trung ở Tây Bắc. Với quan niệm rằng: Khách hàng là người quyết định sự tồn tại cũng như phát triển của công ty, hãng xe Sao Việt đã được rất nhiều lời khen nhờ đội ngũ nhân viên nhiệt tình, hiếu khách, cư xử văn minh, lịch thiệp. Xe đi Sapa của Sao Việt  có nhiều phương thức thanh toán để tạo thuận lợi cho hành khách: tại các văn phòng đại lý hoặc chuyển khoản. Hiện nay, nhà xe hoạt động trên nhiều tuyến đường như Hà Nội - Sapa, Hà Nội - Thanh Hóa, Sapa - Thanh Hóa ..", 
      "imagepath": "/assests/img/Garage/SaoViet.png", "sdt": "19006746", "diachi": "789 Giải Phóng, Hoàng Mai, Hà Nội", "email": "xesaoviet@gmail.com", "website": "xesaoviet.com.vn", "sosaoTB": 0 },
      { "ID_NX": "5", "tennhaxe": "Xuân Trường (Quảng Ninh)", "doangioithieu": "Xe Xuân Trường chuyên hoạt động trên tuyến Quảng Ninh - Hà Nội và ngược lại. Với uy tín cao trong nhiều năm qua, Xuân Trường trở thành người bạn đồng hành đáng tin cậy. Được đông đảo hành khách tin tưởng và ủng hộ. Với các chuyến xuất bến hàng ngày tại hai đầu bến. Xe Xuân Trường đi Quảng Ninh luôn tạo điều kiện thuận lợi cho hành khách sắp xếp thời gian của mình.", 
      "imagepath": "/assests/img/Garage/XuanTruong.png", "sdt": "0962635888", "diachi": "Số 36, ngõ 7, Lê Trọng Tấn, La Khê", "email": "xuantruong1970jsc@gmail.com", "website": "nhaxexuantruong.com", "sosaoTB": 0 },
      { "ID_NX": "6", "tennhaxe": "Hải Âu", "doangioithieu": "Lấy phương châm “Sự an toàn & ngon giấc của quý khách là niềm hạnh phúc của chúng tôi”, xe Hải Âu đi Thái Bình từ Hà Nội đã trở thành một cái tên quen thuộc khi hành khách lựa chọn hãng xe để di chuyển. Hải Âu được đánh giá nằm trong top 10 những nhà xe tốt nhất hỗ trợ tuyến Hà Nội - Thái Bình, là một trong những lựa chọn hàng đầu với những người thường xuyên di chuyển trên tuyến đường này.", 
      "imagepath": "/assests/img/Garage/HaiAu.png", "sdt": "02253717717", "diachi": "Số 16 Tôn Đức Thắng, Hải Phòng", "email": "cguiness4@g.co", "website": "haiaubus.vn", "sosaoTB": 0 }];
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
