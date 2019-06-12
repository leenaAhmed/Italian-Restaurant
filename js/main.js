function initMap(){
			  var location = { lat: -25.363 ,lng:131.044  };
			  var map = new google.maps.Map(document.getElementById("map"),{
				  zoom:4 ,
				  center :location
			  });
			  var  Marker =  new google.maps.Marker({
				    position: location ,
				    map     : map 
			  });
		  }
/*  nav tabs*/
let ul = document.querySelector('.nav-item');
let li = ul.children;
// add styles to navbar tab when click on it and remove these styles from its siblings
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function(e) {
        e.preventDefault();

        for (var j = 0; j < li.length; j++) {
            if (window.pageYOffset !== 0) {
                li[j].children[0].style.color = '#313131';
            }
        }
        //this.classList.add('blue');
        this.children[0].style.color = '#0066af';

        var item = document.getElementById(this.getAttribute('data-value'));
        window.scrollTo(0, item.clientHeight);
    });
}