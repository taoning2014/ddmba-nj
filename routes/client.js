var express = require('express');
var router = express.Router();
var path = require('path');
var Article = require('../mongodb/models').Article;

var randomInt = function() {
  return Math.floor(Math.random() * 6 + 1);
}

router.get('/homepage.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/homepage.html'));
});

router.get('/blogs.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/blogs.html'));
});

router.get('/test', function(req, res) {
  Article.find({}, null, {sort: '-date'}, function(err, docs) {
    docs.forEach(function(item, index, array) {
      console.log(item);
      item.imgNum = randomInt();
    });
    res.render('blogs', { articles: docs });
  });
});

var dataObj = {
  articles: [
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    },
    {
      title: 'This is a Standard post with a Preview Image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est' +
      ' tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut ' +
      'perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae' +
      'voluptatem libero at eveniet veritatis ab facere.',
      imgNum: randomInt()
    }
  ]


}
router.get('/blogs', function(req, res) {
  res.render('blogs', dataObj);
});

module.exports = router;
