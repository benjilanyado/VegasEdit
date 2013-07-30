$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px", "2508px", "3135px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
        setTimeout(function(){
        $('#tooltip2').fadeOut() }, 5000);

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 6)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut();
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});

 ///// END OF TILES & UP/DOWN BUTTONS ///// 


 $("#explore").click(function(event) {       

    event.preventDefault();

    $("#slider").animate({"left": "-940px"}, 1000, function(){

      $("#buttons").fadeIn()
      $("#tooltip1").fadeIn()
    })

  });




var boxs = [
    {
        selector: '#cover3',
        headline: 'Beat Coffeehouse and Records',
        copy: "We've ended up at a hipsterish record shop/coffee shop called <a target='_blank' href='http://www.thebeatlv.com/''>The Beat Coffee House.</a> En route, we ran into Kevin Washington, AKA Aquarius. Kevin was dressed so nattily that he could have passed as a member of the Rat Pack. He's a great singer and gave us a couple of impressive soul standards.",
        address: "• Beat Coffeehouse and Records, 520 Fremont St, Las Vegas, <a target='_blank' href='http://www.thebeatlv.com'>thebeatlv.com</a>",
        content: "<img src='images/maninhat.jpg'>"
    },

    {
        selector: '#cover2',
        headline: "I-15 Nevada to Utah",
        copy: "We're on our way to Springdale, UT. Now this is road trip proper. Two lanes of black top. Desert stretching away on either side. Blue skies. Huge articulated trucks alongside us. Woohoo!",
        content: '<img src="images/ontheroad.jpg">',
        address: ""
    },

    {
        selector: '#cover6',
        headline: 'Wildcat Willies, Springdale, Utah',
        copy: "Our waitress, Shandee is very coy about the actual identity of a bumbleberry. Is this a ruse to make us want to try it? If so, it's working. 'It has the flavour profile of a blueberry, a blackberry and a blackcurrant,' she says. Shandee's grandparents used to serve it. ",
        content: '<img src="images/wildcat.jpg">',
        address: "• Wildcat Willies, 897 Zion Park Blvd, Springdale, Utah, <a target='_blank' href='http://www.wildcatwillies.com' target=_blank'>wildcatwillies.com</a>"
    },

    {
        selector: '#cover4',
        headline: 'Mob Museum, Las Vegas',
        copy: "The Las Vegas <a target='_blank' href='http://themobmuseum.org/''>Mob Museum</a> is an offer we couldn't refuse. It's great if a little macabre. I'm looking at the actual wall against which Bugs Moran's men were gunned down on St Valentine's Day 1929. It was dismantled brick by brick in Chicago and reassembled here, complete with bullet holes.",
        content: '<img src="images/mobmuseum.jpg">',
        address: "• Mob Museum, 300 E Stewart Ave, <a target='_blank' href='http://themobmuseum.org' target='_blank'>the<b>mobmuseum</b>.org</a>"

    },

    {
        selector: '#cover1',
        headline: 'Bumbleberry Inn, Springdale, Utah',
        copy: "We spent the night in the town of <a target='_blank' href='http://www.springdaletown.com/''>Springdale</a> on the outskirts of <a target='_blank' href='http://www.nps.gov/zion'>Zion National Park</a>, a resort town surrounded by astonishing red sandstone cliffs. We wound up at the <a target='_blank' href='http://www.bumbleberry.com/''>Bumbleberry Inn.</a> It’s quiet and green here. It seems very cool after Las Vegas, and the breeze is heavy with the smell of pine.",
        content: '<img src="images/bumbleberry.jpg">',
        address: "• Bumbleberry Inn, 97 Bumbleberry Ln  Springdale, UT, <a target='_blank' href='www.bumbleberry.com' target='_blank'><b>bumbleberry</b>.com</a>"
    },

    {
        selector: '#cover7',
        headline: "Grafton Ghost Town, Utah",
        copy: "There's an extraordinary adobe school house, a couple of farm houses, all beautifully restored. Not a soul around. You get a moving sense of settlers who lived very tough lives here. The story is that Butch Cassidy frequented Grafton in the 19th century.  A visitor here tells me Butch was a Mormon. Can that be true?",
        content: '<img src="images/Grafton.jpg">',
        address: ''
    },

    {
        selector: '#cover8',
        headline: 'Scenic Byway 12, Utah',
        copy: "Every five minutes it's a <a target='_blank' href='http://www.guardian.co.uk/travel/2013/jul/23/road-trips-las-vegas-denver#block-51ef2ab6e4b0d7e64793713f'>completely different landscape</a>. It's like a compilation album of the world's great scenic drives. Now That's What I Call A Highway, Vol 1. We've driven through hot dusty desertscapes, then the road has climbed up to 10,000 feet and we've seen deer in alpine pasture. You could spend a whole day driving this route.",
        content: '<img src="images/scenicbyway.jpg">',
        address: ''
    },

    {
        selector: '#cover9',
        headline: "Highway 89, Utah",
        copy: "I'm digging the 89. It's got a full quota of roadside Americana: neon motel signs, Native American trading posts, porcelain doll shops, abandoned cars, saddle repair shops and loads of apple trees. And did I mention that we are surrounded by mountains and mesas.",
        content: '<img src="images/Highway89.jpg">',
        address: ''
    },

    {
        selector: '#cover10',
        headline: 'Welcome to Colorado',
        copy: "It's amazing how quickly the scenery changes when you cross the state line. On the Colorado side, it's flat and green and agricultural. There are wheat fields and the light seems much softer already.",
        content: '<img src="images/welcometocolorado.jpg">',
        address: ''

    },

    {
        selector: '#cover11',
        headline: 'Utah',
        copy: "The consensus in the car is that Utah is awesome. It never stops serving up extraordinary vistas.  ",
        content: '<img src="images/stones.jpg">',
        address: ''
    },

    {
        selector: '#cover12',
        headline: 'Anna At Arches National Park',
        copy: "Anna Arsic is a park ranger who's handing out water to hikers. Out here in the desert, dehydration steals up on you because you don't seem to sweat. I have a new appreciation for that scene which appears in every cowboy film where a thirsty man drinks pantingly from a canteen of water.",
        content: '<img src="images/ranger.jpg">',
        address: ''
    },

    {
        selector: '#cover13',
        headline: "Arches National Park, Utah",
        copy: "Forget Henry Moore, this is pure Dali! I love this place! Andy is bounding around like mountain goat. You half expect to see some dinosaur. The valley looks like Jurassic Park. ",
        content: '<img src="images/arches.jpg">',
        address: ""
    },

    {
        selector: '#cover14',
        headline: 'Moab',
        copy: "We're having a walk around Moab. There's an attractive strip of shops with old weathered facades, including some cowboy boots from Bruce Corn at The Western Image.",
        content: '<img src="images/moab.jpg">',
        address: "• The Western Image, 39 N Main St, Moab, UT"
    },

    {
        selector: '#cover15',
        headline: "Durango & Silverton Narrow Gauge Railroad Train",
        copy: "The <a target='_blank' href='http://www.durangotrain.com/''>Durango &amp; Silverton Narrow Gauge Railroad Train</a> is quite a cool museum. It's got a couple of full-size locomotives. Jeff Elllingson is the curator of the museum. He tells me that as recently as the 1960s the roads in any direction from here were terrible.",
        content: '<img src="images/Durango.jpg">',
        address: "• Durango &amp; Silverton Narrow Gauge Railroad Train, 479 Main Ave  Durango, CO, <a target='_blank' href='http://www.durangotrain.com/''><b>durangotrain</b>.com</a>"
    },

    {
        selector: '#cover16',
        headline: 'Ouray Hot Springs Pool',
        copy: "Ouray is gorgeous. It's breaking our hearts that we only have a brief stop. As I steep in the 100 degree water, I can feel all my remaining energy slipping away. How much further is it to Denver? Oh, Lordy. Sleep, sleep...",
        content: '<img src="images/ouray.jpg">',
        address: '• 1230 Main St, Ouray'
    },

    {
        selector: '#cover18',
        headline: 'Silverton',
        copy: "This may be the prettiest town we've seen. It's a pocket-sized old mining town laid out on a grid with a main street of colourful 19th century storefronts. Mountains rise straight up on either side. I think only Main Street is tarmacked, the rest is gravel. I'm looking for a saloon with swing doors. ",
        content: '<img src="images/silverton.jpg">',
        address: ""
    },

    {
        selector: '#cover17',
        headline: 'Silver Bean, Cortez, Colorado',
        copy: "Breakfast at the <a target='_blank' href='http://www.youtube.com/watch?v=CY8J6ntAP7Y'>Silver Bean</a> on Main Street in Cortez. This is an eyecatching little diner housed in an old Airstream caravan. We're perched on seats outside eating the breakfast burritos and drinking iced coffee. Big thumbs up from the team.",
        content: '<img src="images/silverbean.jpg">',
        address: "•  Silver Bean, 410 W Main St  Cortez, <a target='_blank' href='http://cortezcolorado.net/restaurants/silver-bean-coffee/' target='_blank'>cortez<b>colorado</b>.net musi</a>"
    },

    {
        selector: '#cover19',
        headline: "Denver Art Museum",
        copy: "A lovely airy gallery which houses Native American art from Florida to Alaska. It's beautiful, fascinating stuff and, as Andy points out, it's poignant seeing it after the trip we just made.",
        content: '<img src="images/nativeamerican.jpg">',
        address: "• Denver Art Museum, 100 W 14th Ave Pkwy  Denver, <a target='_blank' href='http://www.denverartmuseum.org/' target='_blank'><b>denverartmuseum</b>.org</a>."
    },

    {
        selector: '#cover20',
        headline: 'Gunnison National Forest',
        copy: "Heading though<a target='_blank' href='http://www.stateparks.com/gunnison_national_forest_in_colorado.html'> Gunnison National Forest</a> with the Cochetopa Hills looming in the distance. We are seven miles from Monarch Pass and the Continental Divide.",
        content: '<img src="images/gunnerson.jpg">',
        address: ""
    },

    {
        selector: '#cover22',
        headline: 'The End',
        copy: "Here we are at the end of our journey, barely recognisable as the fresh-faced young men who bid goodbye to their sweethearts and took to the road in search of adventure.'",
        content: '<img src="images/final.jpg">',
        address: ""
    },

    {
        selector: '#cover21',
        headline: "Castle Creek Guitars",
        copy: "A few doors down from breakfast we stop in to <a target='_blank' href='http://www.castlecreekguitars.com/''>Castle Creek Guitars</a>. The owner, Kent Viles, has invented a new kind of guitar: the Dobrato (patent pending, <a target='_blank' href='https://vine.co/v/hAhq1dV9BKQ'>video of him playing here</a>). It's a resonator guitar with whammy bar - that's a handle that lets you get extra vibrato.",
        content: '<img src="images/castlecreek.jpg">',
        address: "• Castle Creek Guitars, 132 N. Main Street, Gunnison, <a target='_blank' href='http://www.castlecreekguitars.com/''>Castle Creek Guitars</a>."
    }


 ]

 function processPlaceClick(box) {

    $("#buttons").fadeOut();
    $(".dayofweek").fadeOut();
    $("#tooltip1").fadeOut();
    $("#lightbox").fadeIn(function(event){      
      $("#content").html(box.content);
      $("#copyheader").html(box.headline)
      $("#copy").html(box.copy)
      $("#address").html(box.address)
    });

 }

 $.each(boxs, function(i, box) {
        $(box.selector).on('click', function(e){
            e.preventDefault();
            processPlaceClick(box);
        });
    });


  $("#close").click(function(event) {        

    event.preventDefault();


    $("#lightbox").fadeOut(function(event){
       $("#buttons").fadeIn();
      $("#content").html('');
      $("#copyheader").html('');
      $("#copy").html('');
      $("#address").html('')
       $(".dayofweek").fadeIn();

    })

  });



}); //ready

