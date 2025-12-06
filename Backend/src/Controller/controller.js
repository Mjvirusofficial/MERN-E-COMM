const User = require('../SchemaModel/user');

// User create/save
const createUser = async (req, res) => {
    try {
        const { Name, Password } = req.body;

        const newUser = new User({
            name: Name,
            password: Password
        });

        await newUser.save();

        res.status(201).json({
            message: "Data saved in Database",
            user: newUser
        });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// Fetch all users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json({
            message: "Data fetched successfully",
            users: allUsers
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}


// DELETE user by ID
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(user ? 200 : 404).json(
            user ? { message: "User deleted", user } : { message: "User not found" }
        );
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name: req.body.Name, password: req.body.Password },
            { new: true }
        );

        res.status(user ? 200 : 404).json(
            user ? { message: "User updated", user } : { message: "User not found" }
        );
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};



module.exports = {createUser,getAllUsers, deleteUser, updateUser}



