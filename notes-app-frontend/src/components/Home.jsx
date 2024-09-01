// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Welcome to Your Note App</h1>
//       <p style={styles.subtitle}>Manage your notes easily and efficiently.</p>
//       <div style={styles.buttonContainer}>
//         <Link to="/login" style={styles.button}>
//           Login
//         </Link>
//         <Link to="/register" style={styles.button}>
//           Register
//         </Link>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     width:'100vw',
//     backgroundColor: '#000000',
//   },
//   title: {
//     fontSize: '3rem',
//     marginBottom: '1rem',
//   },
//   subtitle: {
//     fontSize: '1.5rem',
//     marginBottom: '2rem',
//   },
//   buttonContainer: {
//     display: 'flex',
//     gap: '1rem',
//   },
//   button: {
//     padding: '0.75rem 1.5rem',
//     fontSize: '1.25rem',
//     textDecoration: 'none',
//     color: '#fff',
//     backgroundColor: '#007bff',
//     borderRadius: '5px',
//     transition: 'background-color 0.3s',
//   },
//   buttonHover: {
//     backgroundColor: '#0056b3',
//   },
// };

// export default Home;
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a separate CSS file

const LandingPage = () => {
  return (
    <div id="main">
      <div id="nav">
        <h1>Welcome to Your Note App</h1>
      </div>
      <div id="hero">
        <div id="links">
          <Link to="/login" id="box">
            <span id="a">Login</span>
          </Link>
          <Link to="/register" id="box">
            <span id="a">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
