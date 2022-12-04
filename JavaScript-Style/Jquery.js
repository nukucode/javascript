//: 23.1 => Prefix Jquery object variables with a $.

// bad
const sidebar = $(".sidebar");

// good
const $sidebar = $(".sidebar");

// good
const $sidebarBtn = $(".sidebar-btn");

//: 23.2 => Cache jQuery lookups.

// bad
function setSidebar() {
  $(".sidebar").hide();

  //...

  $(".sidebar").css({
    "background-color": "pink",
  });
}

// good
function setSidebar() {
  const sidebar = $(".sidebar");
  $sidebar.hide();

  //...

  $sidebar.css({
    "background-color": "pink",
  });
}

//: 23.3 => For DOM queries use Cascading $(".sidebar ul") or parent > child $(".sidebar > ul")


//: 23.4 => Use "find" with scoped Jquery object queries

// bad
$('ul', '.sidebar').hide();

// bad
$('.sidebar').find('ul').hide();

// good
$('.sidebar ul').hide();

// good
$('.sidebar > ul').hide();

// good
$sidebar.find('ul').hide();