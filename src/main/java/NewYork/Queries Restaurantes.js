1. Write a query to display all documents in the Restaurants collection.

db.restaurants.find();

2. Write a query to display the restaurant_id, name, borough, and cuisine for all documents in the Restaurants collection.

db.restaurants.find( {}, { 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1 } );

3. Write a query to display the restaurant_id, name, borough, and cuisine, but exclude the _id field for all documents 
in the Restaurants collection.

db.restaurants.find( {}, { '_id': 0, 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1} );

4. Write a query to display restaurant_id, name, borough, and zip code, but exclude the _id field for all documents 
in the Restaurants collection.

db.restaurants.find( {}, { '_id': 0, 'restaurant_id': 1, 'name': 1, 'borough': 1, 'address.zipcode': 1 } );

5. Write a query to show all the restaurants that are in the Bronx.

db.restaurants.find( { 'borough': 'Bronx' } );

6. Write a query to show the first 5 restaurants that are in the Bronx.

db.restaurants.find( { 'borough': 'Bronx' } ).limit(5);

7. Enter a query to display the next 5 restaurants after skipping the first 5 in the Bronx.

db.restaurants.find( { 'borough': 'Bronx' } ).skip(5).limit(5);

8. Write a query to find the restaurants that have a score of more than 90.

db.restaurants.find( {'grades.score': { $gt: 90 } } );

9. Write a query to find restaurants that have a score of more than 80 but less than 100.

db.restaurants.find( {'grades.score': { $gt: 90, $lt: 100 } } );

10. Write a query to find restaurants that are located at a latitude value less than -95.754168.

db.restaurants.find( {'address.coord.0': { $lt: -95.754168 } } );

11. Write a MongoDB query to find restaurants that do not serve any 'American' cuisine and have a 
rating greater than 70 and longitude less than -65.754168.

db.restaurants.find( { $and: [ { 'cuisine': { $not: /American/ } }, { 'grades.score': { $gt: 70 } }, { 'address.coord': { $lt: -65.754168 } } ] } );

12. Write a query to find the restaurants that do not prepare any 'American' cuisine and got a marker more than 70 and located in the longitude less than -65.754168. Note: Do this query without using the $and operator.

db.restaurants.find( {}, { 'cuisine': { $not: /American/ } }, { 'grades.score': { $gt: 70 } }, { 'address.coord': { $lt: -65.754168 } } );

13. Enter a query to find restaurants that do not serve any 'American' cuisine and received an 'A' grade point not belonging to Brooklyn. The document should be displayed according to cuisine in descending order.

db.restaurants.find( { $and: [ { 'cuisine': { $not: /American/ } }, { 'grades': { $elemMatch: { grade: 'A' } } }, { 'borough': { $not: /Brooklyn/ } } ] }).sort( { 'cuisine': -1 } );

14. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'Wil' as the first three letters in their name.

db.restaurants.find( { 'name': { $regex: /^Wil/ } }, { 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1, '_id': 0 } );

15. Write a query to find the Restaurant_id, Name, Borough and Cuisine for those restaurants containing 'ces' as the last three letters in their name.

db.restaurants.find( { 'name': { $regex: /ces$/ } }, { 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1, '_id': 0 } );

16. Write a query to find the Restaurant_id, Name, Borough and Cuisine for those restaurants containing 'Reg' as three letters somewhere else.

db.restaurants.find( { 'name': { $regex: /Reg/ } }, { 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1, '_id': 0 } );

17. Write a query to find restaurants belonging to the Bronx and prepared any American or Chinese dish.

db.restaurants.find( { $and: [ { 'borough': 'Bronx' }, { 'cuisine': { $in: ['American', 'Chinese'] } } ] }, { 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1, '_id': 0 } );

18. Write a query to find the Restaurant_id, Name, Borough and Cuisine for those restaurants that belong to Staten Island or Queens or Bronx or Brooklyn.

db.restaurants.find( { 'borough': { $in: [ 'Staten Island', 'Queens', 'Bronx', 'Brooklyn' ] } }, { 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1, '_id': 0 } );

19. Write a query to find the Restaurant_id, Name, Borough and Cuisine for those restaurants that do not belong to Staten Island or Queens or Bronx or Brooklyn.

db.restaurants.find( { 'borough': { $nin: [ 'Staten Island', 'Queens', 'Bronx', 'Brooklyn' ] } }, { 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1, '_id': 0 } );

20. Write a query to find the Restaurant_ID, Name, Borough and Cuisine for those restaurants that achieve a marker that is not more than 10.

db.restaurants.find( { 'grades.score': { $not: { $gt: 10 } } }, { 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1, '_id': 0 } );

21. Write a query to find the Restaurant_id, Name, Borough and Cuisine for those restaurants that prepare fish except 'American' and 'Chinese' or the restaurant's name begins with letters 'Wil'.

db.restaurants.find( { $or: [ { 'cuisine': 'fish', 'cuisine': { $nin: [ 'American', 'Chinese' ] } }, { 'name': { $regex: /^Wil/ } } ] }, { 'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1, '_id': 0 } );

22. Write a query to find the restaurant_id, name, and grades for those restaurants that achieve an "A" grade and a score of 11 on study data ISODate "2014-08-11T00:00:00Z".

db.restaurants.find( { 'grades': { $elemMatch: { 'date': ISODate( '2014-08-11T00:00:00Z' ), 'grade': 'A', 'score': 11 } } }, { 'restaurant_id': 1, 'name': 1, 'grades': 1, '_id': 0 } );

23. Write a query to find the restaurant_id, name, and grades for those restaurants where the 2nd grade array element contains a grade of "A" and marker 9 on an ISODate "2014-08-11T00:00:00Z".

db.restaurants.find( { 'grades.grade': 'A', 'grades.score': 9, 'grades.date': ISODate( '2014-08-11T00:00:00Z' ) }, { 'restaurant_id': 1, 'name': 1, '_id': 0, 'grades': { $slice: [1, 1] } } );

24. Write a query to find the restaurant_id, name, address, and geographic location for those restaurants where the second element of the coord array contains a value greater than 42 and up to 52.

db.restaurants.find( { 'address.coord.1': { $gt: 42, $lte: 52 } }, { 'restaurant_id': 1, 'name': 1, 'address': 1, '_id': 0 } );

25. Write a query to arrange the restaurant name in ascending order along with all the columns.

db.restaurants.find().sort( { name: 1 } );

26. Write a query to arrange the restaurant name in descending order along with all the columns.

db.restaurants.find().sort( { name: -1 } );

27. Write a query to organize the cuisine name in ascending order and by the same cuisine district. descending order

db.restaurants.find( {}, { '_id': 0, 'cuisine': 1, 'borough': 1}).sort( { 'cuisine': 1, 'borough': -1 } );

28. Write a query to find out all the addresses that do not contain the street.

db.restaurants.find( { 'address.street': null } );

29. Write a query that will select all documents in the restaurants collection where the value of the coord field is Double.

db.restaurants.find( { 'address.coord': { $type: 'double' } } );

30. Write a query that will select the restaurant_id, name, and grade for those restaurants that return 0 as the remainder after dividing the score by 7.

db.restaurants.find( { 'grades.score': { $mod: [ 7, 0 ] } }, { 'restaurant_id': 1, 'name': 1, 'grades': 1, '_id': 0 } );

31. Write a query to find the restaurant name, borough, longitude and altitude and cook for those restaurants that contain 'mon' as three letters somewhere in their name.

db.restaurants.find( { 'name': { $regex: /mon/i } }, { 'name': 1, 'borough': 1, 'address.coord': 1, 'cuisine': 1, '_id': 0 } );

32. Write a query to find the restaurant name, borough, longitude and latitude and cook for those restaurants that contain 'Mad' as the first three letters of their name.

db.restaurants.find( { 'name': { $regex: /^Mad/ } }, { 'name': 1, 'borough': 1, 'address.coord': 1, 'cuisine': 1, '_id': 0 } );



