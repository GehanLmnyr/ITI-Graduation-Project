export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.data) {
      // for Node.js Express back-end
      return { 'x-access-token': user.data };
    } else {
      return {};
    }
  }
  