import { ref, firebaseAuth,database,firebaseStorage,firebase } from '../constants/configAuth'


export function upLoadToStorage(data,status,name,table){
  const imgName=''
  if(data.image){
    const imgName=name+'.'+data.image.name.split('.').pop();
  }
  var d = new Date();
  const val={
        'title':data.title,
        'status':data.status,
        'category':data.category,
        'content':data.content,
        'image': imgName,
        'date':d.toString()

  }
  const val2={
      'title':data.title,
      'status':data.status,
      'category':data.category,
      'content':data.content,
      'date':d.toString()
  }

  if(status==='create'){
    return firebaseStorage.child(`images/${imgName}`).put(data.image)
    .then(()=>{
        addInfo(table,val)
    })
  }else{
    if(data.image){
        return firebaseStorage.child(`images/${imgName}`).put(data.image)
        .then(()=>{
            updateInfo(table,val,data.id)
        })
    }else{
        return updateInfo(table,val2,data.id)
    }
  }
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