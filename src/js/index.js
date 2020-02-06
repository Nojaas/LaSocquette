var ids = ['article2', 'article3', 'article4', 'article5', 'article6'];

ids.forEach(function(id) {
  var element = document.getElementById(id);
  console.log(id);

  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.add('is-reached');
    },
    offset: '90%'
  });
});