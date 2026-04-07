import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const getStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const addStudent = async () => {
    if (editId) {
      await API.put(`/students/${editId}`, form);
      setEditId(null);
    } else {
      await API.post("/students", form);
    }
    setForm({ name: "", email: "", course: "" });
    getStudents();
  };

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    getStudents();
  };

  const editStudent = (student) => {
    setForm(student);
    setEditId(student.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Logout Button */}
        <div className="flex justify-end mb-6">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Dashboard
        </h2>

        {/* Add / Update Form */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            {editId ? "Update Student" : "Add Student"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Course"
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition-colors"
            onClick={addStudent}
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {/* Students List */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Students
          </h3>
          {students.length === 0 ? (
            <p className="text-gray-500">No students available.</p>
          ) : (
            <div className="space-y-4">
              {students.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-gray-800 font-medium mb-2 md:mb-0">
                    {s.name} - {s.email} - {s.course}
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 rounded transition-colors"
                      onClick={() => editStudent(s)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded transition-colors"
                      onClick={() => deleteStudent(s.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
