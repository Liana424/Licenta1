class HomeModel {
    constructor() {
        this.state = {
            users: [{
                firstName: "Ioana",
                lastName: "Onofrei",
                address: "Turzii",
                email: "ioana@yahoo.com",
                username: "Ioana",
                password: "qwe12w"

            }, {
                firstName: "Liana",
                lastName: "Timar",
                address: "Parcului",
                email: "liana@yahoo.com",
                username: "Liana",
                password: "zxsd34f"

            }]

        };
    }

    // addStudents(newStudents) {
    //     this.state.students = [
    //         ...this.state.students,
    //         ...newStudents
    //     ];
    // }

    addUser(newUser) {
        this.state.users = [
            ...this.state.users,
            {
                ...newUser

            }
        ];
    }

}

// folosim Singleton Design Pattern
const UserModelInstance = new UserModel();

export default UserModelInstance;