import db from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const getDashboardData = async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM users WHERE role = ?', ["superadmin"]
        )
        return res.status(200).json({ data: rows });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching dashboard data", error });
    }
}

export const getUsersData = async (req, res) => {
    try {
        const [rows] = await db.execute(
            "SELECT * FROM users WHERE role != ?", ["superadmin"]
        )
        return res.status(200).json({ data: rows });
    } catch (err) {
        return res.status(500).json({message: "Error fetching users data" + err});
    }
}

export const addUser = async (req, res) => {
    try{
        const { name, email, password, confirmPassword, role } = req.body; 

        if (!name || !email || !password || !confirmPassword || !role) {
            return res.status(400).json({
                message: "All fields are required"
            });
            }
            const [existingUser] = await db.execute(
                'SELECT * FROM users WHERE email = ?',
                [email]
            )

            if(existingUser.length > 0){
                return res.status(409).json({ message: 'Email already in use' });
            }

            if(password !== confirmPassword){
                return res.status(400).json({ message: 'Passwords do not match' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            const [result] = await db.execute(
                'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
                [name, email, hashedPassword, role]
            );

            if(!result.insertId){
                return res.status(500).json({ message: 'Error creating user'});
            }

            return res.status(201).json({ message: 'User created successfully' });
    } catch (err){
        return res.status(500).json({message: 'User add failed || ' + err.message})
    }
}

