export default async function handler(req, res) {
  if (req.method === 'POST') {
      const { username, password } = req.query;

      try {
          if (username === 'demo' && password === 'password') {
              res.status(200).json({ message: 'Login successful!' });
          } else {
              res.status(401).json({ message: 'Login failed. Invalid credentials.' });
          }
      } catch (error) {
          res.status(500).json({ message: 'Internal server error' });
      }
  } else {
      res.status(405).json({ message: 'Method not allowed' });
  }
}
