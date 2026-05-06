body {
  margin: 0;
  font-family: 'Segoe UI';
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #333;
}

.app {
  background: white;
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
  text-align: center;
}

.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.input-group {
  display: flex;
  gap: 5px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

select {
  border-radius: 10px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #2a5298;
  color: white;
}

button:hover {
  opacity: 0.8;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 8px 0;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.3s;
}

.low { background: #d4edda; }
.medium { background: #fff3cd; }
.high { background: #f8d7da; }

.done {
  text-decoration: line-through;
  opacity: 0.6;
}

.delete-btn {
  background: red;
  border-radius: 5px;
  padding: 5px 8px;
}

.deleteAll {
  width: 100%;
  margin-top: 15px;
  background: black;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: translateY(0);}
}