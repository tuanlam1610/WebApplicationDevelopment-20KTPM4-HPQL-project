const express = require('express');
const app = express();
const expressHbs = require('express-handlebars');
const trip_info_route = require('./routes/trip_info_route');
const garage_info_route = require('./routes/garage_info_route');

app.engine('hbs', expressHbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + '/views/partials',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        load_cmts: function (value, options) {
            let lengthCarousel = Math.floor(value.length / 4);
            if (value.length % 4 != 0) {
                lengthCarousel += 1;
            }
            let result = ''
            for (let j = 0; j < lengthCarousel; j++) {
                if (j == 0) result = '<div class="carousel-item active">'
                else result += '<div class="carousel-item">'
                result += '<div class="comments row d-flex justify-content-center">'
                for (let i = 0; i < 4; i++) {
                    if (j * 4 + i < value.length) {
                        let sao = parseInt(value[j * 4 + i].soSao);

                        result += '<div class="comment-item col-md-6 mx-2 mb-4">' +
                            '<div class="d-flex justify-content-between flex-wrap">' +
                            '<div class="d-flex">' +
                            '<div class="user-avatar">' +
                            '<img src="/assets/img/user.png" alt="">' +
                            '</div>' +
                            '<div class="user-infor">' +
                            '<p class="date-post">'
                            + options.fn(value[j * 4 + i].ngayDanhGia) +
                            '</p>' +
                            '<p class="user-name">'
                            + options.fn(value[j * 4 + i].KhachHang.hoten) +
                            '</p>' +
                            '</div>' +
                            '</div>' +
                            '<div class="user-rate">' +
                            '<p class="type-bus">' +
                            'Loại xe: <span>'
                            + options.fn(value[j * 4 + i].loaiGhe) +
                            '</span>' +
                            '</p>' +
                            '<p class="star">' +
                            'Đánh giá: ';
                        for (let k = 0; k < sao; k++) {
                            result += '<i class="fa-solid fa-star"></i>'
                        }
                        for (let k = 0; k < 5 - sao; k++) {
                            result += '<i class="fa-regular fa-star"></i>'
                        }
                        result += '</p>' +
                            '</div>' +
                            '</div>' +
                            '<div class="comment-text">'
                            + options.fn(value[j * 4 + i].noiDung) +
                            '</div>' + '</div>'
                    }
                }
                result += '</div> </div>'
            }
            return result
        },
        load_cmts_add: function (value, options) {
            let result = '<div class="add comments row d-flex justify-content-center">';
            result += '<div class="comments row d-flex justify-content-center">'
            for (let i = 0; i < value.length; i++) {

                let sao = parseInt(value[i].soSao);

                result += '<div class="comment-item col-md-6 mx-2 mb-4">' +
                    '<div class="d-flex justify-content-between flex-wrap">' +
                    '<div class="d-flex">' +
                    '<div class="user-avatar">' +
                    '<img src="/assets/img/user.png" alt="">' +
                    '</div>' +
                    '<div class="user-infor">' +
                    '<p class="date-post">'
                    + options.fn(value[i].ngayDanhGia) +
                    '</p>' +
                    '<p class="user-name">'
                    + options.fn(value[i].KhachHang.hoten) +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="user-rate">' +
                    '<p class="type-bus">' +
                    'Loại xe: <span>'
                    + options.fn(value[i].loaiGhe) +
                    '</span>' +
                    '</p>' +
                    '<p class="star">' +
                    'Đánh giá: ';
                for (let k = 0; k < sao; k++) {
                    result += '<i class="fa-solid fa-star"></i>'
                }
                for (let k = 0; k < 5 - sao; k++) {
                    result += '<i class="fa-regular fa-star"></i>'
                }
                result += '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="comment-text">'
                    + options.fn(value[i].noiDung) +
                    '</div>' + '</div>'

            }
            return result +"</div> </div>"
        }
    }
}));

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => {
    res.render('index');
})

app.use('/trip_info', trip_info_route);

app.use('/garage_info', garage_info_route);

app.use('/login', require('./routes/login_route'));

app.use('/register', require('./routes/register_route'));

app.get('/createTables', (req, res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send("Tables Created");
    });
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});