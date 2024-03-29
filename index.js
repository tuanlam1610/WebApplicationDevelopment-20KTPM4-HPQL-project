require('dotenv').config();
const bp = require('body-parser');
const TokenManager = require('./middleware/token');
const express = require('express');
const app = express();
const expressHbs = require('express-handlebars');
const moment = require('moment');
const fileUpload = require('express-fileupload')

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const ticket_find_route = require('./routes/ticket_find_route');
const ticket_time_route = require('./routes/ticket_time_route');
const ticket_seat_route = require('./routes/ticket_seat_route');
const ticket_confirm_route = require('./routes/ticket_confirm_route');



const paginateHelper = require('express-handlebars-paginate');

app.engine('hbs', expressHbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + '/views/partials',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        isLessThan3: function (value) {
            return value < 3;
        },
        generateStar: function (value, options) {
            let result = "";
            const full_star = Math.floor(value);
            const half_star = value - full_star;
            let i = 0;
            for (; i < full_star; i++) {
                result += '<i class="fa-solid fa-star"></i>'
            }
            if (half_star > 0) {
                result += '<i class="fa-regular fa-star-half-stroke"></i>'
            }
            for (; i < 5; i++) {
                result += '<i class="fa-regular fa-star"></i>'
            }
            return result
        },
        formatDate: function (datetime, format) {
            if (moment) {
                // can use other formats like 'lll' too
                return moment(datetime).format(format);
            }
            else {
                return datetime;
            }
        },
        formatCurrency: function (currency) {
            var result = "";
            result = new Intl.NumberFormat().format(currency) + "đ";
            result = result.replace(",", ".");
            return result;
        },
        createPagination: paginateHelper.createPagination,
        assign: function (varName, varValue, options) {
            if (!options.data.root) {
                options.data.root = {};
            }
            options.data.root[varName] = varValue;
        },
        calcCost: function (ticketPrice, ticketNums) {
            let totalPrice = ticketPrice * ticketNums;
            return totalPrice;
        }
    }
}));

app.use(fileUpload());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/'))

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Login


app.use('/', require('./routes/index_route'))

app.use('/login', require('./routes/login_route'));

app.use('/register', require('./routes/register_route'));

app.use('/listofgarage', require('./routes/ListOfGarage_route'));

app.use('/listoftrip', require('./routes/ListOfTrip_route'));

app.use('/trip_info', require('./routes/trip_info_route'));

app.use('/garage_info', require('./routes/garage_info_route'));


app.get('/createTables', (req, res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send("Tables Created");
    });
});

//Đặt vé
app.use('/find_ticket', ticket_find_route);
app.use('/time_ticket', ticket_time_route);
app.use('/seat_ticket', ticket_seat_route);
app.use('/confirm_ticket', ticket_confirm_route);

// Thông tin tài khoản
app.use('/account_info', require('./routes/account_info_route'));
app.use('/edit_info', require('./routes/edit_info_route'));
app.use('/change_password', require('./routes/change_password_route'));
app.use('/history', require('./routes/history_route'));

//htlam
app.use ('/admin', require('./routes/admin_route'));

//
app.use ('/add_garage', require('./routes/add_garage_route'));
app.use ('/add_trip', require('./routes/add_trip_route'));
app.use ('/admin_garages', require('./routes/admin_garage_route'));
app.use ('/admin_trips', require('./routes/admin_trip_route'));
app.use ('/edit_garage', require('./routes/edit_garage_route'));
app.use ('/edit_trip', require('./routes/edit_trip_route'));


function getSum(total, item){
    return total + item.soSao
}

app.get('/calcStar', async (req, res) => {
    const models = require('./models/index')
    let garages = await models.NhaXe.findAll({
        include: [{
            model: models.DanhGia
        }]
    });
    garages.forEach(item => {
        let stars = 0;
        if (item.DanhGia.length > 0) {
            stars = item.DanhGia.reduce(getSum, 0) / item.DanhGia.length;
        }
        console.log(stars)
        item.sosaoTB = stars;
        item.update({
            sosaoTB: stars.toFixed(1)
        }, {
            where: { ID_NX: item.ID_NX }
        })
    })
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});