let submissions = []; 

exports.getSubmitPage = (req, res) => {
    res.render('submit', { title: 'Booking Page' }); 
};

exports.postSubmit = (req, res) => {
    const newEntry = {
        userId: req.session.user.id,
        title: req.body.title,      
        date: req.body.bookingDate, 
        content: req.body.content    
    };
    submissions.push(newEntry);
    res.redirect('/my-submissions');
};

exports.getMySubmissions = (req, res) => {
    const userList = submissions.filter(s => s.userId === req.session.user.id);
    res.render('my-submissions', { 
        title: 'My Bookings', 
        data: userList 
    }); 
};