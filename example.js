// const twohands_node = require('./'); // require the `index.js` file from the same directory.

// // acronym('for your information', (err, resp) => {

// // 	console.log(err);
// // 	console.log(resp);

// //     // if (err) {
// //     //     console.log(err);
// //     // }

// //     //console.log(resp);
// // });

// twohands_node.init({api_token: '28eaa915b3c5848cfa8b2d2c8e4a96ee3d16d8c2'});




// twohands_node.new_user(update_user_data,function(response){
// 	console.log(response);
// 	if(response["success"]){
// 		console.log('success');
// 	} else {
// 		console.log('failure');
// 	}
// });

// //or call without callback function like this
// //twohands_node.new_user(update_user_data)


// var update_event_data = {
// 	"user": {
// 		"email": "bramu.ss@gmail.com"	
// 	},
// 	"name": "Add to Cart",
// 	"data": {
// 		"product_id": 1234, 
// 		"product_name": "Lenovo Mobile",
// 		"category_name": "mobiles",
// 		"price": 129012
// 	}
// }

// twohands_node.new_event(update_event_data,function(response){
// 	console.log(response);
// 	if(response["success"]){
// 		console.log('success');
// 	} else {
// 		console.log('failure');
// 	}
// });

// //or call without callback function like this
// //twohands_node.new_event(update_user_data)



const TwohandsClient = require('./'); // require the `index.js` file from the same directory.

var client = new TwohandsClient({api_token: '28eaa915b3c5848cfa8b2d2c8e4a96ee3d16d8c2'});

var update_user_data = {
	"email": "bramu.ss@gmail.com",
	"data": {
		"first_name": "Tharaka",
		"screen_name": "Ramu", 
		"user_type": "Buyer",
		"user_age": "30"
	}
}

var user = client.User();
user.create(update_user_data)


var update_event_data = {
	"user": {
		"email": "bramu.ss@gmail.com"	
	},
	"name": "Add to Cart",
	"data": {
		"product_id": 1234, 
		"product_name": "Lenovo Mobile",
		"category_name": "mobiles",
		"price": 129012
	}
};

var event = client.Event();
event.create(update_event_data);

