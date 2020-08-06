import { ref, firebaseAuth,database,firebaseStorage } from '../constants/configAuth'


export function upLoadToStorage(data,status,name,table){
  const imgName=name+'.'+data.image.name.split('.').pop();
  var d = new Date();
  const val={
        'title':data.title,
        'status':data.status,
        'category':data.category,
        'content':data.content,
        'image': imgName,
        'date':d.toString()

  }
	return firebaseStorage.child(`images/${imgName}`).put(data.image)
  .then(()=>{
    status==='create'
      ?addInfo(table,val)
      :updateInfo(table,val,data.id)
  })
}

export function upLoadPicture(data,name,table){
  const imgName=name+'.'+data.image.name.split('.').pop();
  var d = new Date();
  const val={
        'image': imgName,
        'date':d.toString(),
  }

  return firebaseStorage.child(`images/${imgName}`).put(data.image)
  .then(()=>{
      addInfo(table,val)

  })
}

export function auth(user){
   return firebaseAuth().createUserWithEmailAndPassword(user.email,user.password)
   .then((data)=>{
        saveUser(data,user);
   })
}

export function saveUser(data,user){
const val={
      'email': data.email,
      'uid': data.uid,
      'firstname':user.firstname,
      'lastname':user.lastname,
      'tel':user.tel,
      'role':{
   //     'admin_page':user.admin_page,
    //    'room_page':user.room_page
      }
}

  return ref.child(`users`).push()
    .set(val)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}
/*
export function loginWithGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      firebase.auth().signInWithPopup(provider).then(function(result) {
 // This gives you a Google Access Token.
 var token = result.credential.accessToken;
 // The signed-in user info.
 var user = result.user;
});
      return user;
}
*/
export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}


export function addInfo(table,values){
  return ref.child(table).push()
          .set(values).then(()=>values)
}

export function getInfo(table){
  return database.ref(`/${table}`).once("value")
}

export function getInfoByKey(table,ky){
  return database.ref(table).child(ky).once("value")
  // database.ref(`/${table}/${ky}`).once("value")
}
export function getInfoById(table,id,value){
  return database.ref(`/${table}`).orderByChild(id).equalTo(value).once("value")
}

export function getInfoByUid(table,email,uid){
  return database.ref(`/${table}`)
  .orderByChild('uid')
  .equalTo(uid)
  .once("value")
}

export function delInfo(table,id){
  return database.ref(`/${table}`).child(id).remove()
}

export function delTable(table){
  return database.ref(`/${table}`).remove()
}



export function updateInfo(table,values,id){
  return database.ref(`/${table}`).child(id)
  .update(values)
}