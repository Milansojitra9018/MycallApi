import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersRequest, loadMoreUsersRequest } from './actions';

const App = ({ navigation }) => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.isLoading);
  const myPage = useSelector((state) => state.page);
  const totalPages = useSelector((state) => state.totalPages.total_pages);

  console.log('users: ', users);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
        {item.avatar && (
          <Image style={styles.itemImageStyle} source={{ uri: item.avatar }} />
        )}
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.txtNameStyle}>
            {`${item.first_name} ${item.last_name}`}
          </Text>
          <Text style={styles.txtEmailStyle}>{item.email}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Details', { name: item.first_name, email: item.email, last: item.last_name, id: item.id })}>
            <Image style={styles.image} source={require('./notebook.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    loadMoreItem();
  }, [isLoading, myPage, totalPages]);

  const loadMoreItem = () => {
    if (!isLoading && (totalPages === 0 || myPage <= totalPages)){
      dispatch(loadMoreUsersRequest(myPage + 1));
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.email}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        // onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 3,
    borderColor: '#ddd',
    margin: 10,
    backgroundColor: 'skyblue',
    borderColor: 'grey',
    borderWidth: 3,
    borderRadius: 15,
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderColor: 'white',
    borderRadius: 12,
    borderWidth: 3,
  },
  contentWrapperStyle: {
    justifyContent: 'space-around',
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: '#777',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 200,
  },
});

export default App;






































// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isLoading, setLoading] = useState(false);

  // const getUsers = () => {
  //   setLoading(true);
  //   axios
  //     .get(`https://randomuser.me/api/?page=${currentPage}&results=5`)
  //     .then(res => {
  //       setUsers([...users, ...res.data.results]);
  //       setLoading(false);
  //     })
  //   //   .catch(error => {
  //   //     console.error('Error fetching users:', error);
  //   //     setLoading(false);
  //   //   });
  // };

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.itemWrapperStyle}>
//         {item.picture && item.picture.large && (
//           <Image
//             style={styles.itemImageStyle}
//             source={{ uri: item.picture.large }}
//           />
//         )}
//         <View style={styles.contentWrapperStyle}>
//           <Text style={styles.txtNameStyle}>
//             {item.name && `${item.name.title} ${item.name.first} ${item.name.last}`}
//           </Text>
//           <Text style={styles.txtEmailStyle}>{item.email}</Text>
//         </View>
//       </View>
//     );
//   };

//   const renderLoader = () => {
//     return isLoading ? (
//       <View style={styles.loaderStyle}>
//         <ActivityIndicator size="large" color="#aaa" />
//       </View>
//     ) : null;
//   };

//   const loadMoreItems = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   useEffect(() => {
//     getUsers();
//   }, [currentPage]);

//   return (
//       <FlatList
//         data={users}
//         renderItem={renderItem}
//         keyExtractor={item => item.email}
//         ListFooterComponent={renderLoader}
//         onEndReached={loadMoreItems}
//         onEndReachedThreshold={0}
//       />
//   );
// };

// const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
//   itemWrapperStyle: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     borderColor: '#ddd',
//     backgroundColor: 'skyblue',
//     margin: 10,
//     borderColor: 'grey',
//     borderRadius: 10,
//     borderWidth: 5,
//   },
//   itemImageStyle: {
//     width: 50,
//     height: 50,
//     marginRight: 16,
//     borderColor: 'white',
//     borderWidth: 3,
//     borderRadius: 10,
//   },
//   contentWrapperStyle: {
//     justifyContent: 'space-around',
//   },
//   txtNameStyle: {
//     fontSize: 16,
//   },
//   txtEmailStyle: {
//     color: '#777',
//   },
//   loaderStyle: {
//     marginVertical: 16,
//     alignItems: 'center',
//   },
// });

// export default App;






// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
// import Axios from 'axios';

// export default App = () => {
//   const baseUrl = 'https://reqres.in';
//   const perPage = 12;
//   const [userData, setUserData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchUsers = () => {
//     setIsLoading(true);
//     Axios.get(`${baseUrl}/api/users?page=${currentPage}&per_page=${perPage}`)
//       .then((response) => {
//         if (currentPage === 1) {
//           setUserData(response.data.data);
//         } else {
//           setUserData((prevData) => [...prevData, ...response.data.data]);
//         }
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setIsLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, [currentPage]);

//   const renderUserWithProps = ({ item }) => (
//     <UserItem name={item.first_name} email={item.email} avatar={item.avatar} />
//   );

//   const UserItem = ({ name, email, avatar }) => (
//     <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20, backgroundColor: 'skyblue', borderColor: 'black', borderWidth: 3, borderRadius: 20, padding: 12}}>
//       <Image
//         style={{ width: 60, height: 60, marginRight: 10, borderColor: 'white', borderWidth: 3, borderRadius: 15}}
//         source={{ uri: avatar }}
//       />
//       <View style={{margin: 10}}>
//         <Text>{name}</Text>
//         <Text>{email}</Text>
//       </View>
//     </View>
//   );

//   const renderFooter = () => {
//     return isLoading ? (
//       <ActivityIndicator size="large" color="#aaa" />
//     ) : null;
//   };

//   const handleLoadMore = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       <FlatList
//         data={userData}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderUserWithProps}
//         ListFooterComponent={renderFooter}
//         onEndReached={handleLoadMore}
//         onEndReachedThreshold={0.5} // Adjust the threshold as needed
//       />
//     </View>
//   );
// };





// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View, Image } from 'react-native';
// import Axios from 'axios';

// export default App = () => {
//   const baseUrl = 'https://reqres.in';
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     Axios.get(`${baseUrl}/api/users?page=1&per_page=12`)
//       .then((response) => {
//         setUserData(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);


//   const renderUserWithProps = ({ item }) => (
//     <UserItem name={item.first_name} email={item.email} avatar={item.avatar} />
//   );

//   const UserItem = ({ name, email, avatar }) => (
//     <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20, backgroundColor: 'skyblue', borderColor: 'black', borderWidth: 3, borderRadius: 20, padding: 12}}>
//       <Image
//         style={{ width: 60, height: 60, marginRight: 10, borderColor: 'white', borderWidth: 3, borderRadius: 15}}
//         source={{ uri: avatar }}
//       />
//       <View style={{margin: 10}}>
//         <Text>{name}</Text>
//         <Text>{email}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       <FlatList
//         data={userData}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderUserWithProps}
//       />
//     </View>
//   );
// };



