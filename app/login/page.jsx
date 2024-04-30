import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle( NextApiRequest, NextApiResponse) {
    
    console.log(NextApiRequest
    )

    
    // try {
    //     const { username, password } = req.body;

    //     if (username === 'Lewiz' && password === 'Lewiz') {
    //         return res.status(200).json({ message: 'Login successful!' });
    //     }
        
    //     return res.status(401).json({ message: 'Login failed. Invalid credentials.' });
    // } catch (error) {
    //     console.error('Error:', error); 
    //     return res.status(500).json({ message: 'Internal server error' });
    // }
}
