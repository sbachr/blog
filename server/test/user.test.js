// // process.env.NODE_ENV='test'
// const User = require('../models/modelUser')
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../app');
// var expect = chai.expect;


// console.log(User);

// chai.use(chaiHttp);
// console.log(process.env.NODE_ENV);
// describe('User', function () {
//     let userObj = {}

//     beforeEach(function (done) {
//         User.create({
//             username: 'test',
//             email: 'test@mail.com',
//             password: '123'
//         })
//             .then(user => {
//                 console.log(user);

//                 userObj = user
//                 done()
//             })
//     })

//     afterEach(function (done) {
//         User.deleteMany(function (err) {
//             if (err) {
//                 console.log(err)
//             }
//             done()
//         });
//     })

//     it('DISPLAY ALL USERS on /users (GET)', function (done) {
//         chai.request(app)
//             .get('/users')
//             .end(function (err, res) {
//                 expect(res).to.have.status(200)
//                 done()
//             })
//     });

//     it('REGISTER on /register (POST)', function (done) {
//         chai.request(app)
//             .post('/register')
//             .send({ name: 'test3', email: 'test1@mail.com', password: '123' })
//             .end(function (err, res) {
//                 expect(res).to.have.status(201)
//                 done()
//             })
//     })
//     it('SIGN IN on /login (POST)', function (done) {

//         chai.request(app)
//             .post('/login')
//             .send({ email: userObj.email, password: userObj.password })
//             .end(function (err, res) {
//                 expect(res).to.have.status(200)
//                 expect(res.body).to.have.property('user')
//                 expect(res.body.user).to.be.a('object')
//                 expect(res.body.user.name).to.equal('test')
//                 expect(res.body.user.email).to.equal('test@mail.com')
//                 expect(res.body.user.password).to.equal('123')
//                 done()
//             })
//     })

// })