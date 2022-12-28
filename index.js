const express = require('express');
const app = express();
const expressHbs = require('express-handlebars');
const trip_info_route = require('./routes/trip_info_route');
const garage_info_route = require('./routes/garage_info_route');

const ticket_find_route = require('./routes/ticket_find_route');
const ticket_time_route = require('./routes/ticket_time_route');
const ticket_seat_route = require('./routes/ticket_seat_route');
const ticket_confirm_route = require('./routes/ticket_confirm_route');

app.engine('hbs', expressHbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + '/views/partials',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        generateStar: function (value, options) {
            let result = "";
            const full_star = Math.floor(value);
            const half_star = value - full_star;
            let i = 0;
            for (;i < full_star; i++){
                result += '<i class="fa-solid fa-star"></i>'
            }
            if (half_star > 0){
                result += '<i class="fa-regular fa-star-half-stroke"></i>'
            }
            for (; i < 5; i++){
                result += '<i class="fa-regular fa-star"></i>'
            }
            return result
        }
    }
}));

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => {
    res.render('index');
})

app.use('/login', require('./routes/login_route'));

app.use('/register', require('./routes/register_route'));

app.use('/listofgarage', require('./routes/ListOfGarage_route'));

app.use('/listoftrip', require('./routes/ListOfTrip_route'));

app.use('/trip_info', trip_info_route);

app.use('/garage_info', garage_info_route);

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



function getSum(total, item){
    return total + item.soSao
}

app.get('/calcStar', async (req, res) => {
    const models = require('./models/index')
    let garages = await models.NhaXe.findAll({
        include:[{
            model: models.DanhGia
        }]
    });
    garages.forEach(item => {
        let stars = 0;
        if (item.DanhGia.length > 0){
            stars = item.DanhGia.reduce(getSum, 0) / item.DanhGia.length;
        }
        console.log(stars)
        item.sosaoTB = stars;
        item.update({
            sosaoTB: stars.toFixed(1)
        },{
            where: {ID_NX: item.ID_NX}
        })
    })
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});