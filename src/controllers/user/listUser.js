import { getAllUsers } from '../../models/userModel.js';

 const listUsers = async (req, res) => {
    const users = await getAllUsers();
    res.json(users)
}

export default listUsers;