// // import  { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';

// // const Profile = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [title, setTitle] = useState('');
// //   const [content, setContent] = useState('');

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:3000/profile', {
// //           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
// //         });
// //         setPosts(response.data.posts);
// //       } catch (err) {
// //         console.error('Failed to fetch profile', err);
// //       }
// //     };
// //     fetchProfile();
// //   }, []);

// //   const handleCreateNote = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('http://localhost:3000/createnote', { title, content }, {
// //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
// //       });
// //       setTitle('');
// //       setContent('');
// //       window.location.reload(); // refresh the page
// //     } catch (err) {
// //       console.error('Failed to create note', err);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Your Notes</h1>
// //       {posts.map(post => (
// //         <div key={post._id}>
// //           <Link to={`/note/${post.title}`}>{post.title}</Link>
// //         </div>
// //       ))}
// //       <form onSubmit={handleCreateNote}>
// //         <input
// //           type="text"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           placeholder="Note Title"
// //         />
// //         <textarea
// //           value={content}
// //           onChange={(e) => setContent(e.target.value)}
// //           placeholder="Note Content"
// //         />
// //         <button type="submit">Create Note</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Profile;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const [posts, setPosts] = useState([]);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/profile', {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//         });
//         setPosts(response.data.posts);
//       } catch (err) {
//         console.error('Failed to fetch profile', err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleCreateNote = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/createnote', { title, content }, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setTitle('');
//       setContent('');
//       window.location.reload(); // refresh the page
//     } catch (err) {
//       console.error('Failed to create note', err);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div>
//       <h1>Your Notes</h1>
//       {posts.map(post => (
//         <div key={post._id}>
//           <Link to={`/note/${post.title}`}>{post.title}</Link>
//         </div>
//       ))}
//       <form onSubmit={handleCreateNote}>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Note Title"
//         />
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Note Content"
//         />
//         <button type="submit">Create Note</button>
//       </form>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Profile;

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css"; // Assuming you have a separate CSS file

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setPosts(response.data.posts);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };
    fetchProfile();
  }, []);

  const handleCreateNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/createnote",
        { title, content },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setTitle("");
      setContent("");
      window.location.reload(); // refresh the page
    } catch (err) {
      console.error("Failed to create note", err);
    }
  };

  const handleLogout = () => {
    localStorage.setItem("token", null);
    navigate("/login");
  };

  return (
    <div id="main">
      <div id="nav2">
        <h3>Your Notes</h3>
        <a id="box2" onClick={handleLogout}>
          Logout
        </a>
      </div>
      <div id="upper">
        <div id="note-form">
          <form onSubmit={handleCreateNote}>
            <h1>Create Note</h1>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note Title"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Note Content"
            />
            <button id="submit" type="submit">
              Create Note
            </button>
          </form>
          </div>
          </div>
          <div id="lower">
          <div id="contents">
          {posts.map((post) => (
            <div key={post._id}>
              <Link to={`/note/${post.title}`} id="box">
                {post.title}
              </Link>
            </div>
          ))}
          </div>
          </div>
          
          
        </div>
  );
};

export default Profile;
