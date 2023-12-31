const registerService = {
    getAllUsersAllowed: () => {
        return firebase.firestore()
        .collection('usersAllowed')
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })
    },
    addUser: (email, uid) => {
        return firebase.firestore()
        .collection("users")
        .doc(uid)
        .set({
            "email": email
        })
    },
}