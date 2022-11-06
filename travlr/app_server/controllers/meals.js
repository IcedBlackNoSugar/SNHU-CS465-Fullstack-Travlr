/* GET meals view */
const meals = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });

};

module.exports = {
    meals
}