import db from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body; 
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if(rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password, rows[0].password);
    if(!match) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
        {
            id: rows[0].id,
            email: rows[0].email,
            role: rows[0].role
        },
        process.env.JWT_SECRET,
        { expiresIn: '12h' }
    );  
    return res.status(200).json({ token, role: rows[0].role, name: rows[0].name, message: 'Login successful' });
}

export const signup = async (req, res) => {
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
}
