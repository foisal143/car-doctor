const accessToken = email => {
  fetch('http://localhost:5000/jwt', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.token);
      localStorage.setItem('access-token', data.token);
    });
};

export default accessToken;
